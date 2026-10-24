#!/usr/bin/env node
/**
 * Legion installer — Windows, macOS and Linux. Zero dependencies (Node 18+).
 *
 *   node install.js                 install for every tool detected (Claude Code and/or Codex)
 *   node install.js --claude        Claude Code only
 *   node install.js --codex         Codex only
 *   node install.js --uninstall     remove Legion (memory is kept; add --purge to delete it)
 *   node install.js --dry-run       show what would happen
 *
 * Claude Code: installed as a plugin through the `claude` CLI (marketplace "legion-ai", plugin "legion").
 *   If the CLI is not on PATH (or with --files), agents/skills/hooks are copied into ~/.claude instead.
 * Codex: skills -> ~/.agents/skills, agents -> ~/.codex/agents, instructions block -> ~/.codex/AGENTS.md.
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
const CLAUDE_DIR = path.join(HOME, '.claude');
const CODEX_DIR = process.env.CODEX_HOME && !has('--home') ? process.env.CODEX_HOME : path.join(HOME, '.codex');
const AGENTS_SKILLS = path.join(HOME, '.agents', 'skills');
const MANIFEST = path.join(LEGION_HOME, 'install-manifest.json');
const MARKER = '.legion-managed';
const DRY = has('--dry-run');
const IS_WIN = process.platform === 'win32';
const MARKETPLACE = 'legion-ai';
const PLUGIN = 'legion';
const BEGIN = '<!-- LEGION:BEGIN (managed by legion-ai installer — do not edit inside) -->';
const END = '<!-- LEGION:END -->';

const c = { g: s => `\x1b[32m${s}\x1b[0m`, y: s => `\x1b[33m${s}\x1b[0m`, r: s => `\x1b[31m${s}\x1b[0m`, b: s => `\x1b[1m${s}\x1b[0m`, d: s => `\x1b[2m${s}\x1b[0m` };
const log = (...m) => console.log(...m);
const step = m => log(c.b('› ') + m);
const ok = m => log('  ' + c.g('✔ ') + m);
const warn = m => log('  ' + c.y('! ') + m);

/* ---------- helpers ---------- */

function readJSON(p, d) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return d; } }
function writeFile(p, data) { if (DRY) return; fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, data); }
function copyDir(src, dst) { if (DRY) return; fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.cpSync(src, dst, { recursive: true }); }
function rm(p) { if (DRY) return; fs.rmSync(p, { recursive: true, force: true }); }
function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

