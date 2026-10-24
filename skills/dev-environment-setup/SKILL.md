---
name: dev-environment-setup
description: "Create a one-command developer setup (Makefile, scripts, devcontainer, mise/asdf) that works on Windows, Mac and Linux. Use when onboarding is slow."
---
# Dev Environment Setup

> Legion skill · category **DevOps & CI/CD**

## When to use
Create a one-command developer setup (Makefile, scripts, devcontainer, mise/asdf) that works on Windows, Mac and Linux. Use when onboarding is slow.

## Procedure
1. List every tool and version needed.
2. Pin versions with a version manager or devcontainer.
3. Provide setup, run, test and reset commands.
4. Seed local data.
5. Document in the README.

## Quality checklist
- [ ] Fresh machine setup works with documented commands

## Output
Setup scripts and README section.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
