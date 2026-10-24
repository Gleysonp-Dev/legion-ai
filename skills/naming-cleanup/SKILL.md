---
name: naming-cleanup
description: "Improve naming of variables, functions, files and modules for clarity and consistency. Use when code is hard to understand."
---
# Naming Cleanup

> Legion skill · category **Code Quality & Refactoring**

## When to use
Improve naming of variables, functions, files and modules for clarity and consistency. Use when code is hard to understand.

## Procedure
1. List confusing or inconsistent names.
2. Propose names that reveal intent and domain terms.
3. Apply consistent conventions (case, prefixes, plurals).
4. Rename with IDE/codemod tools to catch all references.
5. Run tests.

## Quality checklist
- [ ] Names reflect domain language
- [ ] all references updated

## Output
Rename map and changes.

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
