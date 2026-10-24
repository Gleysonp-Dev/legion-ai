#!/usr/bin/env node
/**
 * Legion memory — a small, local memory that learns how the user likes to work.
 *
 * Storage (all local, human-readable):
 *   ~/.legion/memory/memory.json   rules, observations, usage stats, language stats
 *   ~/.legion/memory/profile.md    generated view of the active rules (injected into sessions)
 * Override the base folder with LEGION_HOME.
 *
 * Zero dependencies. Works on Windows, macOS and Linux (Node 18+).
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const LEGION_HOME = process.env.LEGION_HOME || path.join(os.homedir(), '.legion');
const DIR = path.join(LEGION_HOME, 'memory');
const STORE = path.join(DIR, 'memory.json');
const PROFILE = path.join(DIR, 'profile.md');
const PROMOTE_AT = 2;          // an observation seen this many times becomes a rule
const MAX_RULES = 60;          // keep the injected profile small
const MAX_OBS = 300;

/* ---------------- storage ---------------- */

function empty() {
  return { version: 1, rules: [], observations: [], usage: { agents: {}, skills: {} }, lang: { pt: 0, en: 0, es: 0, total: 0 }, nextId: 1 };
}
function load() {
  try {
    const d = JSON.parse(fs.readFileSync(STORE, 'utf8'));
    return Object.assign(empty(), d);
  } catch { return empty(); }
}
function save(d) {
  fs.mkdirSync(DIR, { recursive: true });
  const tmp = STORE + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(d, null, 2));
  fs.renameSync(tmp, STORE);
  fs.writeFileSync(PROFILE, renderProfile(d));
}
const now = () => new Date().toISOString();
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

/* ---------------- safety ---------------- */

// Never store secrets or sensitive personal data.
const SENSITIVE = [
  /\b(password|passwd|senha|contrase[nñ]a|passcode)\b/i,
  /\b(api[ _-]?key|secret|token|bearer|private key|chave (de )?api|ssh-rsa)\b/i,
  /\b(cpf|cnpj|ssn|social security|passport|passaporte)\b/i,
  /\b(credit card|cart[aã]o de cr[eé]dito|iban|routing number|account number|conta banc[aá]ria)\b/i,
  /\b(diagnos|medica[tç]|doen[cç]a|illness|disease|therapy|terapia|pregnan|gr[aá]vida)\w*/i,
  /\d[\d -]{11,}\d/,                       // long digit runs (cards, accounts, ids)
  /\b(sk|pk|ghp|gho|xox[abp])[-_][A-Za-z0-9]{10,}/,  // token-like strings
  /[A-Za-z0-9+/]{32,}={0,2}/               // base64-ish blobs
];
function isSensitive(t) { return SENSITIVE.some(r => r.test(t)); }

/* ---------------- classification ---------------- */

const CATS = [
  ['language', /\b(portugu[eê]s|portuguese|english|ingl[eê]s|espanhol|spanish|idioma|language|pt-br|en-us)\b/i],
  ['stack', /\b(typescript|javascript|python|react|next\.?js|vue|svelte|node|deno|bun|go|golang|rust|java|kotlin|swift|flutter|django|fastapi|express|tailwind|postgres|mysql|mongo|supabase|firebase|docker|kubernetes|aws|gcp|azure|vercel|npm|pnpm|yarn|pip|poetry|uv)\b/i],
  ['workflow', /\b(tests?|testes?|testing|commits?|branch(es)?|pull requests?|prs?|deploys?|deployment|reviews?|revis[aã]o|lint|ci|tdd|docs|documenta[cç][aã]o|documentation|changelog|plans?|plano|planejamento)\b/i],
  ['style', /\b(emoji|tone|tom|formal|casual|short|curt[oa]s?|concis|long|detalh|detail|bullet|t[oó]picos|markdown|explica|explain|verbose|direto|direct)\w*/i],
  ['tools', /\b(vscode|cursor|vim|neovim|terminal|powershell|bash|zsh|git|github|gitlab|jira|notion|slack|figma)\b/i]
];
function categorize(t) { for (const [c, r] of CATS) if (r.test(t)) return c; return 'general'; }

