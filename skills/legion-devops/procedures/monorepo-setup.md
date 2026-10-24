# Monorepo Setup

> Legion procedure `monorepo-setup` · pack **DevOps & CI/CD** (`legion-devops`)

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
