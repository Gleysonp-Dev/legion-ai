---
name: legion-code-quality
description: "Code Quality & Refactoring playbook with 10 ready procedures: code review, refactor safely, dead code removal, naming cleanup, lint format setup, type safety, complexity reduction, duplication removal, framework upgrade, coding standards. Use for any code quality & refactoring task."
---
# Code Quality & Refactoring — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `code-review` | Review a diff or pull request for correctness, security, performance, readability and tests with prioritised comments. Use before merging. |
| `refactor-safely` | Refactor code in small verified steps without changing behaviour. Use when code is hard to read or change. |
| `dead-code-removal` | Find and remove unused code, files, dependencies, feature flags and exports. Use to shrink and simplify a codebase. |
| `naming-cleanup` | Improve naming of variables, functions, files and modules for clarity and consistency. Use when code is hard to understand. |
| `lint-format-setup` | Set up linters and formatters (ESLint, Prettier, Ruff, Black, gofmt) with pre-commit hooks and CI. Use for consistent style. |
| `type-safety` | Add or strengthen static types (TypeScript strict, mypy, Pydantic) and remove any/unsafe casts. Use to catch bugs at compile time. |
| `complexity-reduction` | Reduce cyclomatic complexity: simplify long functions, deep nesting and big conditionals. Use when functions are hard to follow. |
| `duplication-removal` | Find duplicated logic and consolidate it into shared, well-named abstractions without over-engineering. Use when the same fix must be made in many places. |
| `framework-upgrade` | Upgrade a framework or language version (React, Next, Django, Node, Python) following official migration guides. Use for major version upgrades. |
| `coding-standards` | Write a coding standards guide for a project from its existing conventions. Use to onboard developers or align a team. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`code-reviewer`, `refactoring-expert`, `legacy-modernizer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
