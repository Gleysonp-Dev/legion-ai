#!/usr/bin/env node
/**
 * Legion build: compiles the human-friendly sources in src/ into
 *   agents/<name>.md            (Claude Code subagents)
 *   codex/agents/<name>.toml    (Codex custom agents)
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
- Before starting, if \`~/.legion/memory/profile.md\` exists, read it and follow the user's recorded preferences (language, tone, stack, conventions). The user's current request always wins over memory.
- Stay inside your specialty. If part of the task belongs to another specialist, say so in **Handoffs** instead of improvising.
- Prefer evidence over assumption: read the relevant files, run the relevant commands, cite paths and line numbers.
- Never invent results. If you could not verify something, say it plainly.
- If the user corrects how you work ("always…", "never…", "prefer…"), note it under **Learned preferences** so the conductor can save it with \`node ~/.legion/bin/memory.js add "<preference>"\`.

## Return format
Reply to the agent that called you with:
1. **Summary** — 1–3 sentences on the outcome.
2. **Work done** — what you changed or found (files, commands, evidence).
3. **Risks / open questions** — anything unverified or needing a decision.
4. **Handoffs** — which Legion agent should act next and why (if any).
5. **Learned preferences** — user preferences observed during this task (if any).`;

function agentBody(a, byName) {
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

${PROTOCOL}
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
  const readOnly = a.tools && !/\b(Write|Edit|Bash)\b/.test(a.tools);
  const body = agentBody(a, byName) + (readOnly ? '\n## Mode\nRead-only specialist: investigate and report; do not edit files or run mutating commands.\n' : '');
  return [
    `# Generated by Legion (scripts/build.js) — do not edit by hand.`,
    `name = ${JSON.stringify(a.name.replace(/-/g, '_'))}`,
    `description = ${JSON.stringify(a.desc)}`,
    `developer_instructions = ${tomlMultiline(body)}`,
    ''
  ].filter(l => l !== null).join('\n');
}

function renderSkill(s, catAgents) {
  const fm = ['---', `name: ${s.name}`, `description: ${yamlStr(s.desc)}`, '---', ''].join('\n');
  const steps = s.steps.map((st, i) => `${i + 1}. ${st}`).join('\n');
  const check = s.check.length ? s.check.map(c => `- [ ] ${c}`).join('\n') : '- [ ] Result verified against the original request';
  const agents = catAgents.length ? catAgents.map(a => `\`${a}\``).join(', ') : '`conductor`';
  return `${fm}# ${title(s.name)}

> Legion skill · category **${s.catName}**

## When to use
${s.desc}

## Procedure
${steps}

## Quality checklist
${check}

## Output
${s.out || 'A concise result the user can act on, with evidence for every claim.'}

## Works well with
Legion agents: ${agents}. For large or multi-part work, hand the task to the \`legion\` skill so the conductor can split it across agents.

## Personalisation
If \`~/.legion/memory/profile.md\` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
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
  rmrf(OUT_AGENTS); rmrf(OUT_CODEX); rmrf(OUT_SKILLS);
  mkdirp(OUT_AGENTS); mkdirp(OUT_CODEX); mkdirp(OUT_SKILLS);
  for (const a of agents) {
    fs.writeFileSync(path.join(OUT_AGENTS, `${a.name}.md`), renderClaudeAgent(a, byName));
    fs.writeFileSync(path.join(OUT_CODEX, `legion-${a.name}.toml`), renderCodexAgent(a, byName));
  }
  // write skills
  const catByName = Object.fromEntries(cats.map(c => [c.id, c]));
  for (const s of skills) {
    const d = path.join(OUT_SKILLS, s.name); mkdirp(d);
    fs.writeFileSync(path.join(d, 'SKILL.md'), renderSkill(s, catByName[s.cat].agents));
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
  const skillReg = ['# Legion skill registry', '', `${skills.length + coreNames.length} skills (${coreNames.length} core + ${skills.length} catalog) in ${cats.length} categories.`, ''];
  skillReg.push('## Core', '', ...coreNames.map(c => `- \`${c}\``), '');
  for (const c of cats) {
    skillReg.push(`## ${c.name} (\`${c.id}\`) — agents: ${c.agents.map(a => `\`${a}\``).join(', ')}`, '');
    for (const n of c.skills) { const s = skills.find(x => x.name === n); skillReg.push(`- \`${n}\` — ${s.desc}`); }
    skillReg.push('');
  }
  fs.writeFileSync(path.join(refDir, 'skills.md'), skillReg.join('\n'));

  // catalog for docs
  const stats = { agents: agents.length, teams: teams.length, skills: skills.length + coreNames.length, coreSkills: coreNames.length, categories: cats.length };
  fs.writeFileSync(path.join(ROOT, 'catalog.json'), JSON.stringify({
    ...stats,
    teams: teams.map(t => ({ id: t.id, name: t.name, agents: t.agents })),
    categories: cats.map(c => ({ id: c.id, name: c.name, agents: c.agents, skills: c.skills })),
    core: coreNames
  }, null, 2) + '\n');
  // human-readable catalogue
  const cat = ['# Legion catalogue', '', `**${stats.agents} agents** in ${stats.teams} teams · **${stats.skills} skills** in ${stats.categories} categories + core.`, '', '_Generated by `node scripts/build.js` — edit files in `src/` instead._', '', '## Agents', ''];
  for (const t of teams) {
    cat.push(`### ${t.name}`, '', '| Agent | What it does |', '|---|---|');
    for (const n of t.agents) cat.push(`| \`${n}\` | ${byName[n].desc.replace(/\|/g, '/')} |`);
    cat.push('');
  }
  cat.push('## Skills', '', '### Core', '', '| Skill | |', '|---|---|',
    '| `legion` | Orchestrate the 80 agents: plan, dispatch in parallel, integrate, verify, learn |',
    '| `legion-memory` | Show, add or forget what Legion has learned about you |',
    '| `legion-help` | Find the right agent or skill for a task |', '');
  for (const c of cats) {
    cat.push(`### ${c.name}`, '', `Agents: ${c.agents.map(a => `\`${a}\``).join(', ')}`, '', '| Skill | When to use |', '|---|---|');
    for (const n of c.skills) cat.push(`| \`${n}\` | ${skills.find(x => x.name === n).desc.replace(/\|/g, '/')} |`);
    cat.push('');
  }
  mkdirp(path.join(ROOT, 'docs'));
  fs.writeFileSync(path.join(ROOT, 'docs', 'CATALOG.md'), cat.join('\n'));

  if (!quiet) console.log(`Built ${stats.agents} agents (${stats.teams} teams) and ${stats.skills} skills (${stats.categories} categories + ${stats.coreSkills} core).`);
  return stats;
}

if (require.main === module) build();
module.exports = { build, parseAgents, parseSkills };
