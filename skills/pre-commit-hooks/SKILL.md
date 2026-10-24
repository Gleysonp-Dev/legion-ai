---
name: pre-commit-hooks
description: "Set up pre-commit hooks for formatting, linting, tests and secret scanning (husky, lefthook, pre-commit). Use to catch problems before they reach CI."
---
# Pre Commit Hooks

> Legion skill · category **DevOps & CI/CD**

## When to use
Set up pre-commit hooks for formatting, linting, tests and secret scanning (husky, lefthook, pre-commit). Use to catch problems before they reach CI.

## Procedure
1. Choose the hook manager for the ecosystem.
2. Run fast checks on staged files only.
3. Add secret scanning.
4. Keep hooks under a few seconds.
5. Document how to bypass in emergencies.

## Quality checklist
- [ ] Hooks fast
- [ ] run on staged files

## Output
Hook configuration.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
