# Frontend Rendering

> Legion procedure `frontend-rendering` · pack **Performance** (`legion-performance`)

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
