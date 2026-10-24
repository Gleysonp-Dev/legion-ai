# Property Based Testing

> Legion procedure `property-based-testing` · pack **Testing** (`legion-testing`)

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
