# Dead Code Removal

> Legion procedure `dead-code-removal` · pack **Code Quality & Refactoring** (`legion-code-quality`)

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
