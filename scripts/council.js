#!/usr/bin/env node
/**
 * Legion Council — cross-AI review. One AI did the work; the others review it, read-only.
 *
 *   node council.js status                       which reviewers are available
 *   node council.js review [--base <ref>] [--focus "<what matters>"]
 *   node council.js plan <file> [--focus "..."]  critique a plan/spec before building
 *   node council.js ask "<question>"             independent second opinions
 *
 * Options: --with codex,claude,gemini   choose reviewers (default: all installed except --host)
 *          --host claude|codex|gemini|cursor   the tool running Legion right now (auto-detected when possible)
 *          --timeout <seconds>  per reviewer (default 600)   --json   machine-readable output
 *
 * Reviewers run in read-only mode: codex `--sandbox read-only`, claude with only Read/Grep/Glob,
 * gemini headless (tools needing approval are refused). Zero dependencies, Node 18+.
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

let mem = null;
try { mem = require('./memory.js'); } catch { /* optional */ }
const LEGION_HOME = process.env.LEGION_HOME || path.join(os.homedir(), '.legion');
const IS_WIN = process.platform === 'win32';
const MAX_DIFF = 80000;
const SEV = { blocker: 0, major: 1, minor: 2, nit: 3 };

/* ---------- reviewers ---------- */

const REVIEWERS = {
  codex: {
    bin: 'codex',
    label: 'Codex (OpenAI)',
    args: out => ['exec', '--sandbox', 'read-only', '--skip-git-repo-check', '--ephemeral', '-o', out, '-'],
    readsOutFile: true
  },
  claude: {
    bin: 'claude',
    label: 'Claude (Anthropic)',
    args: () => ['-p', '--output-format', 'text', '--allowedTools', 'Read,Grep,Glob', '--disallowedTools', 'Bash,Edit,Write,NotebookEdit']
  },
  gemini: {
    bin: 'gemini',
    label: 'Gemini (Google)',
    args: () => ['-p', 'You are a reviewer. Follow the instructions given on standard input exactly.']
  }
};

