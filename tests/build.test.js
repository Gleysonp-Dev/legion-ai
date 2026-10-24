'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { build } = require('../scripts/build.js');

const ROOT = path.resolve(__dirname, '..');
const stats = build({ quiet: true });

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

test('has more than 300 skills', () => {
  assert.ok(stats.skills > 300, `only ${stats.skills}`);
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
