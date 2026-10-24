---
name: property-based-testing
description: "Use property-based testing (fast-check, Hypothesis) to find edge cases automatically. Use for parsers, algorithms, serializers and financial calculations."
---
# Property Based Testing

> Legion skill · category **Testing**

## When to use
Use property-based testing (fast-check, Hypothesis) to find edge cases automatically. Use for parsers, algorithms, serializers and financial calculations.

## Procedure
1. Identify properties that always hold (round-trip, invariants, idempotence).
2. Write generators for valid inputs.
3. Run and shrink failures to minimal cases.
4. Turn found failures into fixed regression tests.
5. Keep run counts reasonable for CI.

## Quality checklist
- [ ] Properties meaningful
- [ ] shrunk failures saved as tests

## Output
Property tests and any bugs found.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
