---
name: type-safety
description: "Add or strengthen static types (TypeScript strict, mypy, Pydantic) and remove any/unsafe casts. Use to catch bugs at compile time."
---
# Type Safety

> Legion skill · category **Code Quality & Refactoring**

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

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
