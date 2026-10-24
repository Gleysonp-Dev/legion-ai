---
name: refactor-safely
description: "Refactor code in small verified steps without changing behaviour. Use when code is hard to read or change."
---
# Refactor Safely

> Legion skill · category **Code Quality & Refactoring**

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

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
