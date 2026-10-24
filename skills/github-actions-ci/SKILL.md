---
name: github-actions-ci
description: "Create a GitHub Actions CI pipeline with lint, test, build, caching and matrix builds. Use for any repo without CI."
---
# Github Actions CI

> Legion skill · category **DevOps & CI/CD**

## When to use
Create a GitHub Actions CI pipeline with lint, test, build, caching and matrix builds. Use for any repo without CI.

## Procedure
1. Detect language, package manager and test commands.
2. Create workflow on pull_request and push to main.
3. Add dependency caching and a version matrix if needed.
4. Pin actions and set minimal permissions.
5. Add a status badge to the README.

## Quality checklist
- [ ] Pipeline green
- [ ] permissions minimal
- [ ] caching works

## Output
.github/workflows/ci.yml.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
