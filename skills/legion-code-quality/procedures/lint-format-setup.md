# Lint Format Setup

> Legion procedure `lint-format-setup` · pack **Code Quality & Refactoring** (`legion-code-quality`)

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