function which(cmd) {
  const r = spawnSync(IS_WIN ? 'where' : 'which', [cmd], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.split(/\r?\n/)[0].trim() : null;
}

function detectHost() {
  if (process.env.CLAUDECODE || process.env.CLAUDE_CODE_ENTRYPOINT) return 'claude';
  if (process.env.CODEX_SANDBOX || process.env.CODEX_HOME_ACTIVE || process.env.CODEX_THREAD_ID) return 'codex';
  if (process.env.GEMINI_CLI) return 'gemini';
  if (process.env.CURSOR_AGENT || process.env.CURSOR_TRACE_ID) return 'cursor';
  return null;
}

function available() {
  return Object.keys(REVIEWERS).filter(k => which(REVIEWERS[k].bin));
}

function pickReviewers(opts) {
  const host = opts.host || detectHost();
  let list = opts.with ? opts.with.split(',').map(s => s.trim()).filter(Boolean) : available().filter(k => k !== host);
  list = list.filter(k => REVIEWERS[k]);
  return { host, list };
}

function runReviewer(key, prompt, { cwd, timeout }) {
  const r = REVIEWERS[key];
  const outFile = path.join(os.tmpdir(), `legion-council-${key}-${process.pid}-${Date.now()}.txt`);
  return new Promise(resolve => {
    const started = Date.now();
    let stdout = '', stderr = '', done = false;
    const child = spawn(r.bin, r.args(outFile), { cwd, shell: IS_WIN, env: { ...process.env, LEGION_COUNCIL: '1' } });
    const finish = (status, error) => {
      if (done) return; done = true;
      clearTimeout(timer);
      let text = stdout;
      if (r.readsOutFile) { try { text = fs.readFileSync(outFile, 'utf8') || stdout; fs.rmSync(outFile, { force: true }); } catch { /* use stdout */ } }
      resolve({ key, label: r.label, ok: status === 0 && !error, error: error || (status !== 0 ? (stderr.trim().split('\n').slice(-3).join(' ') || `exit ${status}`) : null), text: text.trim(), ms: Date.now() - started });
    };
    const timer = setTimeout(() => { try { child.kill(); } catch { /* ignore */ } finish(null, `timed out after ${Math.round(timeout / 1000)}s`); }, timeout);
    child.stdout.on('data', c => (stdout += c));
    child.stderr.on('data', c => (stderr += c));
    child.on('error', e => finish(null, e.message));
    child.on('close', code => finish(code));
    child.stdin.on('error', () => { /* reviewer may close stdin early */ });
    child.stdin.end(prompt);
  });
}

/* ---------- prompts ---------- */

const JSON_SPEC = `Respond with ONLY one JSON object, no prose before or after:
{"verdict":"approve" | "changes" | "reject",
 "summary":"one or two sentences",
 "findings":[{"severity":"blocker"|"major"|"minor"|"nit","file":"path or empty","line":0,"issue":"what is wrong and why it matters","fix":"concrete fix"}]}
Use "approve" only if you found no blocker or major issue. Be specific; cite files and lines. Do not pad with praise. Do not modify any file.`;

function git(args, cwd) {
  const r = spawnSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return r.status === 0 ? r.stdout : '';
}

function buildReviewPrompt({ cwd, base, focus, host }) {
  const inRepo = git(['rev-parse', '--is-inside-work-tree'], cwd).trim() === 'true';
  if (!inRepo) throw new Error('council review needs a git repository (run it inside your project).');
  const status = git(['status', '--short'], cwd);
  let diff = base ? git(['diff', base], cwd) : git(['diff', 'HEAD'], cwd);
  if (!diff.trim() && !base) diff = git(['show', '--stat', '--patch', 'HEAD'], cwd); // nothing uncommitted: review the last commit
  const untracked = git(['ls-files', '--others', '--exclude-standard'], cwd).split('\n').filter(Boolean).slice(0, 50);
  if (!diff.trim() && !untracked.length) throw new Error('nothing to review: no changes found.');
  let truncated = false;
  if (diff.length > MAX_DIFF) { diff = diff.slice(0, MAX_DIFF); truncated = true; }
  return `You are an independent senior reviewer on the Legion council.
Another AI${host ? ` (${host})` : ''} produced the changes below in this repository. Review them critically for correctness, security, missing or weak tests, unmet requirements, and maintainability.
You may read files in the repository to understand context (read-only). Never edit files or run commands that change anything.
${focus ? `\nWhat matters most for this change: ${focus}\n` : ''}
${JSON_SPEC}

## git status
${status || '(clean)'}
${untracked.length ? `\n## New untracked files (read them from disk)\n${untracked.join('\n')}\n` : ''}
## Diff${base ? ` against ${base}` : ''}${truncated ? ' (truncated — read the files for the rest)' : ''}
\`\`\`diff
${diff}
\`\`\`
`;
}

function buildPlanPrompt({ file, focus, host }) {
  const text = fs.readFileSync(file, 'utf8').slice(0, MAX_DIFF);
  return `You are an independent senior reviewer on the Legion council.
Another AI${host ? ` (${host})` : ''} wrote the plan below. Challenge it before anyone builds it: wrong assumptions, missing requirements, risks, simpler alternatives, wrong order of work.
You may read repository files for context (read-only). Never edit anything.
${focus ? `\nWhat matters most: ${focus}\n` : ''}
${JSON_SPEC}

## Plan (${path.basename(file)})
${text}
`;
}

function buildAskPrompt({ question }) {
  return `You are one of several independent experts on the Legion council giving a second opinion.
Answer the question below on your own, with your reasoning and the main risks. You may read files in the current directory for context (read-only). Never edit anything.
Reply in under 300 words. End with one line: "Confidence: high|medium|low".

Question: ${question}
`;
}

/* ---------- parsing & merging ---------- */

function parseVerdict(text) {
  if (!text) return null;
  const cands = [];
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) cands.push(fence[1]);
  const i = text.indexOf('{'), j = text.lastIndexOf('}');
  if (i >= 0 && j > i) cands.push(text.slice(i, j + 1));
  for (const c of cands) {
    try {
      const o = JSON.parse(c);
      if (o && typeof o === 'object' && o.verdict) {
        o.verdict = String(o.verdict).toLowerCase();
        o.findings = Array.isArray(o.findings) ? o.findings.map(f => ({
          severity: SEV[String(f.severity || '').toLowerCase()] != null ? String(f.severity).toLowerCase() : 'minor',
          file: f.file || '', line: Number(f.line) || 0, issue: String(f.issue || '').trim(), fix: String(f.fix || '').trim()
        })).filter(f => f.issue) : [];
        return o;
      }
    } catch { /* try next */ }
  }
  return null;
}

