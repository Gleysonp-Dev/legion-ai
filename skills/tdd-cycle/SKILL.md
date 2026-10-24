---
name: tdd-cycle
description: "Develop a feature test-first with red-green-refactor cycles. Use when building logic-heavy code where correctness matters."
---
# TDD Cycle

> Legion skill · category **Testing**

## When to use
Develop a feature test-first with red-green-refactor cycles. Use when building logic-heavy code where correctness matters.

## Procedure
1. Write the smallest failing test for the next behaviour.
2. Write the minimum code to make it pass.
3. Refactor while keeping tests green.
4. Repeat until the feature is complete.
5. Review the test list for missing cases.

## Quality checklist
- [ ] Each test seen failing first
- [ ] refactor kept tests green

## Output
Feature code and its tests.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
