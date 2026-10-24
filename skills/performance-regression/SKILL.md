---
name: performance-regression
description: "Investigate why something became slower after a change, using profiling and comparison. Use after deploys that degrade performance."
---
# Performance Regression

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Investigate why something became slower after a change, using profiling and comparison. Use after deploys that degrade performance.

## Procedure
1. Quantify the regression with before/after metrics.
2. Narrow down to the change (deploy diff, bisect).
3. Profile both versions on the same workload.
4. Identify and fix the cause.
5. Add a performance check to prevent recurrence.

## Quality checklist
- [ ] Regression quantified
- [ ] cause proven by profile

## Output
Cause, fix and guard.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
