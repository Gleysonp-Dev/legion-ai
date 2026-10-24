---
name: legion
description: "Orchestrate Legion's 80 specialist agents: split a large or multi-part task into subtasks, dispatch them in parallel to the right agents, integrate and verify the result. Use for big projects, multi-step builds, audits or anything that spans several specialties, or when the user says /legion or 'use the legion'."
---

# Legion — multi-agent orchestration

You (the main session) are the **conductor**. Subagents cannot spawn other subagents, so the dispatching always happens here, in the main thread.

## 0. Load the user's memory
Run `node ~/.legion/bin/memory.js context` (Windows: `node %USERPROFILE%\.legion\bin\memory.js context`). Apply the preferences it prints — language, tone, stack, formats — to every step and pass the relevant ones to every agent you dispatch. If the command is missing, continue without memory.

## 1. Decide if orchestration is worth it
- **Small task** (one specialty, a few files): do it yourself or call one agent. Do not spin up a team for a one-line fix.
- **Medium task** (2–3 specialties): call 2–4 agents.
- **Large task** (many specialties, many files, research + build + review): full Legion flow below.

## 2. Plan
1. Restate the goal, constraints and definition of done in 3–5 lines.
2. If the repository is unfamiliar, dispatch `context-scout` first.
3. Read `references/agents.md` (agent registry) and, if useful, `references/skills.md` (skill registry).
4. Build a dispatch plan — optionally ask the `conductor` agent to draft it for very large jobs:

| id | subtask | agent | depends on | wave | acceptance criteria |
|----|---------|-------|-----------|------|---------------------|

Rules: smallest set of agents that covers the work; each subtask has one owner; subtasks in the same wave must not edit the same files.

## 3. Dispatch in waves
- **Claude Code:** launch every subtask of a wave **in the same message** with the Agent/Task tool (`subagent_type` = agent name; plugin agents may be listed as `legion:<name>`). Give each agent a self-contained brief: goal, inputs, files in scope, acceptance criteria, user preferences, expected return format.
- **Codex:** spawn the custom agents by name (`legion-<name>` files define agents named with underscores, e.g. `backend_engineer`). Ask Codex to run independent subtasks as parallel subagents and wait for all of them before the next wave.
- Wait for a wave to finish before starting dependent subtasks. Pass outputs forward explicitly.

## 4. Integrate
Dispatch `integrator` (or integrate yourself for small jobs): merge outputs, resolve conflicts, run build/tests.

## 5. Verify
Dispatch `qa-gatekeeper` with the acceptance criteria. For important deliverables also dispatch `chief-reviewer`. Send failures back to the owning agent — at most 2 rework loops, then report honestly what is still failing.

## 6. Report
Give the user one concise summary: what was done, where the results are, what was verified and how, open risks. Do not paste every agent's report.

## 7. Learn
Collect every **Learned preferences** item from agent reports plus any correction the user made in this session. Save durable ones:
`node ~/.legion/bin/memory.js add "<short rule>" --category <style|stack|workflow|language|tools>`
Never save secrets, passwords, financial account numbers, health details or other sensitive personal data.

## Example plan
Request: "Build a landing page with signup and deploy it."

| id | subtask | agent | depends | wave | acceptance |
|----|---------|-------|---------|------|-----------|
| 1 | Copy and structure | copywriter | – | 1 | headline + 3 benefits + CTA |
| 2 | Signup API | backend-engineer | – | 1 | POST /signup validated, tests pass |
| 3 | Page UI | ui-engineer | 1 | 2 | responsive 360–1440px, Lighthouse ≥ 90 |
| 4 | Accessibility pass | accessibility-expert | 3 | 3 | no axe violations |
| 5 | Deploy pipeline | ci-cd-engineer | 2,3 | 3 | preview URL works |
| 6 | Verify | qa-gatekeeper | 4,5 | 4 | all criteria evidenced |
