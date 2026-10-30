#!/usr/bin/env node
/**
 * Legion Gemini watcher — turns Gemini CLI chat logs into Legion activity.
 *
 * Gemini CLI has no hooks Legion can use, but it records every chat in
 * ~/.gemini/tmp/<project>/chats/session-*.jsonl. From those lines we get:
 *   - the user's own messages                 → prompt event + feedback/preference learning
 *   - calls to a Legion subagent (a tool named after the agent) → agent-start / agent-end
 *   - token counts per model reply            → the dashboard's cost panel (see memory.geminiUsage)
 * Sessions opened by the Legion council (a reviewer run) are ignored. Zero dependencies.
 *
 *   node gemini-watch.js            one scan (also run automatically by Mission Control)
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const mem = require('./memory.js');
const { readNew } = require('./codex-watch.js');

const GEMINI_HOME = process.env.GEMINI_HOME || path.join(os.homedir(), '.gemini');
const STATE = path.join(mem.LEGION_HOME, 'gemini-watch.json');
const DAYS_BACK = 3;

function loadState() { try { return JSON.parse(fs.readFileSync(STATE, 'utf8')); } catch { return { files: {} }; } }
function saveState(s) {
  const cutoff = Date.now() - 7 * 864e5;
  for (const [f, v] of Object.entries(s.files)) if ((v.seen || 0) < cutoff) delete s.files[f];
  try { fs.mkdirSync(path.dirname(STATE), { recursive: true }); fs.writeFileSync(STATE, JSON.stringify(s)); } catch { /* best effort */ }
}

// ~/.gemini/tmp/<project>/chats/*.jsonl touched in the last few days
function chatFiles() {
  const out = [];
  const root = path.join(GEMINI_HOME, 'tmp');
  let projects = [];
  try { projects = fs.readdirSync(root); } catch { return out; }
  const cutoff = Date.now() - DAYS_BACK * 864e5;
  for (const p of projects) {
    const dir = path.join(root, p, 'chats');
    let names = [];
    try { names = fs.readdirSync(dir).filter(n => n.endsWith('.jsonl')); } catch { continue; }
    for (const n of names) {
      const f = path.join(dir, n);
      try { if (fs.statSync(f).mtimeMs >= cutoff) out.push(f); } catch { /* gone */ }
    }
  }
  return out;
}

// Legion agents installed for Gemini: ~/.gemini/agents/<name>.md
let agentCache = null;
function legionAgents() {
  if (agentCache) return agentCache;
  agentCache = new Set();
  try { for (const n of fs.readdirSync(path.join(GEMINI_HOME, 'agents'))) if (n.endsWith('.md')) agentCache.add(n.slice(0, -3)); } catch { /* none */ }
  return agentCache;
}
const agentOf = name => { const n = String(name || '').replace(/_/g, '-'); return legionAgents().has(n) ? n : null; };

const COUNCIL = /^\s*You are (an independent senior reviewer|one of several independent experts) on the Legion council|^\s*You are a reviewer\. Follow the instructions/;
const isInjected = t => /^\s*</.test(t);
const textOf = c => (typeof c === 'string' ? c : Array.isArray(c) ? c.map(x => (x && x.text) || '').join('\n') : '');

function handleLine(row, file, info, d) {
  if (row.sessionId && row.kind) { // header
    info.session = row.sessionId;
    if (row.kind !== 'main') {
      const a = agentOf(row.agentName || row.agent || row.subagent || row.name);
      if (a) { info.subagent = a; mem.logEvent('agent-start', { tool: 'gemini', agent: a, id: row.sessionId }); } else info.ignore = true;
    }
    return;
  }
  if (info.ignore || !row.type) return;
  if (row.type === 'user') {
    const raw = textOf(row.content);
    if (!raw || isInjected(raw)) return;
    if (COUNCIL.test(raw)) { info.ignore = true; return; } // the council asked this Gemini session for a review
    if (info.subagent || (info.users || []).includes(row.id)) return;
    info.users = [...(info.users || []), row.id].slice(-50);
    const text = mem.stripInjected(raw).trim();
    if (!text || /^\/\w/.test(text)) return; // slash commands are not requests
    mem.judgePreviousTurn(d, text);
    mem.handlePrompt(d, text);
    d.__dirty = true;
    mem.logEvent('prompt', { tool: 'gemini', text: mem.isSensitive(text) ? '(hidden)' : text.slice(0, 120) });
    return;
  }
  if (row.type === 'gemini') {
    if (info.subagent && row.tokens) info.tokens = (info.tokens || 0) + (row.tokens.total || 0);
    info.calls = info.calls || {};
    for (const c of row.toolCalls || []) {
      const agent = agentOf(c.name);
      if (!agent) continue;
      const st = info.calls[c.id];
      const done = c.result != null || /success|error|cancel/i.test(String(c.status || ''));
      if (!st) {
        mem.logEvent('agent-start', { tool: 'gemini', agent, task: String((c.args && (c.args.task || c.args.description || c.args.prompt || c.args.query)) || '').replace(/\s+/g, ' ').slice(0, 60), id: c.id });
        info.calls[c.id] = 'start';
      }
      if (done && info.calls[c.id] !== 'end') {
        info.calls[c.id] = 'end';
        if (mem.logEvent('agent-end', { tool: 'gemini', agent, id: c.id, tokens: null })) {
          d.usage.agents[agent] = (d.usage.agents[agent] || 0) + 1;
          mem.noteActivity(d, 'agent', agent);
          d.__dirty = true;
        }
      }
    }
  }
}

function scan() {
  const state = loadState();
  const d = mem.load();
  let n = 0;
  for (const file of new Set([...chatFiles(), ...Object.keys(state.files).filter(f => fs.existsSync(f))])) {
    let size = 0, mtime = 0;
    try { const s = fs.statSync(file); size = s.size; mtime = s.mtimeMs; } catch { continue; }
    let info = state.files[file];
    if (!info) {
      info = state.files[file] = { offset: 0 };
      if (Date.now() - mtime > 6 * 3600e3) { // finished long ago: classify from the header, skip the history
        try { const first = JSON.parse(fs.readFileSync(file, 'utf8').split('\n')[0]); if (first.kind && first.kind !== 'main') info.ignore = true; } catch { /* ignore */ }
        info.offset = size;
      }
    }
    info.seen = Date.now();
    for (const row of readNew(file, info)) { handleLine(row, file, info, d); n++; }
    if (info.subagent && !info.ended && Date.now() - mtime > 60e3 && info.offset >= size) { // subagent session went quiet: it finished
      info.ended = true;
      mem.logEvent('agent-end', { tool: 'gemini', agent: info.subagent, id: info.session, tokens: info.tokens || null });
    }
  }
  if (d.__dirty) { delete d.__dirty; mem.save(d); }
  saveState(state);
  return n;
}

if (require.main === module) { const n = scan(); console.log(`gemini-watch: processed ${n} new log line(s).`); }
module.exports = { scan, handleLine, chatFiles };
