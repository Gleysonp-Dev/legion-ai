#!/usr/bin/env node
/**
 * Legion installer — Windows, macOS and Linux. Zero dependencies (Node 18+).
 *
 *   node install.js                 install for every AI tool detected (Claude Code, Codex, Gemini CLI, Cursor)
 *   node install.js --claude --codex --gemini --cursor   choose targets (any combination)
 *   node install.js --uninstall     remove Legion (memory is kept; add --purge to delete it)
 *   node install.js --dry-run       show what would happen
 *
 * Claude Code: plugin via the `claude` CLI (marketplace "legion-ai"), or files in ~/.claude with --files.
 * Codex:       agents -> ~/.codex/agents, instructions -> ~/.codex/AGENTS.md
 * Gemini CLI:  agents -> ~/.gemini/agents, instructions -> ~/.gemini/GEMINI.md
 * Cursor:      agents -> ~/.cursor/agents, memory/activity hooks -> ~/.cursor/hooks.json
 * Skills for Codex, Gemini CLI and Cursor are shared in ~/.agents/skills.
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO = __dirname;
const args = process.argv.slice(2);
const has = f => args.includes(f);
const opt = (f, d) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? args[i + 1] : d; };

const HOME = path.resolve(opt('--home', os.homedir()));
const LEGION_HOME = process.env.LEGION_HOME && !has('--home') ? process.env.LEGION_HOME : path.join(HOME, '.legion');
const DIRS = {
  claude: path.join(HOME, '.claude'),
  codex: process.env.CODEX_HOME && !has('--home') ? process.env.CODEX_HOME : path.join(HOME, '.codex'),
  gemini: path.join(HOME, '.gemini'),
  cursor: path.join(HOME, '.cursor')
};
const SHARED_SKILLS = path.join(HOME, '.agents', 'skills');
const MANIFEST = path.join(LEGION_HOME, 'install-manifest.json');
const MARKER = '.legion-managed';
const DRY = has('--dry-run');
const IS_WIN = process.platform === 'win32';
const MARKETPLACE = 'legion-ai';
const PLUGIN = 'legion';
const BEGIN = '<!-- LEGION:BEGIN (managed by legion-ai installer — do not edit inside) -->';
const END = '<!-- LEGION:END -->';
const CLI_FILES = ['memory.js', 'council.js', 'mission-control.js', 'legion.js'];
const TARGETS = ['claude', 'codex', 'gemini', 'cursor'];
const LABEL = { claude: 'Claude Code', codex: 'Codex', gemini: 'Gemini CLI', cursor: 'Cursor' };

const c = { g: s => `\x1b[32m${s}\x1b[0m`, y: s => `\x1b[33m${s}\x1b[0m`, r: s => `\x1b[31m${s}\x1b[0m`, b: s => `\x1b[1m${s}\x1b[0m`, d: s => `\x1b[2m${s}\x1b[0m` };
const log = (...m) => console.log(...m);
const step = m => log(c.b('› ') + m);
const ok = m => log('  ' + c.g('✔ ') + m);
const warn = m => log('  ' + c.y('! ') + m);

/* ---------- helpers ---------- */

function readJSON(p, d) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return d; } }
function writeFile(p, data) { WRITTEN.add(p); if (DRY) return; fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, data); }
function copyDir(src, dst) { WRITTEN.add(dst); if (DRY) return; fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.cpSync(src, dst, { recursive: true }); }
function rm(p) { if (DRY) return; fs.rmSync(p, { recursive: true, force: true }); }
function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }
const WRITTEN = new Set();
const memCmd = () => path.join(LEGION_HOME, 'bin', 'memory.js').replace(/\\/g, '/');
const isLegionHook = g => { const j = JSON.stringify(g); return j.includes('.legion') && j.includes('memory.js'); };

