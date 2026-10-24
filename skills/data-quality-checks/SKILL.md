---
name: data-quality-checks
description: "Add data quality tests (Great Expectations, dbt tests, Soda) for nulls, uniqueness, ranges and freshness. Use when data cannot be trusted."
---
# Data Quality Checks

> Legion skill · category **Data Engineering**

## When to use
Add data quality tests (Great Expectations, dbt tests, Soda) for nulls, uniqueness, ranges and freshness. Use when data cannot be trusted.

## Procedure
1. Identify critical tables and columns.
2. Define expectations per column.
3. Add freshness and volume checks.
4. Fail or alert on violations.
5. Report quality over time.

## Quality checklist
- [ ] Critical columns covered
- [ ] alerts wired

## Output
Data quality test suite.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
