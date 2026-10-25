---
name: legion-devops
description: "DevOps & CI/CD pack with 10 ready procedures: github actions ci, dockerize app, kubernetes deploy, deploy pipeline, preview environments, infrastructure as code, dev environment setup, release automation, pre commit hooks, monorepo setup. Use for any devops & ci/cd task."
---
# DevOps & CI/CD — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `github-actions-ci` | Create a GitHub Actions CI pipeline with lint, test, build, caching and matrix builds. Use for any repo without CI. |
| `dockerize-app` | Containerise an application with a small, secure multi-stage Dockerfile and docker-compose for local development. Use to run an app anywhere. |
| `kubernetes-deploy` | Deploy to Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, probes and resource limits (or Helm). Use for k8s deployments. |
| `deploy-pipeline` | Build a continuous deployment pipeline with environments, approvals, migrations and rollback. Use to automate releases. |
| `preview-environments` | Set up per-pull-request preview deployments (Vercel, Netlify, Render, Fly, k8s namespaces). Use to review changes live before merge. |
| `infrastructure-as-code` | Write Terraform, Pulumi or CDK code for infrastructure with modules, state management and plans. Use to stop clicking in cloud consoles. |
| `dev-environment-setup` | Create a one-command developer setup (Makefile, scripts, devcontainer, mise/asdf) that works on Windows, Mac and Linux. Use when onboarding is slow. |
| `release-automation` | Automate versioning, changelogs and releases (semantic-release, changesets, release-please). Use to stop manual release chores. |
| `pre-commit-hooks` | Set up pre-commit hooks for formatting, linting, tests and secret scanning (husky, lefthook, pre-commit). Use to catch problems before they reach CI. |
| `monorepo-setup` | Organise a monorepo with workspaces, shared packages, task caching (Turborepo, Nx, pnpm) and CI filtering. Use when multiple apps share code. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
