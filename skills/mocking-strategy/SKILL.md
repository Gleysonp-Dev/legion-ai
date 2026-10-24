---
name: mocking-strategy
description: "Decide what to mock, stub or fake in tests and implement it cleanly (MSW, test doubles, in-memory fakes). Use when tests are brittle or slow because of dependencies."
---
# Mocking Strategy

> Legion skill · category **Testing**

## When to use
Decide what to mock, stub or fake in tests and implement it cleanly (MSW, test doubles, in-memory fakes). Use when tests are brittle or slow because of dependencies.

## Procedure
1. Identify external boundaries: HTTP, DB, queue, clock, randomness.
2. Prefer in-memory fakes or test containers over deep mocks.
3. Mock at the boundary, not internal functions.
4. Keep mock data realistic and shared via fixtures.
5. Add a few contract tests against the real dependency.

## Quality checklist
- [ ] No mocking of the unit under test
- [ ] fakes realistic

## Output
Mocking setup and refactored tests.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
