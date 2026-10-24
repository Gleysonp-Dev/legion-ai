---
name: estimate-effort
description: "Estimate time and effort for a feature or project with ranges and assumptions. Use when someone asks \"how long will this take?\"."
---
# Estimate Effort

> Legion skill · category **Planning & Delivery**

## When to use
Estimate time and effort for a feature or project with ranges and assumptions. Use when someone asks "how long will this take?".

## Procedure
1. Break the work into tasks small enough to estimate (under 2 days each).
2. Give each task an optimistic, likely and pessimistic estimate.
3. Compute PERT expected value ((O + 4L + P) / 6) and total range.
4. Add explicit buffers for integration, testing and unknowns.
5. List the assumptions that would change the estimate most.

## Quality checklist
- [ ] Ranges, not single numbers
- [ ] assumptions explicit
- [ ] testing included

## Output
An estimate table with totals and key assumptions.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