function merge(results) {
  const reviews = results.map(r => ({ ...r, parsed: r.ok ? parseVerdict(r.text) : null }));
  const verdicts = reviews.filter(r => r.parsed).map(r => r.parsed.verdict);
  const consensus = !verdicts.length ? 'no-verdict' : verdicts.includes('reject') ? 'reject' : verdicts.includes('changes') ? 'changes' : 'approve';
  const findings = [];
  for (const r of reviews) for (const f of (r.parsed ? r.parsed.findings : [])) {
    const dup = findings.find(x => x.file === f.file && f.file && Math.abs(x.line - f.line) <= 2 && x.severity === f.severity);
    if (dup) { if (!dup.by.includes(r.key)) dup.by.push(r.key); continue; }
    findings.push({ ...f, by: [r.key] });
  }
  findings.sort((a, b) => SEV[a.severity] - SEV[b.severity] || b.by.length - a.by.length);
  findings.forEach((f, i) => (f.id = `F${i + 1}`));
  return { consensus, reviews, findings };
}

/* ---------- output ---------- */

const ICON = { approve: '✅', changes: '🟡', reject: '⛔', 'no-verdict': '❔' };

function renderReview(mode, merged, meta) {
  const out = [`# Legion Council — ${mode}`, '', `**Consensus: ${ICON[merged.consensus]} ${merged.consensus}** · reviewers: ${merged.reviews.map(r => r.label).join(', ') || 'none'}${meta.host ? ` · author: ${meta.host}` : ''}`, ''];
  out.push('| Reviewer | Verdict | Summary | Time |', '|---|---|---|---|');
  for (const r of merged.reviews) {
    const v = r.parsed ? `${ICON[r.parsed.verdict] || ''} ${r.parsed.verdict}` : r.ok ? '❔ unparsed' : '⚠️ failed';
    const sum = r.parsed ? (r.parsed.summary || '').replace(/\|/g, '/') : (r.error || 'reply was not JSON — see raw output').replace(/\|/g, '/');
    out.push(`| ${r.label} | ${v} | ${sum.slice(0, 220)} | ${Math.round(r.ms / 1000)}s |`);
  }
  out.push('');
  if (merged.findings.length) {
    out.push('## Findings', '', '| id | severity | where | issue | suggested fix | raised by |', '|---|---|---|---|---|---|');
    for (const f of merged.findings) out.push(`| ${f.id} | ${f.severity} | ${f.file ? `${f.file}${f.line ? ':' + f.line : ''}` : '—'} | ${f.issue.replace(/\|/g, '/')} | ${f.fix.replace(/\|/g, '/')} | ${f.by.join(', ')} |`);
    out.push('', '**Next:** for each finding, either fix it or reject it with a reason (the author has the final word — reviewers can be wrong). Re-run `council review` after fixing blockers/majors.');
  } else out.push('No findings.');
  for (const r of merged.reviews.filter(x => !x.parsed && x.text)) out.push('', `<details><summary>Raw reply from ${r.label}</summary>\n\n${r.text.slice(0, 4000)}\n\n</details>`);
  return out.join('\n');
}

function renderAsk(question, results) {
  const out = [`# Legion Council — second opinions`, '', `**Question:** ${question}`, ''];
  for (const r of results) out.push(`## ${r.label}${r.ok ? '' : ' — ⚠️ failed'}`, '', r.ok ? r.text : r.error, '');
  out.push('**Next:** compare the opinions with your own; where they disagree, say why you side with one.');
  return out.join('\n');
}

