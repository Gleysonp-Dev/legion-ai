---
name: regression-suite
description: "Build a regression test suite from past bugs and critical behaviours. Use after recurring bugs or before refactors."
---
# Regression Suite

> Legion skill · category **Testing**

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

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
