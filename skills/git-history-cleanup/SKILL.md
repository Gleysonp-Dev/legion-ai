---
name: git-history-cleanup
description: "Clean up git history safely: squash, reorder, split commits, or remove large files and secrets with filter-repo. Use before merging or after mistakes."
---
# Git History Cleanup

> Legion skill · category **Git & Collaboration**

## When to use
Clean up git history safely: squash, reorder, split commits, or remove large files and secrets with filter-repo. Use before merging or after mistakes.

## Procedure
1. Back up the branch first.
2. Use non-interactive rebase strategies or filter-repo as appropriate.
3. Never rewrite shared history without coordination.
4. Rotate any secret that was committed.
5. Force-push with lease only when agreed.

## Quality checklist
- [ ] Backup made
- [ ] collaborators informed

## Output
Cleaned history and notes.

## Works well with
Legion agents: `release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
