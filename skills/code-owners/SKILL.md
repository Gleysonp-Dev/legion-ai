---
name: code-owners
description: "Set up CODEOWNERS and review rules so the right people review changes. Use for multi-team repos."
---
# Code Owners

> Legion skill · category **Git & Collaboration**

## When to use
Set up CODEOWNERS and review rules so the right people review changes. Use for multi-team repos.

## Procedure
1. Map directories to owning teams.
2. Write CODEOWNERS.
3. Require code-owner reviews on protected branches.
4. Avoid single points of failure.
5. Review periodically.

## Quality checklist
- [ ] Every critical path has an owner

## Output
CODEOWNERS file.

## Works well with
Legion agents: `release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
