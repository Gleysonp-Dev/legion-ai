---
name: dead-code-removal
description: "Find and remove unused code, files, dependencies, feature flags and exports. Use to shrink and simplify a codebase."
---
# Dead Code Removal

> Legion skill · category **Code Quality & Refactoring**

## When to use
Find and remove unused code, files, dependencies, feature flags and exports. Use to shrink and simplify a codebase.

## Procedure
1. Use tools (ts-prune, knip, vulture, depcheck) to find candidates.
2. Verify each candidate is truly unused (dynamic imports, reflection).
3. Remove in small commits.
4. Remove stale feature flags and their dead branches.
5. Run tests and build.

## Quality checklist
- [ ] Each removal verified
- [ ] build and tests green

## Output
Removal list and diff.

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
