# Regression Suite

> Legion procedure `regression-suite` · pack **Testing** (`legion-testing`)

## When to use
Build a regression test suite from past bugs and critical behaviours. Use after recurring bugs or before refactors.

## Procedure
1. Collect past bugs and incidents.
2. Write a test that reproduces each one.
3. Add tests for critical business rules.
4. Tag the suite so it runs on every PR.
5. Keep it fast.

## Quality checklist
- [ ] Every historical bug has a test
- [ ] suite runs in CI

## Output
Regression tests linked to bug references.
