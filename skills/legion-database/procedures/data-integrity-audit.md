# Data Integrity Audit

> Legion procedure `data-integrity-audit` · pack **Databases & Data Modelling** (`legion-database`)

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
