---
name: etl-pipeline
description: "Build an ETL/ELT pipeline from sources to a warehouse with idempotent loads, scheduling and quality checks. Use to centralise data."
---
# ETL Pipeline

> Legion skill · category **Data Engineering**

## When to use
Build an ETL/ELT pipeline from sources to a warehouse with idempotent loads, scheduling and quality checks. Use to centralise data.

## Procedure
1. Document sources, schemas, volumes and freshness.
2. Extract incrementally with watermarks.
3. Load raw, then transform in the warehouse.
4. Make every run idempotent.
5. Add quality checks and failure alerts.

## Quality checklist
- [ ] Re-runs produce same result
- [ ] quality checks present

## Output
Pipeline code and schedule.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