// Explicit "remember this" → promote immediately. Soft signals → observe and wait for repetition.
const EXPLICIT = /\b(remember( that)?|from now on|going forward|always remember|lembre(-se)?( que| de)?|a partir de agora|daqui (pra|para) frente|de agora em diante|guarde (isso|que)|anote (isso|que)|recuerda|a partir de ahora)\b/i;
const SOFT = /\b(always|never|don'?t ever|do not ever|i prefer|i'?d prefer|prefer|i like|i hate|i don'?t like|please stop|stop (using|adding|doing)|avoid|sempre|nunca|prefiro|eu prefiro|gosto de|eu gosto|n[aã]o gosto|odeio|evite|pare de|n[aã]o (use|usa|coloque|fa[cç]a|quero que)|siempre|prefiero|no uses)\b/i;

function splitSentences(text) {
  return text.split(/(?<=[.!?\n])\s+|\n+/).map(s => s.trim()).filter(Boolean);
}
function extractPreferences(prompt) {
  if (!prompt || typeof prompt !== 'string') return [];
  if (prompt.length > 4000) prompt = prompt.slice(0, 4000);
  // skip code blocks
  prompt = prompt.replace(/```[\s\S]*?```/g, ' ');
  const out = [];
  for (const s of splitSentences(prompt)) {
    if (s.length < 8 || s.length > 220) continue;
    const explicit = EXPLICIT.test(s);
    if (!explicit && !SOFT.test(s)) continue;
    if (isSensitive(s)) continue;
    if (/\?\s*$/.test(s)) continue; // questions are not preferences
    out.push({ text: s.replace(/\s+/g, ' '), explicit });
  }
  return out.slice(0, 3);
}

const STOP = {
  pt: /\b(n[aã]o|voc[eê]|para|com|uma|isso|est[aá]|tamb[eé]m|quero|fazer|como|porque|mais|ent[aã]o|ol[aá]|obrigad[oa])\b/gi,
  en: /\b(the|and|you|with|this|that|please|what|how|can|want|make|should|would|there|thanks)\b/gi,
  es: /\b(usted|para|con|una|esto|est[aá]|tambi[eé]n|quiero|hacer|c[oó]mo|porque|m[aá]s|entonces|hola|gracias|pero)\b/gi
};
function detectLang(t) {
  const score = {};
  for (const [k, r] of Object.entries(STOP)) score[k] = (t.match(r) || []).length;
  const best = Object.entries(score).sort((a, b) => b[1] - a[1])[0];
  return best[1] >= 2 ? best[0] : null;
}
const LANG_NAME = { pt: 'Portuguese (pt-BR)', en: 'English', es: 'Spanish' };

/* ---------------- core operations ---------------- */

function findRule(d, text) { const k = norm(text); return d.rules.find(r => norm(r.text) === k); }

function addRule(d, text, category, source) {
  text = String(text).trim().replace(/\s+/g, ' ');
  if (!text) throw new Error('empty rule');
  if (isSensitive(text)) throw new Error('refused: Legion never stores secrets or sensitive personal data');
  if (text.length > 240) text = text.slice(0, 240);
  const existing = findRule(d, text);
  if (existing) { existing.weight += 1; existing.updated = now(); return { rule: existing, created: false }; }
  const rule = { id: 'r' + d.nextId++, text, category: category || categorize(text), weight: 1, source: source || 'user', created: now(), updated: now() };
  d.rules.push(rule);
  // drop observation duplicates
  d.observations = d.observations.filter(o => norm(o.text) !== norm(text));
  if (d.rules.length > MAX_RULES) {
    d.rules.sort((a, b) => b.weight - a.weight || b.updated.localeCompare(a.updated));
    d.rules = d.rules.slice(0, MAX_RULES);
  }
  return { rule, created: true };
}

function observe(d, text) {
  if (isSensitive(text)) return null;
  if (findRule(d, text)) { const r = findRule(d, text); r.weight += 1; r.updated = now(); return { promoted: false, rule: r }; }
  const k = norm(text);
  let o = d.observations.find(x => norm(x.text) === k);
  if (!o) { o = { id: 'o' + d.nextId++, text, category: categorize(text), count: 0, first: now(), last: now() }; d.observations.push(o); }
  o.count += 1; o.last = now();
  if (o.count >= PROMOTE_AT) {
    const { rule } = addRule(d, o.text, o.category, 'learned');
    return { promoted: true, rule };
  }
  if (d.observations.length > MAX_OBS) {
    d.observations.sort((a, b) => b.count - a.count || b.last.localeCompare(a.last));
    d.observations = d.observations.slice(0, MAX_OBS);
  }
  return { promoted: false, observation: o };
}

function learn(d) {
  const promoted = [];
  for (const o of [...d.observations]) if (o.count >= PROMOTE_AT) { addRule(d, o.text, o.category, 'learned'); promoted.push(o.text); }
  return promoted;
}

function forget(d, key) {
  const k = norm(key);
  const before = d.rules.length + d.observations.length;
  d.rules = d.rules.filter(r => r.id !== key && norm(r.text) !== k && !(k.length > 3 && norm(r.text).includes(k)));
  d.observations = d.observations.filter(o => o.id !== key && norm(o.text) !== k && !(k.length > 3 && norm(o.text).includes(k)));
  return before - (d.rules.length + d.observations.length);
}

function bump(map, key) { if (!key) return; map[key] = (map[key] || 0) + 1; }
function top(map, n) { return Object.entries(map || {}).sort((a, b) => b[1] - a[1]).slice(0, n); }

function detectedLanguage(d) {
  const l = d.lang || {};
  if (!l.total || l.total < 5) return null;
  const best = ['pt', 'en', 'es'].map(k => [k, l[k] || 0]).sort((a, b) => b[1] - a[1])[0];
  const share = best[1] / l.total;
  return share >= 0.7 ? { code: best[0], name: LANG_NAME[best[0]], share: Math.round(share * 100), total: l.total } : null;
}

/* ---------------- rendering ---------------- */

function renderProfile(d) {
  const lines = ['# Legion user profile', '', '_Generated by Legion memory. Edit with `node ~/.legion/bin/memory.js` (add / forget). The user\'s current request always overrides these rules._', ''];
  const lang = detectedLanguage(d);
  if (lang) lines.push(`- **Language:** the user usually writes in ${lang.name} (${lang.share}% of ${lang.total} messages) — reply in that language unless asked otherwise.`, '');
  const byCat = {};
  for (const r of d.rules) (byCat[r.category] = byCat[r.category] || []).push(r);
  const order = ['language', 'style', 'stack', 'workflow', 'tools', 'general'];
  if (!d.rules.length) lines.push('_No preferences recorded yet._');
  for (const c of order) {
    if (!byCat[c]) continue;
    lines.push(`## ${c[0].toUpperCase() + c.slice(1)}`);
    for (const r of byCat[c].sort((a, b) => b.weight - a.weight)) lines.push(`- ${r.text}${r.weight > 1 ? ` _(×${r.weight})_` : ''}`);
    lines.push('');
  }
  const ta = top(d.usage.agents, 5), ts = top(d.usage.skills, 5);
  if (ta.length || ts.length) {
    lines.push('## Frequently used');
    if (ta.length) lines.push(`- Agents: ${ta.map(([k, v]) => `${k} (${v})`).join(', ')}`);
    if (ts.length) lines.push(`- Skills: ${ts.map(([k, v]) => `${k} (${v})`).join(', ')}`);
    lines.push('');
  }
  return lines.join('\n');
}

function context(d) {
  const body = renderProfile(d).split('\n').slice(3).join('\n').trim();
  return `<legion-memory>\nWhat Legion has learned about how this user likes to work. Apply it silently; the current request wins on conflict. To save a new lasting preference run: node ~/.legion/bin/memory.js add "<rule>"\n\n${body}\n</legion-memory>`;
}

function show(d) {
  const out = [];
  out.push(`Legion memory — ${STORE}`, '');
  out.push(`Rules (${d.rules.length}):`);
  for (const r of d.rules) out.push(`  [${r.id}] (${r.category}, ×${r.weight}, ${r.source}) ${r.text}`);
  if (!d.rules.length) out.push('  (none)');
  out.push('', `Pending observations (${d.observations.length}) — promoted after ${PROMOTE_AT} sightings:`);
  for (const o of d.observations.slice(0, 20)) out.push(`  [${o.id}] (×${o.count}) ${o.text}`);
  if (!d.observations.length) out.push('  (none)');
  const lang = detectedLanguage(d);
  out.push('', `Detected language: ${lang ? `${lang.name} (${lang.share}% of ${lang.total})` : 'not enough data yet'}`);
  const ta = top(d.usage.agents, 10), ts = top(d.usage.skills, 10);
  out.push(`Top agents: ${ta.map(([k, v]) => `${k}=${v}`).join(', ') || '-'}`);
  out.push(`Top skills: ${ts.map(([k, v]) => `${k}=${v}`).join(', ') || '-'}`);
  return out.join('\n');
}

/* ---------------- hooks ---------------- */

// Keep a stable copy of this CLI at ~/.legion/bin/memory.js so agents, skills and Codex can call it.
function ensureCli() {
  try {
    const dest = path.join(LEGION_HOME, 'bin', 'memory.js');
    if (path.resolve(dest) === path.resolve(__filename)) return;
    const src = fs.readFileSync(__filename);
    let cur = null; try { cur = fs.readFileSync(dest); } catch {}
    if (!cur || !cur.equals(src)) { fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, src); }
  } catch { /* best effort */ }
}

