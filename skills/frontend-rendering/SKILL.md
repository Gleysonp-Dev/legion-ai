---
name: frontend-rendering
description: "Fix slow rendering in web apps: unnecessary re-renders, large lists, layout thrashing and heavy animations. Use when the UI feels janky."
---
# Frontend Rendering

> Legion skill · category **Performance**

## When to use
Fix slow rendering in web apps: unnecessary re-renders, large lists, layout thrashing and heavy animations. Use when the UI feels janky.

## Procedure
1. Profile with the browser and framework devtools.
2. Memoise expensive components and calculations where profiling shows benefit.
3. Virtualise long lists.
4. Avoid layout thrashing; use transform/opacity for animation.
5. Re-profile and compare.

## Quality checklist
- [ ] Frame times improved with profile evidence

## Output
Rendering fixes and profiling results.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
