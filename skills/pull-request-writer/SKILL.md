---
name: pull-request-writer
description: "Write a pull request description with summary, changes, testing evidence, screenshots and risks. Use when opening a PR."
---
# Pull Request Writer

> Legion skill · category **Git & Collaboration**

## When to use
Write a pull request description with summary, changes, testing evidence, screenshots and risks. Use when opening a PR.

## Procedure
1. Summarise the change and its motivation.
2. List key changes by area.
3. Describe how it was tested.
4. Note risks, migrations and rollout steps.
5. Link issues.

## Quality checklist
- [ ] Testing evidence included
- [ ] risks noted

## Output
PR description.

## Works well with
Legion agents: `release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
