'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { build } = require('../scripts/build.js');

const ROOT = path.resolve(__dirname, '..');
// Build into a temp folder: other test files read the repo's generated files at the same time.
const os = require('os');
const OUT = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-build-'));
const stats = build({ quiet: true, out: OUT });

function listTree(dir) {
  const out = [];
  const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else out.push(path.relative(dir, p)); } };
  walk(dir); return out.sort();
}

test('committed generated files match the sources (run npm run build)', () => {
  for (const d of ['agents', 'skills', 'codex', 'gemini', 'cursor']) {
    const a = listTree(path.join(OUT, d)), b = listTree(path.join(ROOT, d));
    assert.deepStrictEqual(b, a, `${d}: file list differs`);
    for (const f of a) assert.strictEqual(fs.readFileSync(path.join(ROOT, d, f), 'utf8'), fs.readFileSync(path.join(OUT, d, f), 'utf8'), `${d}/${f} is stale`);
  }
});

function frontmatter(file) {
  const t = fs.readFileSync(file, 'utf8');
  const m = t.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(m, `missing frontmatter in ${file}`);
  const o = {};
  for (const line of m[1].split('\n')) { const i = line.indexOf(':'); if (i > 0) o[line.slice(0, i).trim()] = line.slice(i + 1).trim(); }
  if (o.description && o.description.startsWith('"')) o.description = JSON.parse(o.description);
  return o;
}

test('has 80 agents in 10 teams', () => {
  assert.strictEqual(stats.agents, 80);
  assert.strictEqual(stats.teams, 10);
});

test('has 300 procedures in 30 packs and few registered skills', () => {
  assert.ok(stats.procedures >= 300, `only ${stats.procedures}`);
  assert.strictEqual(stats.packs, 30);
  assert.ok(stats.registeredSkills <= 40, 'too many registered skills inflate context cost');
  for (const d of fs.readdirSync(path.join(ROOT, 'skills')).filter(d => fs.existsSync(path.join(ROOT, 'skills', d, 'procedures')))) {
    const procs = fs.readdirSync(path.join(ROOT, 'skills', d, 'procedures'));
    assert.ok(procs.length >= 10, d);
    const body = fs.readFileSync(path.join(ROOT, 'skills', d, 'SKILL.md'), 'utf8');
    for (const p of procs) assert.ok(body.includes('`' + p.replace(/\.md$/, '') + '`'), `${d} index misses ${p}`);
  }
});

test('always-on descriptions stay small', () => {
  let chars = 0;
  for (const d of fs.readdirSync(path.join(ROOT, 'skills'))) chars += frontmatter(path.join(ROOT, 'skills', d, 'SKILL.md')).description.length;
  for (const f of fs.readdirSync(path.join(ROOT, 'agents'))) chars += frontmatter(path.join(ROOT, 'agents', f)).description.length;
  // roughly 4 characters per token
  assert.ok(chars / 4 < 12000, `about ${Math.round(chars / 4)} tokens of descriptions`);
});

test('every agent has a valid model tier', () => {
  for (const f of fs.readdirSync(path.join(ROOT, 'agents'))) {
    assert.match(frontmatter(path.join(ROOT, 'agents', f)).model, /^(haiku|sonnet|opus|inherit)$/, f);
  }
});

test('every Claude agent has valid frontmatter', () => {
  const dir = path.join(ROOT, 'agents');
  for (const f of fs.readdirSync(dir)) {
    const fm = frontmatter(path.join(dir, f));
    assert.strictEqual(fm.name + '.md', f);
    assert.ok(fm.description && fm.description.length > 40, f);
  }
});

test('every skill folder matches its SKILL.md name', () => {
  const dir = path.join(ROOT, 'skills');
  for (const d of fs.readdirSync(dir)) {
    const fm = frontmatter(path.join(dir, d, 'SKILL.md'));
    assert.strictEqual(fm.name, d);
    assert.match(fm.name, /^[a-z0-9]+(-[a-z0-9]+)*$/);
    assert.ok(fm.description.length >= 40 && fm.description.length <= 1024, d);
  }
});

test('every Codex agent has required TOML keys', () => {
  const dir = path.join(ROOT, 'codex', 'agents');
  const files = fs.readdirSync(dir);
  assert.strictEqual(files.length, 80);
  for (const f of files) {
    const t = fs.readFileSync(path.join(dir, f), 'utf8');
    assert.match(t, /^name = "[a-z0-9_]+"$/m, f);
    assert.match(t, /^description = ".+"$/m, f);
    assert.match(t, /^developer_instructions = """\n[\s\S]+"""$/m, f);
  }
});

test('plugin manifests are valid JSON and consistent', () => {
  const plugin = JSON.parse(fs.readFileSync(path.join(ROOT, '.claude-plugin', 'plugin.json'), 'utf8'));
  const market = JSON.parse(fs.readFileSync(path.join(ROOT, '.claude-plugin', 'marketplace.json'), 'utf8'));
  assert.strictEqual(plugin.name, 'legion');
  assert.strictEqual(market.plugins[0].name, plugin.name);
  assert.strictEqual(market.plugins[0].version, plugin.version);
  JSON.parse(fs.readFileSync(path.join(ROOT, 'hooks', 'hooks.json'), 'utf8'));
});