function readStdin() {
  return new Promise(resolve => {
    if (process.stdin.isTTY) return resolve('');
    let data = '';
    const t = setTimeout(() => resolve(data), 1500);
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', c => (data += c));
    process.stdin.on('end', () => { clearTimeout(t); resolve(data); });
    process.stdin.on('error', () => { clearTimeout(t); resolve(data); });
  });
}

function handlePrompt(d, prompt) {
  const saved = [];
  if (typeof prompt !== 'string') return saved;
  const lang = detectLang(prompt);
  d.lang = d.lang || { pt: 0, en: 0, es: 0, total: 0 };
  if (lang) { d.lang[lang] = (d.lang[lang] || 0) + 1; d.lang.total += 1; }
  for (const p of extractPreferences(prompt)) {
    if (p.explicit) {
      const text = p.text.replace(EXPLICIT, '').replace(/^[\s,:;-]+/, '').trim();
      if (text.length >= 5) { const { rule, created } = addRule(d, text[0].toUpperCase() + text.slice(1), null, 'user'); if (created) saved.push(rule.text); }
    } else {
      const r = observe(d, p.text);
      if (r && r.promoted) saved.push(r.rule.text);
    }
  }
  return saved;
}

async function hook(event) {
  const raw = await readStdin();
  let input = {};
  try { input = raw ? JSON.parse(raw) : {}; } catch { input = {}; }
  const d = load();
  if (event === 'session-start') {
    ensureCli();
    process.stdout.write(context(d) + '\n');
    return;
  }
  if (event === 'prompt') {
    if (input.transcript_path) d.session = { transcript: input.transcript_path, id: input.session_id || null, updated: now() };
    const saved = handlePrompt(d, input.prompt || input.user_prompt || '');
    save(d);
    if (saved.length) process.stdout.write(`<legion-memory-update>Saved lasting preference(s): ${saved.map(s => `"${s}"`).join('; ')}. Apply from now on; mention it briefly to the user.</legion-memory-update>\n`);
    return;
  }
  if (event === 'post-tool') {
    const ti = input.tool_input || {};
    const tool = input.tool_name || '';
    if (/^(Task|Agent)$/.test(tool)) bump(d.usage.agents, String(ti.subagent_type || ti.agent || '').replace(/^legion:/, ''));
    if (tool === 'Skill') bump(d.usage.skills, String(ti.skill || ti.command || ti.name || '').replace(/^legion:/, ''));
    save(d);
  }
}

