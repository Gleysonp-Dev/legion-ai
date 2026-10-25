---
name: legion
description: "Orchestrate Legion's 80 specialist agents: split a large or multi-part task into subtasks, run them in parallel on the right agents, integrate, prove the result with evidence (optionally cross-checked by other AIs), report the token cost and learn from the outcome. Use for big projects, multi-step builds or audits, or when the user says /legion or 'use legion'. Add 'lite' or 'full' to control how many agents run."
---

# Legion — multi-agent orchestration

You (the main session) are the **conductor**. Subagents cannot spawn other subagents, so all dispatching happens here.

Legion's promise to the user: **the team proves what it did and shows what it cost.**

> **Paths:** `~` means your home folder. In Windows PowerShell (Codex, Cursor) write `$HOME\.legion\bin\<file>.js` instead of `~/.legion/bin/<file>.js`; Claude Code's shell understands `~` everywhere.

## 0. Load memory
Run `node ~/.legion/bin/memory.js context` and apply the preferences it prints (language, tone, stack, formats). Pass the relevant ones to each agent. If the command is missing, continue without memory.

## 0.5 Use a playbook when one fits
If the goal is a whole project that matches a playbook (SaaS MVP, landing page, IoT product, mobile app, API, AI assistant/RAG, security hardening, data dashboard, legacy upgrade, open-source launch), use the `legion-playbooks` skill and follow that playbook's waves.

## 1. Pick a mode (cost control)
| Mode | When | Agents |
|---|---|---|
| **solo** | one specialty, a few files, quick fix | none — do it yourself with the matching `legion-<pack>` skill |
| **lite** (default for medium tasks) | 2–3 specialties | at most 3 agents, one wave, you verify |
| **full** | big build, audit or research + build + review | as many as needed, in waves, plus `qa-gatekeeper` |

If the user wrote `lite` or `full`, obey. Otherwise choose the cheapest mode that can do the job well and say which one you picked in one line. Never start a team for something solo can do.

## 2. Plan
1. Restate the goal, constraints and definition of done in 3–5 lines.
2. Unfamiliar repository → dispatch `context-scout` first (it runs on a fast, cheap model).
3. Read `references/agents.md` to choose agents; `references/skills.md` lists the 30 packs and 300 procedures. Use the **Team record** from memory: prefer agents proven with this user; for agents that needed rework before, brief more carefully and verify harder.
4. Write the dispatch table:

| id | subtask | agent | depends on | wave | acceptance criteria (how we will prove it) |
|----|---------|-------|-----------|------|---------------------------------------------|

Rules: fewest agents that cover the work; one owner per subtask; subtasks in the same wave never edit the same files; every acceptance criterion must be checkable (a command, a test, a file, a source).

## 3. Dispatch in waves
- **Claude Code:** launch every subtask of a wave **in the same message** with the Agent/Task tool (`subagent_type` = agent name, shown as `legion:<name>` for plugin agents).
- **Codex:** spawn the custom agents by name (underscores: `backend_engineer`) as parallel subagents and wait for all of them.
- Keep briefs short and self-contained: goal, files in scope, acceptance criteria, relevant user preferences, "reply in under ~250 words; put long output in files". Do not paste whole files into briefs — give paths.
- Tell each agent: "If `~/.legion/lessons/<your-name>.md` exists, read it first."
- Wait for a wave before starting dependent work. Pass forward only what the next agent needs.

## 4. Integrate
Small jobs: integrate yourself. Big jobs: dispatch `integrator`. Run the build and tests after merging.

## 5. Prove it — no proof, not done
For every acceptance criterion collect evidence you or an agent actually produced: command + result, test output, file:line, screenshot path or source link. In **full** mode dispatch `qa-gatekeeper` to run the checks. For important or risky deliverables call the **Council** (`legion-council` skill): other AIs (Codex, Claude, Gemini) review the diff read-only — fix or reject each finding with a reason. If no other AI is installed, use `chief-reviewer`. Send failures back to the owner — at most 2 rework loops, then report honestly what still fails. Never mark something done without evidence.

## 6. Report
Reply to the user with:

**Result** — 2–4 lines: what was delivered and where.

**Evidence**
| Criterion | Proof | Status |
|---|---|---|
| … | `npm test` → 42 passed | ✅ |

**Cost** — run `node ~/.legion/bin/memory.js report` and paste its short summary (main conversation, each agent's tokens, total). In Codex use `report --codex`.

**Open risks** — only if any.

## 7. Learn and evolve
- **Preferences:** save lasting ones from agent replies and user corrections with
  `node ~/.legion/bin/memory.js add "<short rule>" --category <style|stack|workflow|language|tools>`.
- **Outcomes:** Legion scores agents and packs automatically when the user approves ("perfeito", "works") or corrects ("não era isso", "wrong") right after their work. If the user's verdict is clear but was not detected, record it: `node ~/.legion/bin/memory.js feedback up|down`.
- **Lessons:** whenever work needed rework (QA failure, council finding, user correction), write one actionable lesson for the agent or procedure responsible:
  `node ~/.legion/bin/memory.js lesson <agent-or-procedure> "<what to do differently next time>"`
  That agent/procedure reads its lessons on every future run — this is how Legion improves for this user. If memory lists *unrecorded corrections*, convert them, then run `node ~/.legion/bin/memory.js lessons --clear-pending`.
- Never save secrets, passwords, financial account numbers, health details or other sensitive personal data.
- Once per session, mention that the user can watch the team live with `node ~/.legion/bin/legion.js dashboard`.

## Example
"Build a landing page with signup and deploy it" → **full**:

| id | subtask | agent | depends | wave | proof |
|----|---------|-------|---------|------|-------|
| 1 | Copy | copywriter | – | 1 | headline + 3 benefits + CTA in `copy.md` |
| 2 | Signup API | backend-engineer | – | 1 | `npm test` passes, POST /signup validated |
| 3 | Page UI | ui-engineer | 1 | 2 | Lighthouse ≥ 90 at 360px and 1440px |
| 4 | Deploy | ci-cd-engineer | 2,3 | 3 | preview URL returns 200 |
| 5 | Verify | qa-gatekeeper | 4 | 4 | evidence table complete |
