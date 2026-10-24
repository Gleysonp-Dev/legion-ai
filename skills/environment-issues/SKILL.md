---
name: environment-issues
description: "Fix \"works on my machine\" problems: versions, env vars, paths, OS differences and dependency mismatches. Use when code behaves differently across machines or CI."
---
# Environment Issues

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Fix "works on my machine" problems: versions, env vars, paths, OS differences and dependency mismatches. Use when code behaves differently across machines or CI.

## Procedure
1. Compare runtime versions, OS and architecture.
2. Compare environment variables and config files.
3. Check lockfiles and installed dependency versions.
4. Check path separators, case sensitivity and line endings.
5. Pin versions and document the setup.

## Quality checklist
- [ ] Difference identified
- [ ] setup reproducible

## Output
Diagnosis and the pinning/config fix.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