/* ---------------- cost report ---------------- */

function readJsonl(file) {
  const out = [];
  let text = '';
  try { text = fs.readFileSync(file, 'utf8'); } catch { return out; }
  for (const line of text.split('\n')) { if (!line.trim()) continue; try { out.push(JSON.parse(line)); } catch { /* skip */ } }
  return out;
}

// Claude Code transcript: sum main-thread usage and Task/Agent sub-agent totals.
function claudeUsage(file) {
  const rows = readJsonl(file);
  const seen = new Set();
  const main = { input: 0, cacheWrite: 0, cacheRead: 0, output: 0, turns: 0 };
  const toolAgent = {};
  const agents = {};
  for (const r of rows) {
    const msg = r.message || {};
    if (r.type === 'assistant' && msg.usage) {
      const key = (msg.id || '') + '|' + (r.requestId || '');
      if (!seen.has(key)) {
        seen.add(key);
        const u = msg.usage;
        main.input += u.input_tokens || 0; main.cacheWrite += u.cache_creation_input_tokens || 0;
        main.cacheRead += u.cache_read_input_tokens || 0; main.output += u.output_tokens || 0; main.turns++;
      }
      for (const b of Array.isArray(msg.content) ? msg.content : []) {
        if (b && b.type === 'tool_use' && /^(Task|Agent)$/.test(b.name || '')) toolAgent[b.id] = String((b.input && (b.input.subagent_type || b.input.agent)) || 'general').replace(/^legion:/, '');
      }
    }
    const tr = r.toolUseResult;
    if (tr && typeof tr === 'object' && (tr.totalTokens || tr.totalDurationMs)) {
      let id = null;
      for (const b of Array.isArray(msg.content) ? msg.content : []) if (b && b.type === 'tool_result') id = b.tool_use_id;
      const name = toolAgent[id] || tr.agentType || 'subagent';
      const a = agents[name] || (agents[name] = { calls: 0, tokens: 0, ms: 0, tools: 0 });
      a.calls++; a.tokens += tr.totalTokens || 0; a.ms += tr.totalDurationMs || 0; a.tools += tr.totalToolUseCount || 0;
    }
  }
  return { tool: 'Claude Code', file, main, agents };
}

