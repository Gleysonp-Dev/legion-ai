# Bundle Size

> Legion procedure `bundle-size` · pack **Performance** (`legion-performance`)

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
