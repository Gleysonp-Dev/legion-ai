# Framework Upgrade

> Legion procedure `framework-upgrade` · pack **Code Quality & Refactoring** (`legion-code-quality`)

## When to use
Upgrade a framework or language version (React, Next, Django, Node, Python) following official migration guides. Use for major version upgrades.

## Procedure
1. Read official changelogs and migration guides.
2. Upgrade dependencies in a branch, one major at a time.
3. Run codemods where available.
4. Fix breaking changes and deprecations.
5. Run full tests and a manual smoke test.

## Quality checklist
- [ ] Migration guide followed
- [ ] tests and smoke test pass

## Output
Upgrade diff and notes.
