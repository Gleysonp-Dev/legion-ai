---
name: startup-time
description: "Reduce startup time of apps, CLIs, servers or mobile apps through lazy loading and deferring work. Use when launch is slow."
---
# Startup Time

> Legion skill · category **Performance**

## When to use
Reduce startup time of apps, CLIs, servers or mobile apps through lazy loading and deferring work. Use when launch is slow.

## Procedure
1. Measure cold and warm start time.
2. Trace what runs at startup.
3. Defer non-critical initialisation.
4. Lazy-load modules and reduce dependencies.
5. Re-measure.

## Quality checklist
- [ ] Startup time measured before and after

## Output
Startup optimisation report.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
