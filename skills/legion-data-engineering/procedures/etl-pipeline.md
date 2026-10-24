# ETL Pipeline

> Legion procedure `etl-pipeline` · pack **Data Engineering** (`legion-data-engineering`)

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
