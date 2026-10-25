#!/usr/bin/env node
/**
 * Legion build: compiles the human-friendly sources in src/ into
 *   agents/<name>.md            (Claude Code subagents)
 *   codex/agents/<name>.toml    (Codex custom agents)
 *   gemini/agents/<name>.md     (Gemini CLI subagents)
 *   cursor/agents/<name>.md     (Cursor subagents)
 *   skills/<name>/SKILL.md      (Agent Skills — shared by Claude Code and Codex)
 *   skills/legion/references/*  (registries used by the orchestrator)
 *
 * Zero dependencies. Run: node scripts/build.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const OUT_AGENTS = path.join(ROOT, 'agents');
const OUT_CODEX = path.join(ROOT, 'codex', 'agents');
const OUT_GEMINI = path.join(ROOT, 'gemini', 'agents');
const OUT_CURSOR = path.join(ROOT, 'cursor', 'agents');
const OUT_SKILLS = path.join(ROOT, 'skills');
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function rmrf(p) { fs.rmSync(p, { recursive: true, force: true }); }
function mkdirp(p) { fs.mkdirSync(p, { recursive: true }); }
const SPECIAL = {
  api: 'API', seo: 'SEO', ui: 'UI', ux: 'UX', ml: 'ML', llm: 'LLM', ai: 'AI', sql: 'SQL', css: 'CSS', mvp: 'MVP', kpi: 'KPI',
  prd: 'PRD', adr: 'ADR', etl: 'ETL', dns: 'DNS', iam: 'IAM', iot: 'IoT', ota: 'OTA', mqtt: 'MQTT', ios: 'iOS', ab: 'A/B',
  okr: 'OKR', sop: 'SOP', swot: 'SWOT', rag: 'RAG', mcp: 'MCP', csv: 'CSV', dbt: 'dbt', soc2: 'SOC 2', lgpd: 'LGPD',
  gdpr: 'GDPR', dsar: 'DSAR', nosql: 'NoSQL', orm: 'ORM', grpc: 'gRPC', graphql: 'GraphQL', nextjs: 'Next.js', e2e: 'E2E',
  tdd: 'TDD', esp32: 'ESP32', vps: 'VPS', bom: 'BOM', c4: 'C4', i18n: 'i18n', owasp: 'OWASP', aws: 'AWS', gcp: 'GCP',
  qa: 'QA', sre: 'SRE', ci: 'CI', cd: 'CD', appsec: 'AppSec', devops: 'DevOps', crud: 'CRUD', swiftui: 'SwiftUI', sdk: 'SDK'
};
function title(s) { return s.split('-').map(w => SPECIAL[w] || (w[0].toUpperCase() + w.slice(1))).join(' '); }
function yamlStr(s) { return JSON.stringify(s); } // JSON strings are valid YAML scalars

/* ---------- parsers ---------- */

