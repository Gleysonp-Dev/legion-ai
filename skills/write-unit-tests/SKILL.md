---
name: write-unit-tests
description: "Write unit tests for a function, class or module covering behaviour, edge cases and errors. Use when code lacks tests."
---
# Write Unit Tests

> Legion skill · category **Testing**

## When to use
Write unit tests for a function, class or module covering behaviour, edge cases and errors. Use when code lacks tests.

## Procedure
1. Read the code and list inputs, outputs, side effects and error paths.
2. Write one test per behaviour with a descriptive name.
3. Cover edge cases: empty, null, boundaries, large inputs, unicode.
4. Mock only external boundaries (network, time, filesystem).
5. Run the tests and confirm they fail when the code is broken.

## Quality checklist
- [ ] Tests fail on a deliberately broken implementation
- [ ] no flaky time/network use

## Output
Test file with all tests passing.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
