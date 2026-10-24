---
name: profile-app
description: "Profile an application (CPU, memory, I/O) with the right tools for the language to find real bottlenecks. Use before optimising anything."
---
# Profile App

> Legion skill · category **Performance**

## When to use
Profile an application (CPU, memory, I/O) with the right tools for the language to find real bottlenecks. Use before optimising anything.

## Procedure
1. Reproduce the slow scenario with realistic data.
2. Choose a profiler (Chrome DevTools, py-spy, pprof, clinic, perf).
3. Capture a profile and read the flame graph.
4. Identify the top 3 hot spots with their share of time.
5. Recommend targeted fixes.

## Quality checklist
- [ ] Profile captured on realistic workload
- [ ] hot spots quantified

## Output
Profiling summary with flame-graph findings.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
