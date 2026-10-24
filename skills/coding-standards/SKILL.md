---
name: coding-standards
description: "Write a coding standards guide for a project from its existing conventions. Use to onboard developers or align a team."
---
# Coding Standards

> Legion skill · category **Code Quality & Refactoring**

## When to use
Write a coding standards guide for a project from its existing conventions. Use to onboard developers or align a team.

## Procedure
1. Extract conventions from the codebase (structure, naming, error handling, tests).
2. Write short rules with good/bad examples.
3. Note tooling that enforces each rule.
4. Keep it to what matters; skip what the formatter handles.
5. Publish as CONTRIBUTING or docs/standards.md.

## Quality checklist
- [ ] Rules match the existing codebase
- [ ] examples included

## Output
A standards document.

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
