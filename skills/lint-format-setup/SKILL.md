---
name: lint-format-setup
description: "Set up linters and formatters (ESLint, Prettier, Ruff, Black, gofmt) with pre-commit hooks and CI. Use for consistent style."
---
# Lint Format Setup

> Legion skill · category **Code Quality & Refactoring**

## When to use
Set up linters and formatters (ESLint, Prettier, Ruff, Black, gofmt) with pre-commit hooks and CI. Use for consistent style.

## Procedure
1. Choose tools standard for the language.
2. Configure rules close to community defaults.
3. Format the whole codebase in one separate commit.
4. Add pre-commit hooks and a CI check.
5. Document how to run them.

## Quality checklist
- [ ] Formatting commit separate
- [ ] CI enforces

## Output
Config files and hook setup.

## Works well with
Legion agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
