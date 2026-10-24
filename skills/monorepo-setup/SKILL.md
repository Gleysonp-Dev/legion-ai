---
name: monorepo-setup
description: "Organise a monorepo with workspaces, shared packages, task caching (Turborepo, Nx, pnpm) and CI filtering. Use when multiple apps share code."
---
# Monorepo Setup

> Legion skill · category **DevOps & CI/CD**

## When to use
Organise a monorepo with workspaces, shared packages, task caching (Turborepo, Nx, pnpm) and CI filtering. Use when multiple apps share code.

## Procedure
1. Choose workspace tool and task runner.
2. Structure apps/ and packages/ with clear boundaries.
3. Configure task pipelines and caching.
4. Run CI only for affected packages.
5. Share configs (tsconfig, eslint).

## Quality checklist
- [ ] Affected-only CI
- [ ] caching works

## Output
Monorepo configuration.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
