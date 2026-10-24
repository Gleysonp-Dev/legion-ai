---
name: memory-leak-hunt
description: "Find and fix memory leaks using heap snapshots, profilers and growth analysis. Use when memory grows until crashes."
---
# Memory Leak Hunt

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Find and fix memory leaks using heap snapshots, profilers and growth analysis. Use when memory grows until crashes.

## Procedure
1. Confirm the leak with memory metrics over time.
2. Take heap snapshots before and after load and diff them.
3. Identify retained objects and their retainers.
4. Fix common causes: listeners, caches without limits, closures, globals.
5. Verify memory stabilises under the same load.

## Quality checklist
- [ ] Leak reproduced
- [ ] memory flat after fix

## Output
Leak cause and fix with memory graphs or numbers.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
