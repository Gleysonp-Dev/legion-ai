---
name: duplication-removal
description: "Find duplicated logic and consolidate it into shared, well-named abstractions without over-engineering. Use when the same fix must be made in many places."
---
# Duplication Removal

> Legion skill · category **Code Quality & Refactoring**

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

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
