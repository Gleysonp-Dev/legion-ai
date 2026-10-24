# Startup Time

> Legion procedure `startup-time` · pack **Performance** (`legion-performance`)

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
