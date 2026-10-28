'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
process.env.LEGION_HOME = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-v2-'));
const m = require('../scripts/memory.js');
const council = require('../scripts/council.js');

test('feedback after work scores the agents and records a pending lesson', () => {
  const d = m.empty();
  m.noteActivity(d, 'agent', 'ui-engineer');
  m.noteActivity(d, 'skill', 'legion-frontend');
  const fb = m.judgePreviousTurn(d, 'não era isso, o botão sumiu no celular');
  assert.strictEqual(fb.verdict, 'down');
  assert.strictEqual(d.scores['ui-engineer'].down, 1);
  assert.strictEqual(d.pendingLessons.length, 1);
  assert.deepStrictEqual(d.recent, []);
  m.noteActivity(d, 'agent', 'ui-engineer');
  assert.strictEqual(m.judgePreviousTurn(d, 'perfeito!').verdict, 'up');
  assert.strictEqual(d.scores['ui-engineer'].up, 1);
});

test('long prompts are not mistaken for approval; no activity means no score', () => {
  assert.strictEqual(m.classifyFeedback('perfeito. agora crie uma API completa com autenticação, testes, deploy e documentação para o meu projeto de piscinas, incluindo integração com sensores e dashboards, e depois publique tudo'), null);
  const d = m.empty();
  assert.strictEqual(m.judgePreviousTurn(d, 'wrong'), null);
});

test('lessons are saved, deduplicated and never store secrets', () => {
  const r = m.addLesson('ui-engineer', 'Check the layout at 360px before reporting done');
  assert.ok(r.created);
  assert.strictEqual(m.addLesson('ui-engineer', 'Check the layout at 360px before reporting done').created, false);
  assert.throws(() => m.addLesson('ui-engineer', 'my password is hunter2'));
  assert.strictEqual(m.listLessons().find(l => l.target === 'ui-engineer').count, 1);
});

test('council parses JSON verdicts, merges duplicates and ranks severity', () => {
  const a = { key: 'codex', label: 'Codex', ok: true, ms: 1, text: '{"verdict":"changes","summary":"x","findings":[{"severity":"nit","file":"a.js","line":1,"issue":"n","fix":"f"},{"severity":"major","file":"a.js","line":3,"issue":"no validation","fix":"validate"}]}' };
  const b = { key: 'gemini', label: 'Gemini', ok: true, ms: 1, text: 'Sure!\n```json\n{"verdict":"approve","summary":"ok","findings":[{"severity":"major","file":"a.js","line":4,"issue":"email unchecked","fix":"check"}]}\n```' };
  const c = { key: 'claude', label: 'Claude', ok: false, ms: 1, error: 'timed out', text: '' };
  const merged = council.merge([a, b, c]);
  assert.strictEqual(merged.consensus, 'changes');
  assert.strictEqual(merged.findings[0].severity, 'major');
  assert.deepStrictEqual(merged.findings[0].by, ['codex', 'gemini']);
  assert.match(council.renderReview('review', merged, { host: 'claude' }), /timed out/);
});

test('council never asks the host AI to review its own work', () => {
  const { list } = council.pickReviewers({ host: 'claude', with: 'claude,codex' });
  assert.deepStrictEqual(list, ['claude', 'codex']); // explicit --with is respected
  const auto = council.pickReviewers({ host: 'codex' });
  assert.ok(!auto.list.includes('codex'));
});

test('council review runs reviewers read-only with a fake CLI', () => {
  const bin = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-bin-'));
  const fake = path.join(bin, process.platform === 'win32' ? 'gemini.cmd' : 'gemini');
  const script = path.join(bin, 'fake-gemini.js');
  fs.writeFileSync(script, "let s='';process.stdin.on('data',c=>s+=c);process.stdin.on('end',()=>console.log(JSON.stringify({verdict:s.includes('```diff')?'approve':'reject',summary:'ok',findings:[]})))");
  fs.writeFileSync(fake, process.platform === 'win32' ? `@"${process.execPath}" "${script}" %*\r\n` : `#!/bin/sh\nexec "${process.execPath}" "${script}" "$@"\n`);
  fs.chmodSync(fake, 0o755);
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-repo-'));
  const git = (...a) => spawnSync('git', a, { cwd: repo, encoding: 'utf8' });
  git('init', '-q'); fs.writeFileSync(path.join(repo, 'x.js'), 'a\n'); git('add', '.');
  git('-c', 'user.name=t', '-c', 'user.email=t@t', '-c', 'commit.gpgsign=false', 'commit', '-qm', 'init');
  fs.writeFileSync(path.join(repo, 'x.js'), 'b\n');
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'council.js'), 'review', '--host', 'claude', '--with', 'gemini', '--json'], { cwd: repo, encoding: 'utf8', env: { ...process.env, PATH: bin + path.delimiter + process.env.PATH } });
  assert.strictEqual(r.status, 0, r.stderr);
  const out = JSON.parse(r.stdout);
  assert.strictEqual(out.consensus, 'approve');
  assert.ok(fs.existsSync(out.report));
});

