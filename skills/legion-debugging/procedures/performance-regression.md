# Performance Regression

> Legion procedure `performance-regression` · pack **Debugging & Troubleshooting** (`legion-debugging`)

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
