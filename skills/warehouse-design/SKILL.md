---
name: warehouse-design
description: "Design a data warehouse (BigQuery, Snowflake, Redshift, DuckDB) with dimensional models, partitioning and access control. Use when setting up analytics infrastructure."
---
# Warehouse Design

> Legion skill · category **Data Engineering**

## When to use
Design a data warehouse (BigQuery, Snowflake, Redshift, DuckDB) with dimensional models, partitioning and access control. Use when setting up analytics infrastructure.

## Procedure
1. Choose warehouse by scale and budget.
2. Design facts and dimensions (star schema).
3. Partition and cluster large tables.
4. Define access roles.
5. Plan cost controls.

## Quality checklist
- [ ] Partitioning matches queries
- [ ] cost controls in place

## Output
Warehouse design.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