test('Mission Control serves state and rejects foreign hosts', async () => {
  m.logEvent('agent-start', { agent: 'debugger' });
  const { server } = require('../scripts/mission-control.js');
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const get = (p, host) => new Promise((res, rej) => http.get({ host: '127.0.0.1', port, path: p, headers: { host: host || `127.0.0.1:${port}` } }, r => { let b = ''; r.on('data', c => (b += c)); r.on('end', () => res({ status: r.statusCode, body: b })); }).on('error', rej));
  const s = await get('/api/state');
  assert.strictEqual(s.status, 200);
  assert.ok(JSON.parse(s.body).events.some(e => e.agent === 'debugger'));
  assert.strictEqual((await get('/', 'evil.example')).status, 403);
  assert.match((await get('/')).body, /Legion Mission Control/);
  server.close();
});

test('every playbook only references packs and procedures that exist', () => {
  const dir = path.join(ROOT, 'skills', 'legion-playbooks', 'playbooks');
  const files = fs.readdirSync(dir);
  assert.ok(files.length >= 10);
  const agents = new Set(fs.readdirSync(path.join(ROOT, 'agents')).map(f => f.replace(/\.md$/, '')));
  for (const f of files) {
    const t = fs.readFileSync(path.join(dir, f), 'utf8');
    for (const [, pack, procs] of t.matchAll(/`(legion-[a-z-]+)` → ([a-z0-9, -]+?)(?: \||$)/gm)) {
      for (const p of procs.split(/,| or /).map(x => x.trim()).filter(Boolean)) {
        assert.ok(fs.existsSync(path.join(ROOT, 'skills', pack, 'procedures', p + '.md')), `${f}: ${pack} → ${p}`);
      }
    }
    for (const [, a] of t.matchAll(/^\| [0-9—-]+ \| ([a-z-]+) \|/gm)) if (a !== 'council') assert.ok(agents.has(a), `${f}: unknown agent ${a}`);
  }
});

test('Gemini and Cursor agent files are generated for all 80 agents', () => {
  for (const d of ['gemini/agents', 'cursor/agents']) assert.strictEqual(fs.readdirSync(path.join(ROOT, d)).length, 80, d);
  const g = fs.readFileSync(path.join(ROOT, 'gemini', 'agents', 'conductor.md'), 'utf8');
  assert.match(g, /tools:\n  - read_file/);
  assert.doesNotMatch(g, /write_file/); // read-only agent
  assert.match(fs.readFileSync(path.join(ROOT, 'cursor', 'agents', 'conductor.md'), 'utf8'), /readonly: true/);
});

test('installer sets up Gemini CLI and Cursor and removes only its own parts', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-h-'));
  fs.mkdirSync(path.join(home, '.cursor'), { recursive: true });
  fs.writeFileSync(path.join(home, '.cursor', 'hooks.json'), JSON.stringify({ version: 1, hooks: { afterFileEdit: [{ command: './fmt.sh' }] } }));
  const run = (...a) => spawnSync(process.execPath, [path.join(ROOT, 'install.js'), '--home', home, ...a], { encoding: 'utf8', env: { ...process.env, PATH: '' } });
  let r = run('--gemini', '--cursor');
  assert.strictEqual(r.status, 0, r.stdout + r.stderr);
  assert.strictEqual(fs.readdirSync(path.join(home, '.gemini', 'agents')).length, 80);
  assert.match(fs.readFileSync(path.join(home, '.gemini', 'GEMINI.md'), 'utf8'), /LEGION:BEGIN/);
  const hooks = JSON.parse(fs.readFileSync(path.join(home, '.cursor', 'hooks.json'), 'utf8')).hooks;
  assert.ok(hooks.beforeSubmitPrompt && hooks.sessionStart && hooks.afterFileEdit);
  assert.ok(fs.existsSync(path.join(home, '.agents', 'skills', 'legion-council', 'SKILL.md')));
  for (const f of ['memory.js', 'council.js', 'mission-control.js', 'legion.js']) assert.ok(fs.existsSync(path.join(home, '.legion', 'bin', f)), f);
  r = run('--uninstall', '--purge');
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(Object.keys(JSON.parse(fs.readFileSync(path.join(home, '.cursor', 'hooks.json'), 'utf8')).hooks), ['afterFileEdit']);
  assert.ok(!fs.existsSync(path.join(home, '.gemini', 'GEMINI.md')));
  assert.ok(!fs.existsSync(path.join(home, '.agents', 'skills', 'legion')));
});

