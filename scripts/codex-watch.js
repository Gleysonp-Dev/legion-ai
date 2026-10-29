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

// Text printed by a shell/tool call, whatever shape this Codex version logs it in.
function toolOutput(p) {
  if (!/(_call_output|exec_command_end)$/.test(p.type || '')) return '';
  const o = p.output != null ? p.output : p.aggregated_output != null ? p.aggregated_output : p.stdout;
  if (typeof o === 'string') return o;
  if (Array.isArray(o)) return o.map(x => (x && typeof x.text === 'string' ? x.text : '')).join('\n');
  if (o && typeof o.output === 'string') return o.output;
  return '';
}

// Codex runs `council.js` inside its sandbox, which may not be allowed to write ~/.legion (or may point
// LEGION_HOME elsewhere). The report path is printed as "_Saved: <file>_": bring it into ~/.legion/council.
function importCouncil(text, info) {
  if (/no independent reviewer available/.test(text)) {
    mem.logEvent('council-skip', { tool: 'codex', reason: 'no other AI CLI found (install and sign in to Claude Code or Gemini CLI)' });
    return;
  }
  const m = text.match(/Saved: ([^\n"]+?\.md)_/);
  if (!m) return;
  const src = m[1].replace(/\\+/g, '\\').replace(/\\n$/, '');
  const name = path.basename(src.replace(/\\/g, '/'));
  if (!/^[\w-]+\.md$/.test(name)) return;
  const dir = path.join(mem.LEGION_HOME, 'council');
  const dest = path.join(dir, name);
  if (fs.existsSync(dest)) return; // already there (council.js could write it) or already imported
  let data = null, md = null;
  try { md = fs.readFileSync(src, 'utf8'); } catch { /* sandbox temp may be private */ }
  try { data = JSON.parse(fs.readFileSync(src.replace(/\.md$/, '.json'), 'utf8')); } catch { /* rebuild below */ }
  if (!md) { const i = text.indexOf('# Legion Council'); md = i >= 0 ? text.slice(i).split(/\\n|\n/).join('\n').replace(/\\r/g, '').replace(/\\"/g, '"').split(/\n?\{"chunk_id"|"\}\s*$/)[0] : null; }
  if (!data && md) data = summarize(md, name);
  if (!data) return;
  try {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dest, (md || '') + '\n');
    fs.writeFileSync(dest.replace(/\.md$/, '.json'), JSON.stringify(data, null, 2));
  } catch { return; }
  const list = data.reviews || data.results || [];
  mem.logEvent('council-end', { tool: 'codex', mode: data.mode, reviewers: list.map(r => r.key), consensus: data.consensus || null, findings: (data.findings || []).length, failed: list.filter(r => !r.ok).map(r => `${r.key}: ${r.error || 'failed'}`), file: dest });
  info.councils = (info.councils || 0) + 1;
}

const KEYS = { codex: /codex|openai/i, claude: /claude|anthropic/i, gemini: /gemini|google/i };
function keyOf(label) { return Object.keys(KEYS).find(k => KEYS[k].test(label)) || label.toLowerCase(); }

// Minimal report data from the printed markdown, when the JSON file is not readable from here.
function summarize(md, name) {
  const mode = (name.match(/-(review|plan|ask)\.md$/) || [])[1] || 'review';
  const lines = md.split('\n');
  if (mode === 'ask') {
    const results = [];
    lines.forEach((l, i) => { const h = l.match(/^## (.+?)( — ⚠️ failed)?$/); if (h) results.push({ key: keyOf(h[1]), ok: !h[2], error: h[2] ? (lines.slice(i + 1).find(x => x.trim()) || '').trim() : null }); });
    return { mode, results };
  }
  const c = md.match(/\*\*Consensus: \S+ ([a-z-]+)\*\*/);
  const reviews = [];
  for (const l of lines) { const r = l.match(/^\| ([^|]+?) \| (⚠️ failed|[^|]*) \| ([^|]*) \| \d+s \|$/); if (r && r[1] !== 'Reviewer') reviews.push({ key: keyOf(r[1]), ok: !/failed/.test(r[2]), error: /failed/.test(r[2]) ? r[3].trim() : null }); }
  const findings = lines.filter(l => /^\| F\d+ \|/.test(l)).map(l => ({ severity: l.split('|')[2].trim() }));
  return { mode, consensus: c ? c[1] : 'no-verdict', findings, reviews };
}

function handleLine(row, file, info, d) {
  const p = row.payload || {};
  if (row.type === 'session_meta') { classify(p, info, file); return; }
  if (info.ignore) return;
  const out = toolOutput(p);
  if (out && /Legion Council/.test(out)) importCouncil(out, info);
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
module.exports = { scan, handleLine, readNew, importCouncil, summarize };
