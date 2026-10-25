#!/usr/bin/env node
/**
 * Legion command line — one entry point for every Legion tool.
 *
 *   node ~/.legion/bin/legion.js dashboard            open Mission Control (live dashboard)
 *   node ~/.legion/bin/legion.js council <review|plan|ask|status> …   cross-AI review
 *   node ~/.legion/bin/legion.js report                token cost of the current session
 *   node ~/.legion/bin/legion.js scores                team scoreboard
 *   node ~/.legion/bin/legion.js lessons [name]        lessons learned from your feedback
 *   node ~/.legion/bin/legion.js memory <command> …    memory (show, add, forget, …)
 */
'use strict';
const path = require('path');
const { spawnSync } = require('child_process');

const [cmd, ...rest] = process.argv.slice(2);
const run = (file, args) => {
  const r = spawnSync(process.execPath, [path.join(__dirname, file), ...args], { stdio: 'inherit' });
  process.exitCode = r.status == null ? 1 : r.status;
};
const MEMORY = ['report', 'scores', 'lessons', 'lesson', 'feedback', 'show', 'context', 'add', 'forget'];

if (cmd === 'dashboard' || cmd === 'mission-control') run('mission-control.js', rest);
else if (cmd === 'council') run('council.js', rest);
else if (cmd === 'memory') run('memory.js', rest);
else if (MEMORY.includes(cmd)) run('memory.js', [cmd, ...rest]);
else {
  console.log(require('fs').readFileSync(__filename, 'utf8').split('\n').slice(2, 11).map(l => l.replace(/^ \* ?/, '')).join('\n'));
}
