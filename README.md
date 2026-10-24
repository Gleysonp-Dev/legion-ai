<p align="center">
  <img src="assets/logo.png" width="128" alt="Legion logo">
</p>

<h1 align="center">Legion</h1>

<p align="center">
  <b>80 specialist AI agents that split the work · 300 ready-made procedures · proof for every result · a memory that learns how you work</b><br>
  For <b>Claude Code</b> and <b>Codex</b> · Windows, macOS and Linux · two commands to install
</p>

<p align="center">
  <a href="README.pt-BR.md">🇧🇷 Leia em português</a> ·
  <a href="docs/CATALOG.md">Full catalogue</a> ·
  <a href="#install">Install</a>
</p>

---

## What is Legion?

Legion turns your coding assistant into a coordinated team. Ask for something big — *"build a landing page with signup, tests and deploy"* — and Legion's conductor breaks it into subtasks, sends each one to the right specialist **in parallel**, merges the results, verifies them, and remembers what you liked for next time.

**Legion's promise: the team proves what it did and shows what it cost.**

| | |
|---|---|
| **80 agents** | 10 teams of 8 specialists: command, backend, frontend & devices, data & AI, infrastructure, quality, security, product & design, content, business |
| **300 procedures** | 30 skill packs × 10 step-by-step procedures with quality checklists, loaded only when needed |
| **No proof, not done** | Every task ends with an evidence table: the command, test or file that proves each requirement |
| **Cost report** | See the tokens used by the main conversation and by each agent — `memory.js report` |
| **Lean by design** | ~9k tokens of always-on context (60% less than v1.0), cheap models for simple agents, solo/lite/full modes |
| **Learning memory** | Detects your preferences ("always answer in Portuguese", "use pnpm") and applies them in every session — stored only on your computer |
| **Two tools** | Claude Code (plugin with agents, skills and hooks) and Codex (custom agents, skills and `AGENTS.md`) |
| **Zero dependencies** | Just Node.js 18+ and git |

## Install

**Windows, macOS or Linux** — in a terminal (PowerShell, Terminal, bash):

```bash
git clone https://github.com/Gleysonp-Dev/legion-ai.git
node legion-ai/install.js
```

That's it. The installer detects Claude Code and/or Codex and sets up both. Restart them afterwards.

<details>
<summary>Other ways to install</summary>

**One line (macOS / Linux)**
```bash
curl -fsSL https://raw.githubusercontent.com/Gleysonp-Dev/legion-ai/main/install.sh | sh
```

**One line (Windows PowerShell)**
```powershell
irm https://raw.githubusercontent.com/Gleysonp-Dev/legion-ai/main/install.ps1 | iex
```

**Claude Code only, as a plugin**
```bash
claude plugin marketplace add Gleysonp-Dev/legion-ai
claude plugin install legion@legion-ai
```

**Only one tool**: `node install.js --claude` or `node install.js --codex`
**Preview without changing anything**: `node install.js --dry-run`
</details>

**Update:** `git -C legion-ai pull && node legion-ai/install.js`
**Uninstall:** `node legion-ai/install.js --uninstall` (add `--purge` to also delete your memory)

## Use it

| You want to… | Claude Code | Codex |
|---|---|---|
| Run the whole team on a big task | `/legion:legion full build a SaaS dashboard with auth and billing` — or just *"use legion to build…"* | `$legion full build a SaaS dashboard with auth and billing` |
| Keep it cheap | `/legion:legion lite …` (max 3 agents) | `$legion lite …` |
| Call one specialist | "use the **debugger** agent to find why login fails" | "spawn the **debugger** agent to find why login fails" |
| Use a skill pack | `/legion:legion-security` or just describe the task | `$legion-security` or just describe the task |
| Find the right agent/skill | `/legion:legion-help` | `$legion-help` |
| See what Legion learned about you | `/legion:legion-memory` | `$legion-memory` |
| See what a session cost | `node ~/.legion/bin/memory.js report` | `node ~/.legion/bin/memory.js report --codex` |

Skill packs also trigger automatically when your request matches their description; the pack then opens only the one procedure it needs. (If you installed with `--files` instead of the plugin, Claude Code skills have no `legion:` prefix: `/legion`, `/legion-security`.)

## How it works

```mermaid
flowchart LR
    U([You]) --> C{{Conductor<br/>legion skill}}
    M[(Memory<br/>~/.legion)] -. preferences .-> C
    C -->|plan| S[Task splitter]
    C -->|wave 1, in parallel| A1[backend-engineer]
    C -->|wave 1, in parallel| A2[ui-engineer]
    C -->|wave 1, in parallel| A3[copywriter]
    A1 & A2 & A3 --> I[Integrator]
    I --> Q[QA gatekeeper]
    Q -->|pass| R([Result])
    Q -->|fail| C
    R -. learned preferences .-> M
```

1. **Memory** — your saved preferences are loaded at the start of every session.
2. **Plan** — the conductor restates the goal and builds a dispatch table: subtask, agent, dependencies, wave, acceptance criteria.
3. **Dispatch** — independent subtasks run in parallel; dependent ones wait for their inputs.
4. **Integrate & prove** — the integrator merges; the QA gatekeeper runs real checks (tests, builds) and fills the evidence table. No proof, not done.
5. **Report** — result, evidence and the token cost of the run.
6. **Learn** — new preferences you expressed are saved for next time.