function which(cmd) {
  const r = spawnSync(IS_WIN ? 'where' : 'which', [cmd], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.split(/\r?\n/)[0].trim() : null;
}
function run(cmd, cargs) {
  if (DRY) { log(c.d(`    $ ${cmd} ${cargs.join(' ')}`)); return { status: 0, stdout: '', stderr: '' }; }
  const quoted = IS_WIN ? cargs.map(a => (/[\s"]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a)) : cargs;
  return spawnSync(cmd, quoted, { encoding: 'utf8', shell: IS_WIN, timeout: 180000 });
}

function manifest() { return Object.assign({ version: 2, claude: {}, codex: {}, gemini: {}, cursor: {}, shared: {} }, readJSON(MANIFEST, {})); }
function saveManifest(m) { m.version = 2; writeFile(MANIFEST, JSON.stringify(m, null, 2)); }

function marketplaceSource() {
  const forced = opt('--source', null);
  if (forced) return forced;
  const r = spawnSync('git', ['-C', REPO, 'remote', 'get-url', 'origin'], { encoding: 'utf8' });
  if (r.status === 0) {
    const mm = r.stdout.trim().match(/github\.com[:/]([^/]+)\/([^/.\s]+?)(\.git)?$/);
    if (mm) return `${mm[1]}/${mm[2]}`;
  }
  return REPO;
}

function checkBuild() {
  const need = ['agents', 'skills', 'codex/agents', 'gemini/agents', 'cursor/agents'].map(d => path.join(REPO, d));
  if (need.every(exists)) return;
  step('Building agents and skills from src/');
  if (!DRY) require('./scripts/build.js').build();
}

function counts() {
  const agents = fs.readdirSync(path.join(REPO, 'agents')).filter(f => f.endsWith('.md')).length;
  const skillDirs = fs.readdirSync(path.join(REPO, 'skills')).filter(f => exists(path.join(REPO, 'skills', f, 'SKILL.md')));
  const procedures = skillDirs.reduce((n, d) => { const p = path.join(REPO, 'skills', d, 'procedures'); return n + (exists(p) ? fs.readdirSync(p).length : 0); }, 0);
  return { agents, skills: skillDirs.length, procedures };
}

// Remove files from a previous Legion version that this run no longer writes.
function removeStale(prev) {
  let n = 0;
  for (const f of prev || []) {
    if (WRITTEN.has(f) || !exists(f)) continue;
    if (fs.statSync(f).isDirectory() && !exists(path.join(f, MARKER))) continue;
    rm(f); n++;
  }
  if (n) ok(`removed ${n} item(s) from the previous Legion version`);
}

function copyAgents(srcDir, dstDir, prev, rename = f => f) {
  const files = [];
  for (const f of fs.readdirSync(srcDir)) {
    const dst = path.join(dstDir, rename(f));
    if (exists(dst) && !(prev || []).includes(dst)) { warn(`skipped agent ${f} (you already have one with that name)`); continue; }
    writeFile(dst, fs.readFileSync(path.join(srcDir, f))); files.push(dst);
  }
  return files;
}

function copySkills(dstRoot, prev) {
  const files = [];
  for (const s of fs.readdirSync(path.join(REPO, 'skills'))) {
    const dst = path.join(dstRoot, s);
    if (exists(dst) && !exists(path.join(dst, MARKER)) && !(prev || []).includes(dst)) { warn(`skipped skill ${s} (you already have one with that name)`); continue; }
    rm(dst); copyDir(path.join(REPO, 'skills', s), dst); writeFile(path.join(dst, MARKER), 'legion\n'); files.push(dst);
  }
  return files;
}

function stripBlock(txt) {
  const i = txt.indexOf(BEGIN); const j = txt.indexOf(END);
  if (i < 0 || j < 0) return txt;
  return (txt.slice(0, i).trimEnd() + '\n' + txt.slice(j + END.length).trimStart()).trim() + (txt.trim() ? '\n' : '');
}
function writeBlock(file, block) {
  let txt = exists(file) ? fs.readFileSync(file, 'utf8') : '';
  txt = stripBlock(txt);
  writeFile(file, (txt.trimEnd() ? txt.trimEnd() + '\n\n' : '') + block + '\n');
}
function removeBlock(file) {
  if (!exists(file)) return false;
  const rest = stripBlock(fs.readFileSync(file, 'utf8'));
  if (rest.trim()) writeFile(file, rest); else rm(file);
  return true;
}

/* ---------- shared runtime (~/.legion) ---------- */

function installRuntime(m) {
  step(`Legion runtime → ${LEGION_HOME}`);
  for (const f of CLI_FILES) writeFile(path.join(LEGION_HOME, 'bin', f), fs.readFileSync(path.join(REPO, 'scripts', f)));
  writeFile(path.join(LEGION_HOME, 'repo-path.txt'), REPO + '\n');
  writeFile(path.join(LEGION_HOME, 'version.json'), JSON.stringify({ version: readJSON(path.join(REPO, 'package.json'), {}).version || null }) + '\n');
  if (!DRY) fs.mkdirSync(path.join(LEGION_HOME, 'memory'), { recursive: true });
  m.runtime = { home: LEGION_HOME, installedAt: new Date().toISOString() };
  ok(`memory, council and Mission Control installed — dashboard: ${IS_WIN ? 'node $HOME\\.legion\\bin\\legion.js' : 'node ~/.legion/bin/legion.js'} dashboard`);
}

function installSharedSkills(m) {
  const files = copySkills(SHARED_SKILLS, m.shared.files);
  m.shared = { files };
  ok(`${files.length} skills → ${SHARED_SKILLS} (shared by Codex, Gemini CLI and Cursor)`);
}

/* ---------- instructions block (Codex AGENTS.md / Gemini GEMINI.md) ---------- */

function instructionsBlock(tool) {
  const bin = path.join(LEGION_HOME, 'bin');
  const mem = `node "${path.join(bin, 'memory.js')}"`;
  const council = `node "${path.join(bin, 'council.js')}"`;
  const skill = tool === 'codex' ? '`$legion`' : 'the `legion` skill';
  const agents = tool === 'codex' ? '`~/.codex/agents/legion-*.toml` (names use underscores, e.g. `backend_engineer`)' : '`~/.gemini/agents/*.md` (call them with `@name`, e.g. `@backend-engineer`)';
  return `${BEGIN}
## Legion (multi-agent workforce)
You have Legion installed: 80 specialist agents in ${agents} and 30 skill packs with 300 procedures plus playbooks in \`~/.agents/skills/legion-*\`. Open a pack, then read only the procedure you need from its \`procedures/\` folder.

- **Memory first.** At the start of every session run \`${mem} context\` and silently apply the user's preferences, team record and lessons. The current request always wins.
- **Learn.** When the user states a lasting preference ("always…", "never…", "a partir de agora…", "remember…"), run \`${mem} add "<short rule>"\`. When the user approves or corrects the work, run \`${mem} feedback up|down --target <agent-or-pack>\`; after a correction save a lesson with \`${mem} lesson <agent-or-procedure> "<what to do differently>"\`. Never store secrets, passwords, financial account numbers or health data.
- **Orchestrate big work** with ${skill}: plan, run the right Legion agents in parallel, integrate and verify. Whole projects: the \`legion-playbooks\` skill.
- **Small work stays small.** Cheapest mode first: solo → lite (≤3 agents) → full.
- **No proof, not done.** Finish with evidence for each requirement. For important changes ask the council of other AIs: \`${council} review --host ${tool}\`.
- **Cost:** \`${mem} report${tool === 'codex' ? ' --codex' : ''}\`. Live dashboard: \`node "${path.join(bin, 'legion.js')}" dashboard\`.
${END}`;
}

/* ---------- Claude Code ---------- */

function installClaude(m) {
  step('Claude Code');
  const cli = which('claude');
  if (cli && !has('--files')) {
    const src = marketplaceSource();
    let r = run('claude', ['plugin', 'marketplace', 'add', src]);
    const out = (r.stdout || '') + (r.stderr || '');
    if (r.status !== 0 && !/already/i.test(out)) {
      warn(`could not add marketplace via CLI (${out.trim().split('\n').pop() || 'unknown error'}) — falling back to file install`);
      return installClaudeFiles(m);
    }
    run('claude', ['plugin', 'marketplace', 'update', MARKETPLACE]);
    r = run('claude', ['plugin', 'install', `${PLUGIN}@${MARKETPLACE}`]);
    const out2 = (r.stdout || '') + (r.stderr || '');
    if (/already/i.test(out2)) run('claude', ['plugin', 'update', `${PLUGIN}@${MARKETPLACE}`]);
    if (r.status !== 0 && !/already/i.test(out2)) {
      warn(`plugin install failed (${out2.trim().split('\n').pop() || 'unknown error'}) — falling back to file install`);
      return installClaudeFiles(m);
    }
    removeStale(m.claude.files);
    cleanClaudeSettings();
    m.claude = { mode: 'plugin', source: src };
    ok(`plugin ${PLUGIN}@${MARKETPLACE} installed from ${src}`);
    ok('restart Claude Code (or run /reload-plugins), then try: /legion:legion  — or just say "use legion to …"');
    return;
  }
  installClaudeFiles(m);
}

function cleanClaudeSettings() {
  const settingsPath = path.join(DIRS.claude, 'settings.json');
  const settings = readJSON(settingsPath, null);
  if (!settings || !settings.hooks) return;
  let changed = false;
  for (const ev of Object.keys(settings.hooks)) {
    const before = settings.hooks[ev].length;
    settings.hooks[ev] = settings.hooks[ev].filter(g => !isLegionHook(g));
    if (settings.hooks[ev].length !== before) changed = true;
    if (!settings.hooks[ev].length) delete settings.hooks[ev];
  }
  if (changed) writeFile(settingsPath, JSON.stringify(settings, null, 2) + '\n');
}

function installClaudeFiles(m) {
  const prev = m.claude.files || [];
  const files = [
    ...copyAgents(path.join(REPO, 'agents'), path.join(DIRS.claude, 'agents'), prev),
    ...copySkills(path.join(DIRS.claude, 'skills'), prev)
  ];
  const settingsPath = path.join(DIRS.claude, 'settings.json');
  const settings = readJSON(settingsPath, {});
  settings.hooks = settings.hooks || {};
  const cmd = ev => `node "${memCmd()}" hook ${ev}`;
  const want = { SessionStart: [null, 'session-start'], UserPromptSubmit: [null, 'prompt'], PreToolUse: ['Task|Agent', 'pre-tool'], PostToolUse: ['Task|Agent|Skill', 'post-tool'], Stop: [null, 'stop'] };
  for (const [event, [matcher, ev]] of Object.entries(want)) {
    const list = (settings.hooks[event] = (settings.hooks[event] || []).filter(g => !isLegionHook(g)));
    const group = { hooks: [{ type: 'command', command: cmd(ev), timeout: 10 }] };
    if (matcher) group.matcher = matcher;
    list.push(group);
  }
  writeFile(settingsPath, JSON.stringify(settings, null, 2) + '\n');
  removeStale(prev);
  m.claude = { mode: 'files', files };
  ok(`${files.length} agents/skills copied into ${DIRS.claude}`);
  ok('memory and activity hooks added to ~/.claude/settings.json');
  ok('restart Claude Code, then try: /legion');
}

function uninstallClaude(m) {
  step('Claude Code');
  const mode = m.claude && m.claude.mode;
  if (mode === 'plugin' || (!mode && which('claude'))) {
    if (which('claude')) {
      run('claude', ['plugin', 'uninstall', `${PLUGIN}@${MARKETPLACE}`]);
      run('claude', ['plugin', 'marketplace', 'remove', MARKETPLACE]);
      ok('plugin and marketplace removed');
    } else warn('claude CLI not found; remove the plugin with /plugin inside Claude Code');
  }
  if (m.claude && m.claude.files) { for (const f of m.claude.files) rm(f); ok(`${m.claude.files.length} copied files removed`); }
  cleanClaudeSettings();
  m.claude = {};
}

/* ---------- Codex ---------- */

function installCodex(m) {
  step('Codex');
  const prev = m.codex.files || [];
  const files = copyAgents(path.join(REPO, 'codex', 'agents'), path.join(DIRS.codex, 'agents'), prev);
  ok(`${files.length} agents → ${path.join(DIRS.codex, 'agents')}`);
  writeBlock(path.join(DIRS.codex, 'AGENTS.md'), instructionsBlock('codex'));
  ok('Legion instructions added to ~/.codex/AGENTS.md');
  removeStale(prev);
  m.codex = { files };
  ok('start a new Codex session, then try: $legion');
}

function uninstallCodex(m) {
  step('Codex');
  const files = m.codex.files || [];
  for (const f of files) rm(f);
  ok(`${files.length} agents removed`);
  if (removeBlock(path.join(DIRS.codex, 'AGENTS.md'))) ok('Legion block removed from AGENTS.md');
  m.codex = {};
}

/* ---------- Gemini CLI ---------- */

function installGemini(m) {
  step('Gemini CLI');
  const prev = m.gemini.files || [];
  const files = copyAgents(path.join(REPO, 'gemini', 'agents'), path.join(DIRS.gemini, 'agents'), prev);
  ok(`${files.length} subagents → ${path.join(DIRS.gemini, 'agents')} (list them with /agents)`);
  writeBlock(path.join(DIRS.gemini, 'GEMINI.md'), instructionsBlock('gemini'));
  ok('Legion instructions added to ~/.gemini/GEMINI.md');
  removeStale(prev);
  m.gemini = { files };
  ok('start a new Gemini CLI session, then ask: "use the legion skill to …"');
}

function uninstallGemini(m) {
  step('Gemini CLI');
  const files = m.gemini.files || [];
  for (const f of files) rm(f);
  ok(`${files.length} subagents removed`);
  if (removeBlock(path.join(DIRS.gemini, 'GEMINI.md'))) ok('Legion block removed from GEMINI.md');
  m.gemini = {};
}

/* ---------- Cursor ---------- */

function cursorHooks(remove) {
  const file = path.join(DIRS.cursor, 'hooks.json');
  const cfg = readJSON(file, null) || { version: 1, hooks: {} };
  cfg.version = cfg.version || 1;
  cfg.hooks = cfg.hooks || {};
  for (const ev of Object.keys(cfg.hooks)) {
    cfg.hooks[ev] = (cfg.hooks[ev] || []).filter(h => !isLegionHook(h));
    if (!cfg.hooks[ev].length) delete cfg.hooks[ev];
  }
  if (!remove) {
    const want = { sessionStart: 'session-start', beforeSubmitPrompt: 'prompt', subagentStart: 'subagent-start', subagentStop: 'subagent-stop', stop: 'stop' };
    for (const [ev, h] of Object.entries(want)) (cfg.hooks[ev] = cfg.hooks[ev] || []).push({ command: `node "${memCmd()}" hook ${h} --tool cursor`, timeout: 10 });
  }
  if (remove && !Object.keys(cfg.hooks).length && exists(file)) { rm(file); return; }
  if (remove && !exists(file)) return;
  writeFile(file, JSON.stringify(cfg, null, 2) + '\n');
}

function installCursor(m) {
  step('Cursor');
  const prev = m.cursor.files || [];
  const files = copyAgents(path.join(REPO, 'cursor', 'agents'), path.join(DIRS.cursor, 'agents'), prev);
  ok(`${files.length} subagents → ${path.join(DIRS.cursor, 'agents')}`);
  cursorHooks(false);
  ok('memory and activity hooks added to ~/.cursor/hooks.json');
  removeStale(prev);
  m.cursor = { files };
  ok('restart Cursor, then ask the agent: "use the legion skill to …"');
}

function uninstallCursor(m) {
  step('Cursor');
  const files = m.cursor.files || [];
  for (const f of files) rm(f);
  ok(`${files.length} subagents removed`);
  cursorHooks(true);
  ok('Legion hooks removed from ~/.cursor/hooks.json');
  m.cursor = {};
}

/* ---------- main ---------- */

function detected(t) {
  if (t === 'claude') return !!which('claude') || exists(DIRS.claude);
  if (t === 'codex') return !!which('codex') || exists(DIRS.codex);
  if (t === 'gemini') return !!which('gemini') || exists(DIRS.gemini);
  if (t === 'cursor') return !!which('cursor') || !!which('cursor-agent') || exists(DIRS.cursor);
  return false;
}

function main() {
  const major = parseInt(process.versions.node.split('.')[0], 10);
  if (major < 18) { console.error(c.r(`Legion needs Node.js 18 or newer (found ${process.versions.node}). Install it from https://nodejs.org`)); process.exit(1); }
  if (has('--help') || has('-h')) { log(fs.readFileSync(__filename, 'utf8').split('\n').slice(2, 16).map(l => l.replace(/^ \* ?/, '')).join('\n')); return; }

  const chosen = TARGETS.filter(t => has('--' + t));
  const m = manifest();
  log(c.b('\n⚔  Legion') + c.d(`  ${IS_WIN ? 'Windows' : process.platform === 'darwin' ? 'macOS' : 'Linux'} · Node ${process.versions.node}${DRY ? ' · dry run' : ''}\n`));

  if (has('--uninstall')) {
    const which_ = chosen.length ? chosen : TARGETS;
    const un = { claude: uninstallClaude, codex: uninstallCodex, gemini: uninstallGemini, cursor: uninstallCursor };
    for (const t of which_) un[t](m);
    const stillShared = ['codex', 'gemini', 'cursor'].some(t => m[t] && m[t].files && m[t].files.length);
    if (!stillShared && m.shared.files) { for (const f of m.shared.files) rm(f); ok(`${m.shared.files.length} shared skills removed`); m.shared = {}; }
    if (has('--purge') && !chosen.length) { rm(LEGION_HOME); ok(`removed ${LEGION_HOME} (including memory)`); }
    else { saveManifest(m); log(c.d(`\nMemory kept in ${path.join(LEGION_HOME, 'memory')} (use --purge to delete it).`)); }
    log(c.g('\nLegion uninstalled.\n'));
    return;
  }

  checkBuild();
  const n = counts();
  const targets = chosen.length ? chosen : TARGETS.filter(detected);
  if (!targets.length) {
    warn('No supported AI tool found (Claude Code, Codex, Gemini CLI, Cursor). Install one, or force a target with --claude / --codex / --gemini / --cursor.');
    process.exitCode = 1; return;
  }
  installRuntime(m);
  if (targets.some(t => t !== 'claude')) { step('Shared skills'); installSharedSkills(m); }
  const inst = { claude: installClaude, codex: installCodex, gemini: installGemini, cursor: installCursor };
  for (const t of targets) inst[t](m);
  // Upgrading from v1: skills that used to be tracked under Codex now live in the shared list.
  if (m.codex && m.codex.files) m.codex.files = m.codex.files.filter(f => !f.startsWith(SHARED_SKILLS));
  saveManifest(m);
  log(c.g(`\nDone. ${n.agents} agents and ${n.procedures} procedures in ${n.skills} skills ready for ${targets.map(t => LABEL[t]).join(', ')}.`));
  log(c.d('Memory and lessons live only on this computer: ' + LEGION_HOME));
  const lj = IS_WIN ? 'node $HOME\\.legion\\bin\\legion.js' : 'node ~/.legion/bin/legion.js';
  log(c.d(`Live dashboard: ${lj} dashboard   ·   Cross-AI review: ${lj} council review   (or, inside this folder: npm run dashboard)`));
  log(c.d('Update: git pull && node install.js   ·   Remove: node install.js --uninstall\n'));
}

main();
