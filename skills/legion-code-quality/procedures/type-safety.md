# Type Safety

> Legion procedure `type-safety` · pack **Code Quality & Refactoring** (`legion-code-quality`)

## When to use
Add or strengthen static types (TypeScript strict, mypy, Pydantic) and remove any/unsafe casts. Use to catch bugs at compile time.

## Procedure
1. Enable stricter compiler settings incrementally.
2. Type public interfaces and data boundaries first.
3. Replace any/unknown casts with real types or validation.
4. Validate external data at runtime (zod, Pydantic).
5. Fix errors in batches and keep the build green.

## Quality checklist
- [ ] Strictness increased
- [ ] boundaries validated at runtime

## Output
Typing changes and new compiler settings.
