#!/usr/bin/env node
/**
 * Legion Codex watcher — turns Codex session logs into Legion activity.
 *
 * Codex has no hooks, so instead of relying on the model to report what it does, we read the
 * session logs Codex already writes (~/.codex/sessions/YYYY/MM/DD/*.jsonl):
 *   - a subagent thread (session_meta.source.subagent) → agent-start / agent-end with its tokens
 *   - the user's own messages in the root thread       → prompt event + feedback/preference learning
 *   - task_complete in the root thread                  → turn-end
 * Reads only new bytes since the last scan (logs can be hundreds of MB). Zero dependencies.
 *
 *   node codex-watch.js            one scan (also run automatically by Mission Control)
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const mem = require('./memory.js');

const CODEX_HOME = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
const SESSIONS = path.join(CODEX_HOME, 'sessions');
const STATE = path.join(mem.LEGION_HOME, 'codex-watch.json');
const BIG = 5 * 1024 * 1024;          // first sight of a bigger file: skip its history, start at the end
const MAX_CHUNK = 8 * 1024 * 1024;    // never read more than this per file per scan
const DAYS_BACK = 3;

function loadState() { try { return JSON.parse(fs.readFileSync(STATE, 'utf8')); } catch { return { files: {} }; } }
function saveState(s) {
  // forget files we have not touched for a week
  const cutoff = Date.now() - 7 * 864e5;
  for (const [f, v] of Object.entries(s.files)) if ((v.seen || 0) < cutoff) delete s.files[f];
  try { fs.mkdirSync(path.dirname(STATE), { recursive: true }); fs.writeFileSync(STATE, JSON.stringify(s)); } catch { /* best effort */ }
}