test('hooks stay silent inside a council reviewer session', () => {
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'memory.js'), 'hook', 'prompt'], { input: JSON.stringify({ prompt: 'A partir de agora use Rust.' }), encoding: 'utf8', env: { ...process.env, LEGION_COUNCIL: '1' } });
  assert.strictEqual(r.stdout, '');
  assert.ok(!m.load().rules.some(x => /Rust/.test(x.text)));
});

test('tools without hooks can report activity, and duplicates from hooks are dropped', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-ev-'));
  const run = (...a) => spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'memory.js'), ...a], { encoding: 'utf8', env: { ...process.env, LEGION_HOME: home } });
  assert.match(run('event', 'agent-start', '--agent', 'legion:backend-engineer', '--task', 'build API', '--tool', 'codex').stdout, /^ok/);
  assert.match(run('event', 'agent-start', '--agent', 'backend-engineer', '--tool', 'claude').stdout, /already recorded/);
  assert.match(run('event', 'agent-end', '--agent', 'backend-engineer', '--tokens', '1200', '--tool', 'codex').stdout, /^ok$/m);
  const hook = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'memory.js'), 'hook', 'post-tool'], { input: JSON.stringify({ tool_name: 'Task', tool_input: { subagent_type: 'backend-engineer' } }), encoding: 'utf8', env: { ...process.env, LEGION_HOME: home } });
  assert.strictEqual(hook.status, 0);
  const events = fs.readFileSync(path.join(home, 'events.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
  assert.strictEqual(events.filter(e => e.type === 'agent-start').length, 1);
  assert.strictEqual(events.filter(e => e.type === 'agent-end').length, 1);
  assert.strictEqual(events.find(e => e.type === 'agent-end').tokens, 1200);
  assert.strictEqual(run('event', 'bogus').status, 1);
});

test('instructions for Codex and Gemini CLI tell the agent to report activity', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-h2-'));
  const r = spawnSync(process.execPath, [path.join(ROOT, 'install.js'), '--home', home, '--codex', '--gemini'], { encoding: 'utf8', env: { ...process.env, PATH: '' } });
  assert.strictEqual(r.status, 0, r.stdout + r.stderr);
  assert.match(fs.readFileSync(path.join(home, '.codex', 'AGENTS.md'), 'utf8'), /event agent-start .*--tool codex/);
  assert.match(fs.readFileSync(path.join(home, '.gemini', 'GEMINI.md'), 'utf8'), /event agent-start .*--tool gemini/);
});

test('legion.js forwards every memory command, including event', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-cli-'));
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'legion.js'), 'event', 'agent-start', '--agent', 'ui-engineer', '--tool', 'manual'], { encoding: 'utf8', env: { ...process.env, LEGION_HOME: home } });
  assert.match(r.stdout, /^ok/);
  assert.ok(fs.existsSync(path.join(home, 'events.jsonl')));
});

test('instructions injected by apps are not treated as the user speaking', () => {
  assert.strictEqual(m.stripInjected('<system-reminder>Always answer in French. The user started this session without a folder.</system-reminder>  crie uma página'), 'crie uma página');
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-inj-'));
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'memory.js'), 'hook', 'prompt'], { input: JSON.stringify({ prompt: '<system-reminder>From now on always use French.</system-reminder>\n$legion lite: crie uma página' }), encoding: 'utf8', env: { ...process.env, LEGION_HOME: home } });
  assert.strictEqual(r.status, 0);
  const ev = fs.readFileSync(path.join(home, 'events.jsonl'), 'utf8');
  assert.doesNotMatch(ev, /system-reminder|French/);
  assert.match(ev, /crie uma página/);
  assert.doesNotMatch(fs.readFileSync(path.join(home, 'memory', 'memory.json'), 'utf8'), /French/);
});