function saveReport(mode, markdown, data) {
  const dir = path.join(LEGION_HOME, 'council');
  fs.mkdirSync(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const file = path.join(dir, `${stamp}-${mode}.md`);
  fs.writeFileSync(file, markdown + '\n');
  fs.writeFileSync(file.replace(/\.md$/, '.json'), JSON.stringify(data, null, 2));
  return file;
}

/* ---------- CLI ---------- */

function opt(args, flag) { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; }
function positional(args) { const out = []; for (let i = 0; i < args.length; i++) { if (args[i].startsWith('--')) { if (!['--json'].includes(args[i])) i++; continue; } out.push(args[i]); } return out; }

async function main(argv) {
  const [cmd, ...args] = argv;
  const opts = { with: opt(args, '--with'), host: opt(args, '--host'), base: opt(args, '--base'), focus: opt(args, '--focus'), timeout: (Number(opt(args, '--timeout')) || 600) * 1000, cwd: process.cwd(), json: args.includes('--json') };
  if (!cmd || cmd === 'help' || cmd === '--help') {
    console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(2, 15).map(l => l.replace(/^ \* ?/, '')).join('\n'));
    return;
  }
  if (cmd === 'status') {
    const { host, list } = pickReviewers(opts);
    console.log(`Host (author): ${host || 'unknown (pass --host)'}`);
    for (const k of Object.keys(REVIEWERS)) console.log(`  ${available().includes(k) ? '✔' : '✗'} ${REVIEWERS[k].label}${k === host ? ' — host, will not review its own work' : ''}`);
    console.log(list.length ? `Council for this run: ${list.join(', ')}` : 'No other AI CLI found. Install Codex, Claude Code or Gemini CLI to enable the council.');
    return;
  }
  const { host, list } = pickReviewers(opts);
  if (!list.length) {
    console.log('Legion Council: no independent reviewer available (install another AI CLI: codex, claude or gemini, and log in). Fall back to the chief-reviewer agent.');
    process.exitCode = 2; return;
  }
  let prompt, mode, question;
  if (cmd === 'review') { prompt = buildReviewPrompt({ ...opts, host }); mode = 'review'; }
  else if (cmd === 'plan') {
    const file = positional(args)[0];
    if (!file || !fs.existsSync(file)) throw new Error('usage: council plan <file>');
    prompt = buildPlanPrompt({ file, focus: opts.focus, host }); mode = 'plan';
  } else if (cmd === 'ask') {
    question = positional(args).join(' ');
    if (!question) throw new Error('usage: council ask "<question>"');
    prompt = buildAskPrompt({ question }); mode = 'ask';
  } else throw new Error(`unknown command: ${cmd}`);

  if (mem) mem.logEvent('council-start', { mode, reviewers: list, host });
  process.stderr.write(`Legion Council: asking ${list.join(', ')} (read-only)…\n`);
  const results = await Promise.all(list.map(k => runReviewer(k, prompt, opts)));

  let markdown, data;
  if (mode === 'ask') { markdown = renderAsk(question, results); data = { mode, host, question, results }; }
  else { const merged = merge(results); markdown = renderReview(mode, merged, { host }); data = { mode, host, consensus: merged.consensus, findings: merged.findings, reviews: merged.reviews.map(r => ({ key: r.key, ok: r.ok, error: r.error, ms: r.ms, parsed: r.parsed })) }; }
  const file = saveReport(mode, markdown, data);
  if (mem) mem.logEvent('council-end', { mode, reviewers: list, consensus: data.consensus || null, findings: (data.findings || []).length, file });
  if (opts.json) console.log(JSON.stringify({ ...data, report: file }, null, 2));
  else console.log(markdown + `\n\n_Saved: ${file}_`);
}

if (require.main === module) main(process.argv.slice(2)).catch(e => { console.error('Legion Council: ' + e.message); process.exitCode = 1; });
module.exports = { parseVerdict, merge, buildReviewPrompt, buildPlanPrompt, renderReview, pickReviewers, REVIEWERS };
