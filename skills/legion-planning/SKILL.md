---
name: legion-planning
description: "Planning & Delivery pack with 10 ready procedures: project kickoff, work breakdown, estimate effort, sprint planning, definition of done, risk register, status report, retrospective, decision matrix, okr builder. Use for any planning & delivery task."
---
# Planning & Delivery — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `project-kickoff` | Start a new project from an idea: goals, scope, stack, milestones and first tasks. Use when the user says "I want to build X" with no plan yet. |
| `work-breakdown` | Decompose a large task into small, independent work packages with dependencies and parallel waves. Use before handing big work to several agents. |
| `estimate-effort` | Estimate time and effort for a feature or project with ranges and assumptions. Use when someone asks "how long will this take?". |
| `sprint-planning` | Plan a sprint or week of work: pick backlog items by priority and capacity, define a sprint goal and daily plan. Use at the start of an iteration. |
| `definition-of-done` | Create a definition of done and acceptance criteria checklist for a team or task. Use to stop "done" from meaning different things to different people. |
| `risk-register` | Build a risk register for a project with likelihood, impact, owners and mitigations. Use for launches, migrations or any project with deadlines. |
| `status-report` | Write a concise project status report: progress, next steps, blockers, decisions needed and health. Use for weekly updates to stakeholders. |
| `retrospective` | Run a retrospective: what went well, what didn't, root causes and concrete actions. Use after a sprint, project or incident. |
| `decision-matrix` | Compare options with a weighted decision matrix and recommend one. Use when choosing between tools, vendors, designs or strategies. |
| `okr-builder` | Draft OKRs (objectives and measurable key results) for a person, team or product. Use for quarterly goal-setting. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`conductor`, `task-splitter`, `project-manager`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