function newestFile(dir, re, depth = 4) {
  let best = null;
  const walk = (d, n) => {
    let ents = []; try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      const p = path.join(d, e.name);
      if (e.isDirectory() && n > 0) walk(p, n - 1);
      else if (e.isFile() && re.test(e.name)) { const t = fs.statSync(p).mtimeMs; if (!best || t > best.t) best = { p, t }; }
    }
  };
  walk(dir, depth);
  return best && best.p;
}

// Codex session log: last token_count event holds the session totals.
function codexUsage(file) {
  let total = null;
  for (const r of readJsonl(file)) {
    const pl = r.payload || r;
    if (pl && pl.type === 'token_count' && pl.info && pl.info.total_token_usage) total = pl.info.total_token_usage;
  }
  if (!total) return null;
  return { tool: 'Codex', file, main: { input: (total.input_tokens || 0) - (total.cached_input_tokens || 0), cacheWrite: 0, cacheRead: total.cached_input_tokens || 0, output: (total.output_tokens || 0) + (total.reasoning_output_tokens || 0), turns: null }, agents: {} };
}

const fmt = n => n >= 1e6 ? (n / 1e6).toFixed(2) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'k' : String(n);

function report(d, args) {
  let u = null;
  const forced = arg(args, '--transcript');
  const codex = args.includes('--codex');
  if (forced) u = /codex/i.test(forced) ? codexUsage(forced) : claudeUsage(forced);
  else if (!codex && d.session && d.session.transcript && fs.existsSync(d.session.transcript)) u = claudeUsage(d.session.transcript);
  if (!u) {
    const f = newestFile(path.join(process.env.CODEX_HOME || path.join(os.homedir(), '.codex'), 'sessions'), /\.jsonl$/);
    if (f) u = codexUsage(f);
  }
  if (!u) return 'No session log found yet. In Claude Code the report works after your first message with Legion installed; in Codex after a session has run.';
  if (args.includes('--json')) return JSON.stringify(u, null, 2);
  const m = u.main;
  const fresh = m.input + m.cacheWrite + m.output;
  const agentTotal = Object.values(u.agents).reduce((s, a) => s + a.tokens, 0);
  const lines = [`Legion cost report — ${u.tool} session`, ''];
  lines.push(`Main conversation: ${fmt(fresh)} new tokens (input ${fmt(m.input + m.cacheWrite)}, output ${fmt(m.output)})` + (m.turns != null ? ` over ${m.turns} model calls` : ''));
  lines.push(`Re-read from cache: ${fmt(m.cacheRead)} tokens (billed at a fraction of normal input)`);
  const names = Object.keys(u.agents).sort((a, b) => u.agents[b].tokens - u.agents[a].tokens);
  if (names.length) {
    lines.push('', `Agents: ${fmt(agentTotal)} tokens in ${names.reduce((s, n) => s + u.agents[n].calls, 0)} runs`);
    for (const n of names) { const a = u.agents[n]; lines.push(`  ${n.padEnd(26)} ${String(a.calls).padStart(2)}×  ${fmt(a.tokens).padStart(7)} tokens  ${(a.ms / 1000).toFixed(0).padStart(4)}s  ${a.tools} tool calls`); }
  } else lines.push('', 'Agents: none used in this session.');
  lines.push('', `Total processed: ${fmt(fresh + m.cacheRead + agentTotal)} tokens`);
  return lines.join('\n');
}