**Modes:** *solo* (no agents, for quick fixes) · *lite* (up to 3 agents) · *full* (whole team). Legion picks the cheapest mode that does the job well, or you choose.

## The 10 teams

| Team | Agents |
|---|---|
| **Command Center** | conductor, task-splitter, integrator, chief-reviewer, memory-curator, context-scout, qa-gatekeeper, risk-assessor |
| **Architecture & Backend** | software-architect, backend-engineer, api-designer, database-architect, microservices-engineer, integration-engineer, realtime-engineer, auth-specialist |
| **Frontend, Mobile & Devices** | frontend-architect, ui-engineer, react-specialist, css-stylist, mobile-engineer, accessibility-expert, web-performance-tuner, iot-engineer |
| **Data & AI** | data-engineer, data-analyst, ml-engineer, llm-engineer, prompt-engineer, rag-specialist, data-visualizer, analytics-engineer |
| **Infrastructure & DevOps** | devops-engineer, cloud-architect, ci-cd-engineer, container-specialist, sre-engineer, observability-engineer, cost-optimizer, release-manager |
| **Quality Engineering** | test-architect, unit-tester, e2e-tester, debugger, code-reviewer, refactoring-expert, performance-engineer, legacy-modernizer |
| **Security & Compliance** | security-auditor, appsec-engineer, threat-modeler, secrets-guardian, dependency-auditor, privacy-engineer, compliance-analyst, cloud-security-engineer |
| **Product & Design** | product-manager, ux-researcher, ux-designer, ui-designer, requirements-analyst, design-system-builder, growth-strategist, roadmap-planner |
| **Content, Docs & Marketing** | technical-writer, documentation-engineer, copywriter, seo-specialist, content-strategist, translator, social-media-manager, presentation-designer |
| **Business, Research & Ops** | business-analyst, financial-analyst, market-researcher, research-analyst, project-manager, operations-automator, legal-researcher, customer-success-advisor |

## 300 procedures in 30 skill packs

Planning · Architecture · Frontend · Backend · APIs · Databases · Testing · Debugging · Code quality · Security · DevOps · Cloud · Performance · Reliability · Data engineering · Data analysis · Machine learning · LLMs & agents · Mobile · Git · Documentation · UX/UI · Product · Marketing · Writing · Research · Business & finance · Productivity · Legal & privacy · IoT & embedded

Each pack is one skill (`legion-testing`, `legion-security`, `legion-iot`…) holding 10 procedures. Only the pack's short index is always in context; the procedure you need is read on demand. Every procedure has a *when to use*, numbered steps, a quality checklist and an expected output. See the [full catalogue](docs/CATALOG.md).

## Memory that learns your style

Legion keeps a small, readable memory in `~/.legion/memory/` — **nothing is sent anywhere**.

- **Explicit** — "remember that…", "from now on…", "a partir de agora…" → saved immediately.
- **Implicit** — "always…", "never…", "I prefer…", "sempre…", "prefiro…" → observed; saved once you repeat it.
- **Language** — Legion notices which language you write in and replies in it.
- **Habits** — tracks which agents and skills you use most.
- **Safe by default** — passwords, keys, tokens, card/account numbers, ID numbers and health data are never stored.

```bash
node ~/.legion/bin/memory.js show              # what Legion knows
node ~/.legion/bin/memory.js add "Use TypeScript strict mode" --category stack
node ~/.legion/bin/memory.js forget r3         # remove a rule
node ~/.legion/bin/memory.js report            # tokens used this session, per agent
node ~/.legion/bin/memory.js reset --yes       # wipe everything
```

In Claude Code the memory runs automatically through hooks. In Codex it runs through the Legion block the installer adds to `~/.codex/AGENTS.md`.

## Good to know

- **Context cost.** Every installed skill and agent adds a one-line description to the assistant's context. Legion keeps that to about **9k tokens** per session in Claude Code (measured with `claude plugin details legion`). You can still disable it per project: `claude plugin disable legion@legion-ai --scope local`.
- **Models per agent.** Simple agents (context-scout, translator, social-media-manager, dependency-auditor) run on Haiku, deep-reasoning ones (conductor, software-architect, chief-reviewer, debugger, security-auditor, threat-modeler) on Opus, the rest on Sonnet. In Codex this maps to low/medium/high reasoning effort. To force one model for every subagent in Claude Code, set `CLAUDE_CODE_SUBAGENT_MODEL`.
- **Parallelism.** Claude Code runs several subagents at once. In Codex you can raise the limit in `~/.codex/config.toml`:
  ```toml
  [agents]
  max_concurrent_threads_per_session = 8
  ```
- **Your files are safe.** The installer never overwrites skills, agents or `AGENTS.md` content you already had; uninstall removes only what Legion added.
- **Not professional advice.** Legal, financial and compliance agents produce drafts and analysis, not legal or financial advice.

## Project layout

```
src/agents/*.md        ← agent definitions (edit these)
src/skills/*.md        ← procedure definitions, grouped into packs (edit these)
src/core-skills/       ← legion, legion-memory, legion-help
scripts/build.js       → generates agents/, skills/, codex/agents/, docs/CATALOG.md
scripts/memory.js      ← learning memory CLI + Claude Code hooks
install.js             ← cross-platform installer
.claude-plugin/        ← Claude Code plugin + marketplace manifests
hooks/hooks.json       ← Claude Code hooks
```

## Contributing

Add or improve agents and skills in `src/`, run `npm run build && npm test`, and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2026 Gleyson
