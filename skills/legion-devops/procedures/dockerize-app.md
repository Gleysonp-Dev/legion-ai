# Dockerize App

> Legion procedure `dockerize-app` · pack **DevOps & CI/CD** (`legion-devops`)

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
