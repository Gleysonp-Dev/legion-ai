---
name: changelog-writer
description: "Write a user-facing changelog from commits and PRs following Keep a Changelog. Use for releases."
---
# Changelog Writer

> Legion skill · category **Git & Collaboration**

## When to use
Write a user-facing changelog from commits and PRs following Keep a Changelog. Use for releases.

## Procedure
1. Collect merged changes since last release.
2. Group into Added, Changed, Fixed, Removed, Security.
3. Write user-facing descriptions.
4. Highlight breaking changes.
5. Link PRs.

## Quality checklist
- [ ] Breaking changes highlighted
- [ ] user language

## Output
CHANGELOG entry.

## Works well with
Legion agents: `release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