// Agents source format (src/agents/*.md):
// # team: <id> | <Team Name>
// ## <agent-name>
// desc: ...
// tools: Read, Grep, ...
// model: inherit
// mission: ...
// - responsibility
// deliver: ...
// handoff: a, b
function parseAgents() {
  const agents = [];
  const teams = [];
  for (const file of fs.readdirSync(path.join(SRC, 'agents')).sort()) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(path.join(SRC, 'agents', file), 'utf8');
    let team = null; let cur = null;
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trimEnd();
      let m;
      if ((m = line.match(/^# team:\s*([a-z0-9-]+)\s*\|\s*(.+)$/))) {
        team = { id: m[1], name: m[2].trim(), file, agents: [] }; teams.push(team); continue;
      }
      if ((m = line.match(/^## ([a-z0-9-]+)\s*$/))) {
        if (!team) throw new Error(`${file}: agent before team header`);
        cur = { name: m[1], team: team.id, teamName: team.name, resp: [], tools: '', model: 'inherit', handoff: [] };
        agents.push(cur); team.agents.push(cur.name); continue;
      }
      if (!cur) continue;
      if ((m = line.match(/^desc:\s*(.+)$/))) cur.desc = m[1];
      else if ((m = line.match(/^tools:\s*(.+)$/))) cur.tools = m[1];
      else if ((m = line.match(/^model:\s*(.+)$/))) cur.model = m[1];
      else if ((m = line.match(/^mission:\s*(.+)$/))) cur.mission = m[1];
      else if ((m = line.match(/^deliver:\s*(.+)$/))) cur.deliver = m[1];
      else if ((m = line.match(/^handoff:\s*(.+)$/))) cur.handoff = m[1].split(',').map(s => s.trim()).filter(Boolean);
      else if ((m = line.match(/^- (.+)$/))) cur.resp.push(m[1]);
    }
  }
  return { agents, teams };
}

// Skills source format (src/skills/*.md):
// # category: <id> | <Category Name>
// agents: a, b
// ## <skill-name>
// desc: Use when ...
// - step
// check: a; b; c
// out: ...
function parseSkills(dir) {
  const skills = [];
  const cats = [];
  if (!fs.existsSync(dir)) return { skills, cats };
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    let cat = null; let cur = null;
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trimEnd();
      let m;
      if ((m = line.match(/^# category:\s*([a-z0-9-]+)\s*\|\s*(.+)$/))) {
        cat = { id: m[1], name: m[2].trim(), agents: [], skills: [] }; cats.push(cat); cur = null; continue;
      }
      if (!cur && cat && (m = line.match(/^agents:\s*(.+)$/))) { cat.agents = m[1].split(',').map(s => s.trim()); continue; }
      if ((m = line.match(/^## ([a-z0-9-]+)\s*$/))) {
        if (!cat) throw new Error(`${file}: skill before category header`);
        cur = { name: m[1], cat: cat.id, catName: cat.name, steps: [], check: [], body: null };
        skills.push(cur); cat.skills.push(cur.name); continue;
      }
      if (!cur) continue;
      if ((m = line.match(/^desc:\s*(.+)$/))) cur.desc = m[1];
      else if ((m = line.match(/^check:\s*(.+)$/))) cur.check = m[1].split(';').map(s => s.trim()).filter(Boolean);
      else if ((m = line.match(/^out:\s*(.+)$/))) cur.out = m[1];
      else if ((m = line.match(/^- (.+)$/))) cur.steps.push(m[1]);
    }
  }
  return { skills, cats };
}

/* ---------- renderers ---------- */

const PROTOCOL = `## Legion protocol
- Before starting, if \`~/.legion/memory/profile.md\` exists, read it and follow the user's recorded preferences (language, tone, stack, conventions). If \`~/.legion/lessons/__NAME__.md\` exists, read it too: lessons from this user's past corrections of your work. The user's current request always wins over memory.
- Stay inside your specialty. If part of the task belongs to another specialist, say so in **Handoffs** instead of improvising.
- **No proof, not done.** Back every claim with evidence: commands you ran and their result, files and line numbers, sources. If you could not verify something, say so plainly — never invent results.
- **Be economical.** Read only what you need, prefer targeted searches over reading whole trees, and keep your reply short: the caller's context is expensive. Put long material (full code, long reports) in files and return the paths.
- If the user corrects how you work ("always…", "never…", "prefer…"), note it under **Learned preferences** so the conductor can save it with \`node ~/.legion/bin/memory.js add "<preference>"\`.

## Return format (aim for under ~250 words)
1. **Summary** — 1–3 sentences on the outcome.
2. **Evidence** — what you changed or found, with proof (command → result, file:line, source link).
3. **Risks / open questions** — anything unverified or needing a decision.
4. **Handoffs** — which Legion agent should act next and why (if any).
5. **Learned preferences** — user preferences observed during this task (if any).`;

const EFFORT = { haiku: 'low', sonnet: 'medium', opus: 'high' };

function agentBody(a, byName) {
  const protocol = PROTOCOL.split('__NAME__').join(a.name);
  const handoffs = a.handoff.length
    ? a.handoff.map(h => `- \`${h}\` — ${(byName[h] && byName[h].desc) || ''}`).join('\n')
    : '- `conductor` — report back for integration.';
  return `You are **${title(a.name)}**, a specialist on the **${a.teamName}** team of Legion, an 80-agent AI workforce.

## Mission
${a.mission}

## Responsibilities
${a.resp.map(r => `- ${r}`).join('\n')}

## Deliverable
${a.deliver}

## Usual handoffs
${handoffs}

${protocol}
`;
}

function renderClaudeAgent(a, byName) {
  const fm = ['---', `name: ${a.name}`, `description: ${yamlStr(a.desc)}`];
  if (a.tools) fm.push(`tools: ${a.tools}`);
  fm.push(`model: ${a.model || 'inherit'}`, '---', '');
  return fm.join('\n') + agentBody(a, byName);
}

function tomlMultiline(s) {
  // TOML multi-line basic string: escape backslashes and any triple quotes
  return '"""\n' + s.replace(/\\/g, '\\\\').replace(/"""/g, '\\"\\"\\"') + '"""';
}
function renderCodexAgent(a, byName) {
  const readOnly = isReadOnly(a);
  const body = agentBody(a, byName) + (readOnly ? '\n## Mode\nRead-only specialist: investigate and report; do not edit files or run mutating commands.\n' : '');
  return [
    `# Generated by Legion (scripts/build.js) — do not edit by hand.`,
    `name = ${JSON.stringify(a.name.replace(/-/g, '_'))}`,
    `description = ${JSON.stringify(a.desc)}`,
    EFFORT[a.model] ? `model_reasoning_effort = "${EFFORT[a.model]}"` : null,
    `developer_instructions = ${tomlMultiline(body)}`,
    ''
  ].filter(l => l !== null).join('\n');
}

const GEMINI_TOOLS = { Read: ['read_file', 'read_many_files', 'list_directory'], Grep: ['grep_search'], Glob: ['glob'], Write: ['write_file'], Edit: ['replace'], Bash: ['run_shell_command'], WebSearch: ['google_web_search'], WebFetch: ['web_fetch'] };
function isReadOnly(a) { return a.tools && !/\b(Write|Edit|Bash)\b/.test(a.tools); }

function renderGeminiAgent(a, byName) {
  const tools = [...new Set((a.tools || 'Read, Grep, Glob').split(',').map(t => t.trim()).flatMap(t => GEMINI_TOOLS[t] || []))];
  const fm = ['---', `name: ${a.name}`, `description: ${yamlStr(a.desc)}`, 'tools:', ...tools.map(t => `  - ${t}`), 'model: inherit', '---', ''];
  return fm.join('\n') + agentBody(a, byName).replace(/Agent\/Task tool/g, 'subagent');
}

function renderCursorAgent(a, byName) {
  const fm = ['---', `name: ${a.name}`, `description: ${yamlStr(a.desc)}`];
  if (isReadOnly(a)) fm.push('readonly: true');
  fm.push('---', '');
  return fm.join('\n') + agentBody(a, byName);
}

function catSkillName(cat) { return `legion-${cat.id}`; }

function renderRecipe(s, cat) {
  const steps = s.steps.map((st, i) => `${i + 1}. ${st}`).join('\n');
  const check = s.check.length ? s.check.map(c => `- [ ] ${c}`).join('\n') : '- [ ] Result verified against the original request';
  return `# ${title(s.name)}

> Legion procedure \`${s.name}\` · pack **${cat.name}** (\`${catSkillName(cat)}\`)

## When to use
${s.desc}

## Procedure
${steps}

## Quality checklist
${check}

## Output
${s.out || 'A concise result the user can act on, with evidence for every claim.'}
`;
}

function renderCategorySkill(cat, recipes) {
  const titles = recipes.map(r => title(r.name).toLowerCase()).join(', ');
  const desc = `${cat.name} pack with ${recipes.length} ready procedures: ${titles}. Use for any ${cat.name.replace(/ \(.*\)$/, '').toLowerCase()} task.`;
  const rows = recipes.map(r => `| \`${r.name}\` | ${r.desc.replace(/\|/g, '/')} |`).join('\n');
  return `---
name: ${catSkillName(cat)}
description: ${yamlStr(desc)}
---
# ${cat.name} — Legion pack

Pick the procedure that matches the task, then **read only that file** from \`procedures/<name>.md\` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
${rows}

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read \`procedures/<name>.md\` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If \`~/.legion/memory/profile.md\` exists, apply the user's recorded preferences; if \`~/.legion/lessons/<procedure>.md\` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: \`node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"\`.

## Specialists for this pack
${cat.agents.map(a => `\`${a}\``).join(', ')}. For large or multi-part work, use the \`legion\` skill so the conductor can split it across agents.
`;
}

/* ---------- build ---------- */

function build({ quiet = false } = {}) {
  const { agents, teams } = parseAgents();
  const { skills, cats } = parseSkills(path.join(SRC, 'skills'));
  const errors = [];
  const byName = Object.fromEntries(agents.map(a => [a.name, a]));

  // validate agents
  const seenA = new Set();
  for (const a of agents) {
    if (!NAME_RE.test(a.name)) errors.push(`agent ${a.name}: invalid name`);
    if (seenA.has(a.name)) errors.push(`agent ${a.name}: duplicate`);
    seenA.add(a.name);
    for (const k of ['desc', 'mission', 'deliver']) if (!a[k]) errors.push(`agent ${a.name}: missing ${k}`);
    if (a.resp.length < 3) errors.push(`agent ${a.name}: needs >=3 responsibilities`);
    for (const h of a.handoff) if (!byName[h]) errors.push(`agent ${a.name}: unknown handoff ${h}`);
  }
  // validate skills
  const seenS = new Set();
  const coreDir = path.join(SRC, 'core-skills');
  const coreNames = fs.existsSync(coreDir) ? fs.readdirSync(coreDir).filter(d => fs.statSync(path.join(coreDir, d)).isDirectory()) : [];
  for (const c of coreNames) seenS.add(c);
  for (const s of skills) {
    if (!NAME_RE.test(s.name) || s.name.length > 64) errors.push(`skill ${s.name}: invalid name`);
    if (seenS.has(s.name)) errors.push(`skill ${s.name}: duplicate`);
    seenS.add(s.name);
    if (!s.desc) errors.push(`skill ${s.name}: missing desc`);
    else if (s.desc.length > 1024) errors.push(`skill ${s.name}: desc too long`);
    if (s.steps.length < 3) errors.push(`skill ${s.name}: needs >=3 steps`);
  }
  for (const c of cats) for (const a of c.agents) if (!byName[a]) errors.push(`category ${c.id}: unknown agent ${a}`);
  if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

  // write agents
  for (const d of [OUT_AGENTS, OUT_CODEX, OUT_GEMINI, OUT_CURSOR, OUT_SKILLS]) { rmrf(d); mkdirp(d); }
  for (const a of agents) {
    fs.writeFileSync(path.join(OUT_AGENTS, `${a.name}.md`), renderClaudeAgent(a, byName));
    fs.writeFileSync(path.join(OUT_CODEX, `legion-${a.name}.toml`), renderCodexAgent(a, byName));
    fs.writeFileSync(path.join(OUT_GEMINI, `${a.name}.md`), renderGeminiAgent(a, byName));
    fs.writeFileSync(path.join(OUT_CURSOR, `${a.name}.md`), renderCursorAgent(a, byName));
  }
  // write category packs: one registered skill per category, procedures loaded on demand
  for (const c of cats) {
    const recipes = c.skills.map(n => skills.find(x => x.name === n));
    const d = path.join(OUT_SKILLS, catSkillName(c)); mkdirp(path.join(d, 'procedures'));
    fs.writeFileSync(path.join(d, 'SKILL.md'), renderCategorySkill(c, recipes));
    for (const r of recipes) fs.writeFileSync(path.join(d, 'procedures', `${r.name}.md`), renderRecipe(r, c));
  }
  // copy core skills verbatim
  for (const c of coreNames) fs.cpSync(path.join(coreDir, c), path.join(OUT_SKILLS, c), { recursive: true });

  // registries for the orchestrator
  const refDir = path.join(OUT_SKILLS, 'legion', 'references'); mkdirp(refDir);
  const agentReg = ['# Legion agent registry', '', `${agents.length} agents in ${teams.length} teams. Claude Code: call with the Task/Agent tool using the agent name (plugin agents may appear as \`legion:<name>\`). Codex: spawn the custom agent \`<name_with_underscores>\`.`, ''];
  for (const t of teams) {
    agentReg.push(`## ${t.name} (\`${t.id}\`)`, '', '| Agent | Use for |', '|---|---|');
    for (const n of t.agents) agentReg.push(`| \`${n}\` | ${byName[n].desc.replace(/\|/g, '/')} |`);
    agentReg.push('');
  }
  fs.writeFileSync(path.join(refDir, 'agents.md'), agentReg.join('\n'));
  const skillReg = ['# Legion skill registry', '', `${skills.length} procedures in ${cats.length} packs + ${coreNames.length} core skills. Invoke the pack skill (e.g. \`legion-testing\`), then read \`procedures/<name>.md\` inside it.`, ''];
  skillReg.push('## Core', '', ...coreNames.map(c => `- \`${c}\``), '');
  for (const c of cats) {
    skillReg.push(`## ${c.name} — pack \`${catSkillName(c)}\` — agents: ${c.agents.map(a => `\`${a}\``).join(', ')}`, '');
    for (const n of c.skills) { const s = skills.find(x => x.name === n); skillReg.push(`- \`${n}\` — ${s.desc}`); }
    skillReg.push('');
  }
  fs.writeFileSync(path.join(refDir, 'skills.md'), skillReg.join('\n'));

  // catalog for docs
  const stats = { agents: agents.length, teams: teams.length, procedures: skills.length, packs: cats.length, coreSkills: coreNames.length, registeredSkills: cats.length + coreNames.length, categories: cats.length };
  fs.writeFileSync(path.join(ROOT, 'catalog.json'), JSON.stringify({
    ...stats,
    teams: teams.map(t => ({ id: t.id, name: t.name, agents: t.agents })),
    categories: cats.map(c => ({ id: c.id, name: c.name, agents: c.agents, skills: c.skills })),
    core: coreNames
  }, null, 2) + '\n');
  // human-readable catalogue
  const cat = ['# Legion catalogue', '', `**${stats.agents} agents** in ${stats.teams} teams · **${stats.procedures} procedures** in ${stats.packs} packs + ${stats.coreSkills} core skills.`, '', '_Generated by `node scripts/build.js` — edit files in `src/` instead._', '', '## Agents', ''];
  for (const t of teams) {
    cat.push(`### ${t.name}`, '', '| Agent | What it does |', '|---|---|');
    for (const n of t.agents) cat.push(`| \`${n}\` | ${byName[n].desc.replace(/\|/g, '/')} |`);
    cat.push('');
  }
  cat.push('## Skills', '', '### Core', '', '| Skill | |', '|---|---|',
    '| `legion` | Orchestrate the 80 agents: plan, dispatch in parallel, integrate, verify, learn |',
    '| `legion-memory` | Show, add or forget what Legion has learned about you |',
    '| `legion-help` | Find the right agent or skill for a task |',
    '| `legion-council` | Cross-AI review: Codex, Claude and Gemini review each other read-only |',
    '| `legion-playbooks` | 10 end-to-end playbooks: SaaS MVP, IoT product, mobile app, RAG assistant… |', '');
  for (const c of cats) {
    cat.push(`### ${c.name} — \`${catSkillName(c)}\``, '', `Agents: ${c.agents.map(a => `\`${a}\``).join(', ')}`, '', '| Procedure | When to use |', '|---|---|');
    for (const n of c.skills) cat.push(`| \`${n}\` | ${skills.find(x => x.name === n).desc.replace(/\|/g, '/')} |`);
    cat.push('');
  }
  mkdirp(path.join(ROOT, 'docs'));
  fs.writeFileSync(path.join(ROOT, 'docs', 'CATALOG.md'), cat.join('\n'));

  if (!quiet) console.log(`Built ${stats.agents} agents (${stats.teams} teams), ${stats.procedures} procedures in ${stats.packs} packs + ${stats.coreSkills} core skills (${stats.registeredSkills} registered skills).`);
  return stats;
}

if (require.main === module) build();
module.exports = { build, parseAgents, parseSkills };
