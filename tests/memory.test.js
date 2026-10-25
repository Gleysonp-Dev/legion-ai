'use strict';
process.env.LEGION_HOME = require('fs').mkdtempSync(require('path').join(require('os').tmpdir(), 'legion-m-'));
const test = require('node:test');
const assert = require('node:assert');
const m = require('../scripts/memory.js');

test('extracts explicit and soft preferences (PT and EN)', () => {
  assert.strictEqual(m.extractPreferences('A partir de agora use pnpm.')[0].explicit, true);
  assert.strictEqual(m.extractPreferences('Remember that I deploy on Vercel.')[0].explicit, true);
  assert.strictEqual(m.extractPreferences('Sempre responda em português.')[0].explicit, false);
  assert.strictEqual(m.extractPreferences('I prefer short answers.').length, 1);
});

test('ignores questions and normal requests', () => {
  assert.strictEqual(m.extractPreferences('Can you always do this?').length, 0);
  assert.strictEqual(m.extractPreferences('Crie uma API de pagamentos').length, 0);
});

test('never stores sensitive data', () => {
  assert.strictEqual(m.extractPreferences('Always use my password hunter2').length, 0);
  assert.strictEqual(m.extractPreferences('Lembre que meu cartão é 4111 1111 1111 1111').length, 0);
  const d = m.empty();
  assert.throws(() => m.addRule(d, 'my api key is sk-abcdefghijklmnop'));
});

test('soft preferences are promoted after repetition', () => {
  const d = m.empty();
  assert.deepStrictEqual(m.handlePrompt(d, 'Nunca use emojis.'), []);
  assert.strictEqual(m.handlePrompt(d, 'nunca use emojis!').length, 1);
  assert.strictEqual(d.rules.length, 1);
});

test('explicit preferences are saved at once and can be forgotten', () => {
  const d = m.empty();
  const saved = m.handlePrompt(d, 'From now on, write tests with Vitest.');
  assert.strictEqual(saved.length, 1);
  assert.match(d.rules[0].text, /^Write tests with Vitest/);
  assert.strictEqual(m.forget(d, 'vitest'), 1);
  assert.strictEqual(d.rules.length, 0);
});

test('detects the user language', () => {
  assert.strictEqual(m.detectLang('quero fazer um app para minha empresa, como faço isso?'), 'pt');
  assert.strictEqual(m.detectLang('how can I make this work with the API please'), 'en');
});

test('profile renders categories', () => {
  const d = m.empty();
  m.addRule(d, 'Use TypeScript strict mode');
  assert.match(m.renderProfile(d), /## Stack\n- Use TypeScript strict mode/);
});

test('cost report attributes tokens to agents', () => {
  const fs = require('fs'); const os = require('os'); const path = require('path');
  const f = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'legion-r-')), 't.jsonl');
  const lines = [
    { type: 'assistant', requestId: 'q1', message: { id: 'm1', usage: { input_tokens: 100, cache_creation_input_tokens: 50, cache_read_input_tokens: 1000, output_tokens: 20 }, content: [{ type: 'tool_use', id: 't1', name: 'Task', input: { subagent_type: 'legion:debugger' } }] } },
    { type: 'assistant', requestId: 'q1', message: { id: 'm1', usage: { input_tokens: 100, cache_creation_input_tokens: 50, cache_read_input_tokens: 1000, output_tokens: 20 }, content: [] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 't1' }] }, toolUseResult: { totalTokens: 5000, totalDurationMs: 3000, totalToolUseCount: 4 } }
  ];
  fs.writeFileSync(f, lines.map(l => JSON.stringify(l)).join('\n'));
  const u = m.claudeUsage(f);
  assert.strictEqual(u.main.input, 100); // duplicate streaming entry counted once
  assert.strictEqual(u.agents.debugger.tokens, 5000);
  assert.match(m.report({}, ['--transcript', f]), /debugger/);
});
