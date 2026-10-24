---
name: work-breakdown
description: "Decompose a large task into small, independent work packages with dependencies and parallel waves. Use before handing big work to several agents."
---
# Work Breakdown

> Legion skill · category **Planning & Delivery**

## When to use
Decompose a large task into small, independent work packages with dependencies and parallel waves. Use before handing big work to several agents.

## Procedure
1. Identify deliverables and natural seams (modules, layers, documents).
2. Write each package with goal, inputs, output and files in scope.
3. Draw dependencies and group independent packages into waves.
4. Flag packages that touch the same files to avoid conflicts.
5. Estimate each package as S/M/L.

## Quality checklist
- [ ] No package needs guessing
- [ ] no circular dependency
- [ ] conflicts flagged

## Output
A numbered package list plus a wave plan.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
