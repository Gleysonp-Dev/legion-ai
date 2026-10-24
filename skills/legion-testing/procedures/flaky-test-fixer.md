# Flaky Test Fixer

> Legion procedure `flaky-test-fixer` · pack **Testing** (`legion-testing`)

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
