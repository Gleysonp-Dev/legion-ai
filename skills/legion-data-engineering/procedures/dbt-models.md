# dbt Models

> Legion procedure `dbt-models` · pack **Data Engineering** (`legion-data-engineering`)

## When to use
Build dbt models (staging, intermediate, marts) with tests, docs and incremental strategies. Use for analytics transformations.

## Procedure
1. Create staging models that clean and rename source data.
2. Build intermediate models for business logic.
3. Build marts per business area.
4. Add tests and documentation.
5. Use incremental models for large tables.

## Quality checklist
- [ ] Tests pass
- [ ] docs generated

## Output
dbt project changes.
