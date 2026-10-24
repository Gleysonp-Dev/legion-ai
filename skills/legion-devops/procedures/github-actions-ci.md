# Github Actions CI

> Legion procedure `github-actions-ci` · pack **DevOps & CI/CD** (`legion-devops`)

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
