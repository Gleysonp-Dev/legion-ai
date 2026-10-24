---
name: code-review
description: "Review a diff or pull request for correctness, security, performance, readability and tests with prioritised comments. Use before merging."
---
# Code Review

> Legion skill · category **Code Quality & Refactoring**

## When to use
Review a diff or pull request for correctness, security, performance, readability and tests with prioritised comments. Use before merging.

## Procedure
1. Read the PR description and understand intent.
2. Check correctness and edge cases first.
3. Check tests, error handling and security.
4. Then readability, naming and consistency.
5. Label comments as blocker, should-fix or nit with suggested fixes.

## Quality checklist
- [ ] Comments reference file:line
- [ ] verdict stated

## Output
A review with verdict and comments.

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
