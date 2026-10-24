'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const run = (...a) => spawnSync(process.execPath, [path.join(ROOT, 'install.js'), ...a], { encoding: 'utf8', env: { ...process.env, PATH: '' } });

test('installs and uninstalls cleanly into a sandbox home', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-'));
  // a pre-existing user file must survive
  fs.mkdirSync(path.join(home, '.codex'), { recursive: true });
  fs.writeFileSync(path.join(home, '.codex', 'AGENTS.md'), '# My rules\n- be nice\n');
  fs.mkdirSync(path.join(home, '.agents', 'skills', 'code-review'), { recursive: true });
  fs.writeFileSync(path.join(home, '.agents', 'skills', 'code-review', 'SKILL.md'), 'mine');

  let r = run('--home', home, '--codex');
  assert.strictEqual(r.status, 0, r.stderr + r.stdout);
  r = run('--home', home, '--claude', '--files');
  assert.strictEqual(r.status, 0, r.stderr + r.stdout);

  assert.ok(fs.existsSync(path.join(home, '.legion', 'bin', 'memory.js')));
  assert.strictEqual(fs.readdirSync(path.join(home, '.codex', 'agents')).length, 80);
  assert.strictEqual(fs.readFileSync(path.join(home, '.agents', 'skills', 'code-review', 'SKILL.md'), 'utf8'), 'mine');
  const agentsMd = fs.readFileSync(path.join(home, '.codex', 'AGENTS.md'), 'utf8');
  assert.match(agentsMd, /# My rules/);
  assert.match(agentsMd, /LEGION:BEGIN/);
  const settings = JSON.parse(fs.readFileSync(path.join(home, '.claude', 'settings.json'), 'utf8'));
  assert.ok(settings.hooks.UserPromptSubmit.length === 1);

  // idempotent
  r = run('--home', home, '--codex');
  assert.strictEqual(r.status, 0);
  assert.strictEqual(fs.readFileSync(path.join(home, '.codex', 'AGENTS.md'), 'utf8').split('LEGION:BEGIN').length, 2);

  r = run('--home', home, '--uninstall', '--purge');
  assert.strictEqual(r.status, 0, r.stderr + r.stdout);
  assert.strictEqual(fs.readFileSync(path.join(home, '.codex', 'AGENTS.md'), 'utf8').trim(), '# My rules\n- be nice');
  assert.strictEqual(fs.readFileSync(path.join(home, '.agents', 'skills', 'code-review', 'SKILL.md'), 'utf8'), 'mine');
  assert.ok(!fs.existsSync(path.join(home, '.legion')));
  assert.strictEqual(fs.readdirSync(path.join(home, '.claude', 'agents')).length, 0);
  fs.rmSync(home, { recursive: true, force: true });
});
