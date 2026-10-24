# Pre Commit Hooks

> Legion procedure `pre-commit-hooks` · pack **DevOps & CI/CD** (`legion-devops`)

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