/* ---------------- CLI ---------------- */

function arg(args, flag) { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; }
function positional(args) { const out = []; for (let i = 0; i < args.length; i++) { if (args[i].startsWith('--')) { i++; continue; } out.push(args[i]); } return out.join(' '); }

const HELP = `Legion memory
Usage: node memory.js <command>
  context                       print profile for injection into a session
  show                          list rules, observations and usage
  add "<rule>" [--category c]   add/reinforce a rule (language|style|stack|workflow|tools|general)
  observe "<text>"              record a candidate preference
  learn                         promote repeated observations
  forget <id|text>              remove a rule or observation
  report [--json] [--codex]     token/cost report for the current session (main thread + each agent)
  export                        print everything as JSON
  reset --yes                   wipe memory
  hook <session-start|prompt|post-tool>   (used by Claude Code hooks; reads JSON on stdin)
Data: ${DIR}`;

async function main(argv) {
  const [cmd, ...args] = argv;
  const d = load();
  switch (cmd) {
    case 'context': console.log(context(d)); break;
    case 'show': console.log(show(d)); break;
    case 'add': {
      const text = positional(args);
      const { rule, created } = addRule(d, text, arg(args, '--category'), 'user');
      save(d); console.log(`${created ? 'Saved' : 'Reinforced'} [${rule.id}] ${rule.text}`); break;
    }
    case 'observe': {
      const r = observe(d, positional(args)); save(d);
      console.log(!r ? 'Ignored (sensitive).' : r.promoted ? `Promoted to rule: ${r.rule.text}` : r.rule ? `Reinforced rule: ${r.rule.text}` : `Observed (×${r.observation.count}).`); break;
    }
    case 'learn': { const p = learn(d); save(d); console.log(p.length ? `Promoted ${p.length}:\n- ${p.join('\n- ')}` : 'Nothing to promote.'); break; }
    case 'forget': { const n = forget(d, positional(args)); save(d); console.log(n ? `Removed ${n} item(s).` : 'Nothing matched.'); break; }
    case 'report': console.log(report(d, args)); break;
    case 'export': console.log(JSON.stringify(d, null, 2)); break;
    case 'reset':
      if (!args.includes('--yes')) { console.error('Add --yes to confirm wiping Legion memory.'); process.exitCode = 1; break; }
      save(empty()); console.log('Legion memory wiped.'); break;
    case 'hook':
      try { await hook(args[0]); } catch { /* hooks must never block the session */ }
      break;
    default: console.log(HELP);
  }
}

if (require.main === module) {
  main(process.argv.slice(2)).catch(e => { console.error(e.message); process.exitCode = 1; });
}
module.exports = { claudeUsage, codexUsage, report, ensureCli, extractPreferences, detectLang, isSensitive, categorize, addRule, observe, forget, learn, handlePrompt, renderProfile, empty, context };