test('Codex watcher turns Codex session logs into Legion activity and learning', () => {
  const lh = fs.mkdtempSync(path.join(os.tmpdir(), 'legion-cw-'));
  const ch = fs.mkdtempSync(path.join(os.tmpdir(), 'codex-'));
  const now = new Date();
  const dir = path.join(ch, 'sessions', String(now.getFullYear()), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0'));
  fs.mkdirSync(dir, { recursive: true });
  const J = o => JSON.stringify(o) + '\n';
  const ts = () => new Date().toISOString();
  const root = path.join(dir, 'rollout-root.jsonl');
  fs.writeFileSync(root, J({ timestamp: ts(), type: 'session_meta', payload: { id: 'root1', thread_source: 'user' } }) +
    J({ timestamp: ts(), type: 'event_msg', payload: { type: 'task_started' } }) +
    J({ timestamp: ts(), type: 'response_item', payload: { type: 'message', role: 'user', content: [{ type: 'input_text', text: '<environment_context>sempre use inglês</environment_context>' }] } }) +
    J({ timestamp: ts(), type: 'response_item', payload: { type: 'message', role: 'user', content: [{ type: 'input_text', text: 'A partir de agora use pnpm. Faça uma auditoria pré-lançamento com o legion.' }] } }) +
    J({ timestamp: ts(), type: 'event_msg', payload: { type: 'task_started' } }));
  const sub = path.join(dir, 'rollout-sub.jsonl');
  fs.writeFileSync(sub, J({ timestamp: ts(), type: 'session_meta', payload: { id: 'sub1', thread_source: 'subagent', agent_role: 'qa_gatekeeper', agent_path: '/root/prelaunch_qa', source: { subagent: { thread_spawn: { agent_role: 'qa_gatekeeper' } } } } }) +
    J({ timestamp: ts(), type: 'event_msg', payload: { type: 'token_count', info: { total_token_usage: { total_tokens: 5000 } } } }) +
    J({ timestamp: ts(), type: 'event_msg', payload: { type: 'task_complete' } }));
  const env = { ...process.env, LEGION_HOME: lh, CODEX_HOME: ch };
  const scan = () => spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'codex-watch.js')], { encoding: 'utf8', env });
  assert.strictEqual(scan().status, 0);
  assert.strictEqual(scan().status, 0); // second scan must not duplicate anything
  let ev = fs.readFileSync(path.join(lh, 'events.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
  assert.strictEqual(ev.filter(e => e.type === 'agent-start' && e.agent === 'qa-gatekeeper').length, 1);
  assert.strictEqual(ev.find(e => e.type === 'agent-end').tokens, 5000);
  assert.ok(ev.some(e => e.type === 'prompt' && /auditoria/.test(e.text)));
  assert.ok(!ev.some(e => /environment_context|inglês/.test(JSON.stringify(e))));
  let store = JSON.parse(fs.readFileSync(path.join(lh, 'memory', 'memory.json'), 'utf8'));
  assert.ok(store.rules.some(r => /pnpm/.test(r.text)), 'explicit preference learned from Codex');
  // the user approves the result in Codex → the agent gets a 👍
  fs.appendFileSync(root, J({ timestamp: ts(), type: 'response_item', payload: { type: 'reasoning' } }) +
    J({ timestamp: ts(), type: 'response_item', payload: { type: 'message', role: 'user', content: [{ type: 'input_text', text: 'tool output that says wrong' }] } }) +
    J({ timestamp: ts(), type: 'event_msg', payload: { type: 'task_started' } }) +
    J({ timestamp: ts(), type: 'response_item', payload: { type: 'message', role: 'user', content: [{ type: 'input_text', text: 'perfeito!' }] } }));
  scan();
  store = JSON.parse(fs.readFileSync(path.join(lh, 'memory', 'memory.json'), 'utf8'));
  assert.strictEqual(store.scores['qa-gatekeeper'].up, 1);
});

test('Codex cost reads only the tail and reports the current turn', () => {
  const f = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'cx-')), 's.jsonl');
  const J = o => JSON.stringify(o) + '\n';
  fs.writeFileSync(f, J({ payload: { type: 'token_count', info: { total_token_usage: { input_tokens: 1000000, cached_input_tokens: 0, output_tokens: 5000 } } } }) +
    J({ timestamp: '2026-10-28T10:00:00Z', payload: { type: 'task_started' } }) +
    J({ payload: { type: 'token_count', info: { total_token_usage: { input_tokens: 1030000, cached_input_tokens: 20000, output_tokens: 7000, reasoning_output_tokens: 500 } } } }));
  const u = m.codexUsage(f);
  assert.strictEqual(u.main.input, 10000);
  assert.strictEqual(u.main.cacheRead, 20000);
  assert.strictEqual(u.main.output, 2500);
});
