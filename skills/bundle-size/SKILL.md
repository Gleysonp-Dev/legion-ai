---
name: bundle-size
description: "Reduce JavaScript bundle size with analysis, code splitting, tree shaking and dependency replacement. Use when apps load slowly."
---
# Bundle Size

> Legion skill · category **Performance**

## When to use
Reduce JavaScript bundle size with analysis, code splitting, tree shaking and dependency replacement. Use when apps load slowly.

## Procedure
1. Run a bundle analyser and list the biggest modules.
2. Lazy-load routes and heavy components.
3. Replace heavy dependencies with lighter ones.
4. Ensure tree shaking works (ESM, sideEffects).
5. Report size before and after (gzip/brotli).

## Quality checklist
- [ ] Size reduction measured
- [ ] no broken features

## Output
Bundle report and changes.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
