# Duplication Removal

> Legion procedure `duplication-removal` · pack **Code Quality & Refactoring** (`legion-code-quality`)

## When to use
Find duplicated logic and consolidate it into shared, well-named abstractions without over-engineering. Use when the same fix must be made in many places.

## Procedure
1. Detect duplication with tools (jscpd) and review.
2. Confirm duplicates represent the same concept.
3. Extract a shared function or module.
4. Replace call sites one by one.
5. Avoid premature abstraction for coincidental similarity.

## Quality checklist
- [ ] Shared code represents one concept
- [ ] tests green

## Output
Consolidated code and list of call sites changed.
