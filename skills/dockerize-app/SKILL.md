---
name: dockerize-app
description: "Containerise an application with a small, secure multi-stage Dockerfile and docker-compose for local development. Use to run an app anywhere."
---
# Dockerize App

> Legion skill · category **DevOps & CI/CD**

## When to use
Containerise an application with a small, secure multi-stage Dockerfile and docker-compose for local development. Use to run an app anywhere.

## Procedure
1. Choose a slim, pinned base image.
2. Use multi-stage build and copy only runtime artifacts.
3. Run as non-root with a health check.
4. Add .dockerignore and compose file with dependencies.
5. Build, run and measure image size.

## Quality checklist
- [ ] Non-root
- [ ] image small
- [ ] app runs via compose

## Output
Dockerfile, .dockerignore, docker-compose.yml.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
