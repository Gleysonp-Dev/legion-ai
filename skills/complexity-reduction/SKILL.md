---
name: complexity-reduction
description: "Reduce cyclomatic complexity: simplify long functions, deep nesting and big conditionals. Use when functions are hard to follow."
---
# Complexity Reduction

> Legion skill · category **Code Quality & Refactoring**

## When to use
Reduce cyclomatic complexity: simplify long functions, deep nesting and big conditionals. Use when functions are hard to follow.

## Procedure
1. Measure complexity and find the worst functions.
2. Use guard clauses to flatten nesting.
3. Extract well-named helper functions.
4. Replace conditionals with polymorphism or lookup tables when clearer.
5. Keep behaviour identical with tests.

## Quality checklist
- [ ] Complexity metrics improved
- [ ] tests green

## Output
Simplified code with before/after metrics.

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
