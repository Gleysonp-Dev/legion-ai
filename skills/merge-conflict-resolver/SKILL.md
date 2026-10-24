---
name: merge-conflict-resolver
description: "Resolve git merge or rebase conflicts by understanding both sides' intent. Use when a merge is stuck."
---
# Merge Conflict Resolver

> Legion skill · category **Git & Collaboration**

## When to use
Resolve git merge or rebase conflicts by understanding both sides' intent. Use when a merge is stuck.

## Procedure
1. List conflicted files.
2. Read both versions and the base.
3. Combine intentions, not just text.
4. Run tests after resolving.
5. Explain decisions in the commit.

## Quality checklist
- [ ] Tests pass
- [ ] both intentions preserved

## Output
Resolved files and explanation.

## Works well with
Legion agents: `release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
