---
name: framework-upgrade
description: "Upgrade a framework or language version (React, Next, Django, Node, Python) following official migration guides. Use for major version upgrades."
---
# Framework Upgrade

> Legion skill · category **Code Quality & Refactoring**

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

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
