---
name: flaky-test-fixer
description: "Diagnose and fix flaky tests caused by timing, shared state, order dependence or network. Use when CI fails randomly."
---
# Flaky Test Fixer

> Legion skill · category **Testing**

## When to use
Diagnose and fix flaky tests caused by timing, shared state, order dependence or network. Use when CI fails randomly.

## Procedure
1. Rerun the test many times to confirm flakiness and frequency.
2. Check for timing assumptions, shared state, test order and real network/time.
3. Replace sleeps with explicit waits or fake timers.
4. Isolate state per test.
5. Verify stability with repeated runs.

## Quality checklist
- [ ] Root cause identified
- [ ] 50+ consecutive passes

## Output
Fix with explanation of the cause.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