// Codex stores sessions in local-date folders; only look at the last few days.
function recentFiles() {
  const out = [];
  for (let i = 0; i < DAYS_BACK; i++) {
    const d = new Date(Date.now() - i * 864e5);
    const dir = path.join(SESSIONS, String(d.getFullYear()), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0'));
    let names = [];
    try { names = fs.readdirSync(dir).filter(n => n.endsWith('.jsonl')); } catch { continue; }
    for (const n of names) out.push(path.join(dir, n));
  }
  return out;
}

// Long-running threads keep appending to an old file: also follow any file we already track.
function trackedFiles(state) { return Object.keys(state.files).filter(f => { try { fs.accessSync(f); return true; } catch { return false; } }); }

function readNew(file, info) {
  const size = fs.statSync(file).size;
  if (size < info.offset) info.offset = 0; // truncated / rotated
  if (size === info.offset) return [];
  const start = Math.max(info.offset, size - MAX_CHUNK);
  const buf = Buffer.alloc(size - start);
  const fd = fs.openSync(file, 'r');
  try { fs.readSync(fd, buf, 0, buf.length, start); } finally { fs.closeSync(fd); }
  const skip = start > info.offset ? buf.indexOf(0x0a) + 1 : 0; // we jumped ahead: drop the partial first line
  const lastNl = buf.lastIndexOf(0x0a);
  if (lastNl < skip) { if (skip) info.offset = start + skip; return []; } // no complete line yet
  info.offset = start + lastNl + 1;
  const lines = [];
  for (const l of buf.slice(skip, lastNl).toString('utf8').split('\n')) { if (!l.trim()) continue; try { lines.push(JSON.parse(l)); } catch { /* invalid line */ } }
  return lines;
}

// Root threads the user talks to; everything else (guardian/auto-review threads, internal helpers) is ignored.
const USER_THREADS = new Set(['user', 'chatgpt_handoff', 'cli', 'vscode', 'exec']);
function classify(p, info, file) {
  const spawn = p.source && p.source.subagent && p.source.subagent.thread_spawn;
  if (spawn || (p.thread_source === 'subagent' && p.agent_role)) {
    info.agent = legionName(p.agent_role || spawn.agent_role || 'agent');
    info.task = String(p.agent_path || (spawn && spawn.agent_path) || '').split('/').pop().replace(/_/g, ' ');
    info.id = p.id || path.basename(file);
    mem.logEvent('agent-start', { tool: 'codex', agent: info.agent, task: info.task, id: info.id });
  } else if (USER_THREADS.has(p.thread_source) || (!p.thread_source && !(p.source && p.source.subagent))) info.root = true;
  else info.ignore = true;
}

const legionName = role => String(role || '').replace(/_/g, '-');
const isInjected = t => /^\s*(<|# AGENTS\.md|# Files mentioned)/.test(t);

function userText(p) {
  if (p.type === 'user_message' && typeof p.message === 'string') return p.message;
  if (p.type === 'message' && p.role === 'user' && Array.isArray(p.content)) return p.content.map(c => c.text || '').join('\n');
  return '';
}

function handleLine(row, file, info, d) {
  const p = row.payload || {};
  if (row.type === 'session_meta') { classify(p, info, file); return; }
  if (info.ignore) return;
  if (p.type === 'token_count' && p.info && p.info.total_token_usage) { info.tokens = p.info.total_token_usage.total_tokens || info.tokens; return; }
  // The user's words arrive at the start of a turn; later "user" items are tool results, hand-backs or history.
  if (p.type === 'task_started') { info.turnOpen = true; return; }
  if (['reasoning', 'function_call', 'custom_tool_call', 'local_shell_call', 'agent_message'].includes(p.type) || (p.type === 'message' && p.role === 'assistant')) { info.turnOpen = false; }
  if (p.type === 'task_complete') {
    if (info.agent && !info.ended) {
      info.ended = true;
      if (mem.logEvent('agent-end', { tool: 'codex', agent: info.agent, id: info.id, tokens: info.tokens || null })) {
        d.usage.agents[info.agent] = (d.usage.agents[info.agent] || 0) + 1;
        mem.noteActivity(d, 'agent', info.agent);
        d.__dirty = true;
      }
    } else if (info.root) mem.logEvent('turn-end', { tool: 'codex' });
    return;
  }
  if (info.root && info.turnOpen) {
    const raw = userText(p);
    if (!raw || isInjected(raw)) return;
    const text = mem.stripInjected(raw);
    if (!text || text === info.lastPrompt) return; // Codex can record the same turn input twice
    info.lastPrompt = text;
    mem.judgePreviousTurn(d, text);
    mem.handlePrompt(d, text);
    d.__dirty = true;
    mem.logEvent('prompt', { tool: 'codex', text: mem.isSensitive(text) ? '(hidden)' : text.slice(0, 120) });
  }
}

function scan() {
  const state = loadState();
  const d = mem.load();
  const files = new Set([...recentFiles(), ...trackedFiles(state)]);
  let n = 0;
  for (const file of files) {
    let info = state.files[file];
    let size = 0; try { size = fs.statSync(file).size; } catch { continue; }
    if (!info) {
      info = state.files[file] = { offset: 0 };
      // Old history of a big thread is not news: only read its first line (to know if it is a subagent).
      if (size > BIG) {
        try {
          const fd = fs.openSync(file, 'r'); const b = Buffer.alloc(64 * 1024); const r = fs.readSync(fd, b, 0, b.length, 0); fs.closeSync(fd);
          const first = JSON.parse(b.slice(0, r).toString('utf8').split('\n')[0]);
          if (first.type === 'session_meta') { const p = first.payload || {}; if (USER_THREADS.has(p.thread_source) || !p.thread_source) info.root = true; else info.ignore = true; }
        } catch { /* ignore */ }
        info.offset = size;
      } else if (Date.now() - fs.statSync(file).mtimeMs > 6 * 3600e3) {
        info.offset = size; // finished long ago: nothing live to show
      }
    }
    info.seen = Date.now();
    for (const row of readNew(file, info)) { handleLine(row, file, info, d); n++; }
  }
  if (d.__dirty) { delete d.__dirty; mem.save(d); }
  saveState(state);
  return n;
}

if (require.main === module) { const n = scan(); console.log(`codex-watch: processed ${n} new log line(s).`); }
module.exports = { scan, handleLine, readNew };
