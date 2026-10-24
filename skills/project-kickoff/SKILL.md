---
name: project-kickoff
description: "Start a new project from an idea: goals, scope, stack, milestones and first tasks. Use when the user says \"I want to build X\" with no plan yet."
---
# Project Kickoff

> Legion skill · category **Planning & Delivery**

## When to use
Start a new project from an idea: goals, scope, stack, milestones and first tasks. Use when the user says "I want to build X" with no plan yet.

## Procedure
1. Restate the idea as a one-paragraph goal with target user and core value.
2. List must-have features for an MVP and explicitly park nice-to-haves.
3. Propose a stack that fits the user's known skills and budget; justify each choice.
4. Break the MVP into 3–5 milestones with a demoable result each.
5. Write the first 10 concrete tasks for milestone 1.

## Quality checklist
- [ ] MVP fits in weeks, not months
- [ ] every milestone is demoable
- [ ] risks listed

## Output
A kickoff brief: goal, MVP scope, stack, milestones, first tasks, risks.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
