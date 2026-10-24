---
name: legion-git
description: "Git & Collaboration playbook with 10 ready procedures: commit message, pull request writer, branching strategy, merge conflict resolver, git history cleanup, changelog writer, repo setup, code owners, open source launch, github issues triage. Use for any git & collaboration task."
---
# Git & Collaboration — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `commit-message` | Write clear conventional commit messages from staged changes. Use before committing. |
| `pull-request-writer` | Write a pull request description with summary, changes, testing evidence, screenshots and risks. Use when opening a PR. |
| `branching-strategy` | Choose and document a branching strategy (trunk-based, GitHub flow, release branches) with protection rules. Use to organise team git workflow. |
| `merge-conflict-resolver` | Resolve git merge or rebase conflicts by understanding both sides' intent. Use when a merge is stuck. |
| `git-history-cleanup` | Clean up git history safely: squash, reorder, split commits, or remove large files and secrets with filter-repo. Use before merging or after mistakes. |
| `changelog-writer` | Write a user-facing changelog from commits and PRs following Keep a Changelog. Use for releases. |
| `repo-setup` | Set up a professional GitHub repository: README, licence, .gitignore, templates, CI, branch protection and topics. Use when creating or publishing a project. |
| `code-owners` | Set up CODEOWNERS and review rules so the right people review changes. Use for multi-team repos. |
| `open-source-launch` | Prepare a project for open-source release: licence, docs, contribution guide, code of conduct, issue labels and announcement. Use before publishing a project publicly. |
| `github-issues-triage` | Triage GitHub issues: label, deduplicate, prioritise, request info and close stale ones. Use for busy repositories. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`release-manager`, `code-reviewer`, `devops-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
