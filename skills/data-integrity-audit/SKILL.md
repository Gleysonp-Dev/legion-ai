---
name: data-integrity-audit
description: "Audit a database for integrity problems: orphans, duplicates, invalid values and missing constraints. Use before migrations or when data looks wrong."
---
# Data Integrity Audit

> Legion skill · category **Databases & Data Modelling**

## When to use
Audit a database for integrity problems: orphans, duplicates, invalid values and missing constraints. Use before migrations or when data looks wrong.

## Procedure
1. Query for orphaned foreign keys and duplicates on natural keys.
2. Check value ranges, formats and nulls in required fields.
3. Compare counts against source systems.
4. Propose constraints to prevent recurrence.
5. Write cleanup scripts with dry-run mode.

## Quality checklist
- [ ] Findings quantified
- [ ] cleanup reversible
- [ ] constraints proposed

## Output
Integrity report and cleanup scripts.

## Works well with
Legion agents: `database-architect`, `backend-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
