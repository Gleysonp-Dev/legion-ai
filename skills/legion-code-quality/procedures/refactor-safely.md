# Refactor Safely

> Legion procedure `refactor-safely` · pack **Code Quality & Refactoring** (`legion-code-quality`)

## When to use
Refactor code in small verified steps without changing behaviour. Use when code is hard to read or change.

## Procedure
1. Make sure tests cover the behaviour; add characterisation tests if not.
2. Pick one refactoring at a time (extract, rename, move, inline).
3. Run tests after each step.
4. Commit in small steps.
5. Summarise structural changes.

## Quality checklist
- [ ] Behaviour unchanged
- [ ] tests green after each step

## Output
Refactored code and change summary.
