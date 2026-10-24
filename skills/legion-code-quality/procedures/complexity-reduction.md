# Complexity Reduction

> Legion procedure `complexity-reduction` · pack **Code Quality & Refactoring** (`legion-code-quality`)

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