function which(cmd) {
  const r = spawnSync(IS_WIN ? 'where' : 'which', [cmd], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.split(/\r?\n/)[0].trim() : null;
}
function run(cmd, cargs) {
  if (DRY) { log(c.d(`    $ ${cmd} ${cargs.join(' ')}`)); return { status: 0, stdout: '', stderr: '' }; }
  const quoted = IS_WIN ? cargs.map(a => (/[\s"]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a)) : cargs;
  return spawnSync(cmd, quoted, { encoding: 'utf8', shell: IS_WIN, timeout: 180000 });
}

function manifest() { return readJSON(MANIFEST, { version: 1, claude: {}, codex: {} }); }
function saveManifest(m) { writeFile(MANIFEST, JSON.stringify(m, null, 2)); }

function marketplaceSource() {
  const forced = opt('--source', null);
  if (forced) return forced;
  // Prefer the GitHub repo this clone came from, so updates come from GitHub.
  const r = spawnSync('git', ['-C', REPO, 'remote', 'get-url', 'origin'], { encoding: 'utf8' });
  if (r.status === 0) {
    const m = r.stdout.trim().match(/github\.com[:/]([^/]+)\/([^/.\s]+?)(\.git)?$/);
    if (m) return `${m[1]}/${m[2]}`;
  }
  return REPO;
}

function checkBuild() {
  const need = [path.join(REPO, 'agents'), path.join(REPO, 'skills'), path.join(REPO, 'codex', 'agents')];
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

/* ---------- shared runtime (~/.legion) ---------- */

function installRuntime(m) {
  step(`Legion runtime → ${LEGION_HOME}`);
  writeFile(path.join(LEGION_HOME, 'bin', 'memory.js'), fs.readFileSync(path.join(REPO, 'scripts', 'memory.js')));
  writeFile(path.join(LEGION_HOME, 'repo-path.txt'), REPO + '\n');
  if (!DRY) fs.mkdirSync(path.join(LEGION_HOME, 'memory'), { recursive: true });
  m.runtime = { home: LEGION_HOME, installedAt: new Date().toISOString() };
  ok('memory CLI installed (node ~/.legion/bin/memory.js show)');
}

/* ---------- Claude Code ---------- */

function claudeDetected() { return !!which('claude') || exists(CLAUDE_DIR); }

function installClaude(m) {
  step('Claude Code');
  const cli = which('claude');
  if (cli && !has('--files')) {
    const src = marketplaceSource();
    // refresh if already added; ignore "already exists"
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
    m.claude = { mode: 'plugin', source: src };
    ok(`plugin ${PLUGIN}@${MARKETPLACE} installed from ${src}`);
    ok('restart Claude Code (or run /reload-plugins), then try: /legion:legion  — or just say "use legion to …"');
    return;
  }
  installClaudeFiles(m);
}

function installClaudeFiles(m) {
  const prev = (m.claude && m.claude.files) || [];
  const files = [];
  const agentsDir = path.join(CLAUDE_DIR, 'agents');
  const skillsDir = path.join(CLAUDE_DIR, 'skills');
  for (const f of fs.readdirSync(path.join(REPO, 'agents'))) {
    const dst = path.join(agentsDir, f);
    if (exists(dst) && !prev.includes(dst)) { warn(`skipped agent ${f} (you already have one with that name)`); continue; }
    writeFile(dst, fs.readFileSync(path.join(REPO, 'agents', f))); files.push(dst);
  }
  for (const s of fs.readdirSync(path.join(REPO, 'skills'))) {
    const dst = path.join(skillsDir, s);
    if (exists(dst) && !exists(path.join(dst, MARKER))) { warn(`skipped skill ${s} (you already have one with that name)`); continue; }
    rm(dst); copyDir(path.join(REPO, 'skills', s), dst); writeFile(path.join(dst, MARKER), 'legion\n'); files.push(dst);
  }
  // hooks in ~/.claude/settings.json
  const settingsPath = path.join(CLAUDE_DIR, 'settings.json');
  const settings = readJSON(settingsPath, {});
  settings.hooks = settings.hooks || {};
  const mem = path.join(LEGION_HOME, 'bin', 'memory.js').replace(/\\/g, '/');
  const cmd = ev => `node "${mem}" hook ${ev}`;
  const want = { SessionStart: [null, 'session-start'], UserPromptSubmit: [null, 'prompt'], PostToolUse: ['Task|Agent|Skill', 'post-tool'] };
  for (const [event, [matcher, ev]] of Object.entries(want)) {
    const list = (settings.hooks[event] = (settings.hooks[event] || []).filter(g => !JSON.stringify(g).includes('legion') || !JSON.stringify(g).includes('memory.js')));
    const group = { hooks: [{ type: 'command', command: cmd(ev), timeout: 10 }] };
    if (matcher) group.matcher = matcher;
    list.push(group);
  }
  writeFile(settingsPath, JSON.stringify(settings, null, 2) + '\n');
  removeStale(prev, files);
  m.claude = { mode: 'files', files };
  ok(`${files.length} agents/skills copied into ${CLAUDE_DIR}`);
  ok('memory hooks added to ~/.claude/settings.json');
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
  const settingsPath = path.join(CLAUDE_DIR, 'settings.json');
  const settings = readJSON(settingsPath, null);
  if (settings && settings.hooks) {
    for (const ev of Object.keys(settings.hooks)) {
      settings.hooks[ev] = settings.hooks[ev].filter(g => !(JSON.stringify(g).includes('.legion') && JSON.stringify(g).includes('memory.js')));
      if (!settings.hooks[ev].length) delete settings.hooks[ev];
    }
    writeFile(settingsPath, JSON.stringify(settings, null, 2) + '\n');
  }
  m.claude = {};
}

/* ---------- Codex ---------- */

function codexDetected() { return !!which('codex') || exists(CODEX_DIR); }

function codexBlock() {
  const mem = path.join(LEGION_HOME, 'bin', 'memory.js');
  return `${BEGIN}
## Legion (multi-agent workforce)
You have Legion installed: 80 specialist custom agents (\`~/.codex/agents/legion-*.toml\`) and 30 skill packs with 300 procedures (\`~/.agents/skills/legion-*\`). Open a pack, then read only the procedure you need from its \`procedures/\` folder.

- **Memory first.** At the start of every session run \`node "${mem}" context\` and silently apply the user's recorded preferences (language, tone, stack, workflow). The current request always wins.
- **Learn.** When the user states a lasting preference ("always…", "never…", "I prefer…", "a partir de agora…", "remember…"), run \`node "${mem}" add "<short rule>"\` and confirm in one line. Never store secrets, passwords, financial account numbers or health data.
- **Orchestrate big work.** For large or multi-part tasks use the \`$legion\` skill: plan subtasks, spawn the right Legion agents in parallel (e.g. \`backend_engineer\`, \`ui_engineer\`, \`qa_gatekeeper\`), wait for them, integrate and verify.
- **Small work stays small.** Pick the cheapest mode: solo (no agents) → lite (≤3 agents) → full.
- **No proof, not done.** Finish with evidence for each requirement (command → result, file:line, source). Report cost with \`node "${mem}" report --codex\`.
- Help: \`$legion-help\`. Memory: \`$legion-memory\`.
${END}`;
}

function installCodex(m) {
  step('Codex');
  const prev = (m.codex && m.codex.files) || [];
  const files = [];
  // skills
  for (const s of fs.readdirSync(path.join(REPO, 'skills'))) {
    const dst = path.join(AGENTS_SKILLS, s);
    if (exists(dst) && !exists(path.join(dst, MARKER))) { warn(`skipped skill ${s} (you already have one with that name)`); continue; }
    rm(dst); copyDir(path.join(REPO, 'skills', s), dst); writeFile(path.join(dst, MARKER), 'legion\n'); files.push(dst);
  }
  ok(`${files.length} skills → ${AGENTS_SKILLS}`);
  // agents
  let na = 0;
  for (const f of fs.readdirSync(path.join(REPO, 'codex', 'agents'))) {
    const dst = path.join(CODEX_DIR, 'agents', f);
    if (exists(dst) && !prev.includes(dst)) { warn(`skipped agent ${f} (already exists)`); continue; }
    writeFile(dst, fs.readFileSync(path.join(REPO, 'codex', 'agents', f))); files.push(dst); na++;
  }
  ok(`${na} agents → ${path.join(CODEX_DIR, 'agents')}`);
  // AGENTS.md block
  const agentsMd = path.join(CODEX_DIR, 'AGENTS.md');
  let txt = exists(agentsMd) ? fs.readFileSync(agentsMd, 'utf8') : '';
  txt = stripBlock(txt);
  txt = (txt.trimEnd() ? txt.trimEnd() + '\n\n' : '') + codexBlock() + '\n';
  writeFile(agentsMd, txt);
  ok('Legion instructions added to ~/.codex/AGENTS.md');
  removeStale(prev, files);
  m.codex = { files };
  ok('start a new Codex session, then try: $legion');
}

// Remove files from a previous Legion version that the new version no longer ships.
function removeStale(prev, current) {
  const keep = new Set(current);
  let n = 0;
  for (const f of prev) {
    if (keep.has(f) || !exists(f)) continue;
    if (fs.statSync(f).isDirectory() && !exists(path.join(f, MARKER))) continue;
    rm(f); n++;
  }
  if (n) ok(`removed ${n} item(s) from the previous Legion version`);
}

function stripBlock(txt) {
  const i = txt.indexOf(BEGIN); const j = txt.indexOf(END);
  if (i < 0 || j < 0) return txt;
  return (txt.slice(0, i).trimEnd() + '\n' + txt.slice(j + END.length).trimStart()).trim() + (txt.trim() ? '\n' : '');
}

function uninstallCodex(m) {
  step('Codex');
  const files = (m.codex && m.codex.files) || [];
  for (const f of files) rm(f);
  ok(`${files.length} skills/agents removed`);
  const agentsMd = path.join(CODEX_DIR, 'AGENTS.md');
  if (exists(agentsMd)) {
    const rest = stripBlock(fs.readFileSync(agentsMd, 'utf8'));
    if (rest.trim()) writeFile(agentsMd, rest); else rm(agentsMd);
    ok('Legion block removed from AGENTS.md');
  }
  m.codex = {};
}

/* ---------- main ---------- */

function main() {
  const major = parseInt(process.versions.node.split('.')[0], 10);
  if (major < 18) { console.error(c.r(`Legion needs Node.js 18 or newer (found ${process.versions.node}). Install it from https://nodejs.org`)); process.exit(1); }
  if (has('--help') || has('-h')) { log(fs.readFileSync(__filename, 'utf8').split('\n').slice(2, 15).map(l => l.replace(/^ \* ?/, '')).join('\n')); return; }

  const onlyClaude = has('--claude'), onlyCodex = has('--codex');
  const wantClaude = onlyClaude || (!onlyCodex && claudeDetected());
  const wantCodex = onlyCodex || (!onlyClaude && codexDetected());
  const m = manifest();

  log(c.b('\n⚔  Legion') + c.d(`  ${IS_WIN ? 'Windows' : process.platform === 'darwin' ? 'macOS' : 'Linux'} · Node ${process.versions.node}${DRY ? ' · dry run' : ''}\n`));

  if (has('--uninstall')) {
    if (has('--claude') || !has('--codex')) uninstallClaude(m);
    if (has('--codex') || !has('--claude')) uninstallCodex(m);
    if (has('--purge')) { rm(LEGION_HOME); ok(`removed ${LEGION_HOME} (including memory)`); }
    else { saveManifest(m); log(c.d(`\nMemory kept in ${path.join(LEGION_HOME, 'memory')} (use --purge to delete it).`)); }
    log(c.g('\nLegion uninstalled.\n'));
    return;
  }

  checkBuild();
  const n = counts();
  if (!wantClaude && !wantCodex) {
    warn('Neither Claude Code nor Codex was found. Install one of them, or force a target with --claude / --codex.');
    process.exitCode = 1; return;
  }
  installRuntime(m);
  if (wantClaude) installClaude(m);
  if (wantCodex) installCodex(m);
  saveManifest(m);
  log(c.g(`\nDone. ${n.agents} agents and ${n.procedures} procedures in ${n.skills} skills ready.`));
  log(c.d('Memory lives only on this computer: ' + path.join(LEGION_HOME, 'memory')));
  log(c.d('Update later with: git pull && node install.js   ·   Remove with: node install.js --uninstall\n'));
}

main();
