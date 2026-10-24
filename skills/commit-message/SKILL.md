---
name: commit-message
description: "Write clear conventional commit messages from staged changes. Use before committing."
---
# Commit Message

> Legion skill · category **Git & Collaboration**

## When to use
Write clear conventional commit messages from staged changes. Use before committing.

## Procedure
1. Review the staged diff.
2. Choose type (feat, fix, refactor, docs, test, chore) and scope.
3. Write an imperative summary under 72 characters.
4. Explain why in the body if not obvious.
5. Reference issues.

## Quality checklist
- [ ] Summary imperative and short
- [ ] type correct

## Output
Commit message.

## Works well with
Legion agents: `release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
