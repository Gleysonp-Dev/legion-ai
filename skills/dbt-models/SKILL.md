---
name: dbt-models
description: "Build dbt models (staging, intermediate, marts) with tests, docs and incremental strategies. Use for analytics transformations."
---
# dbt Models

> Legion skill · category **Data Engineering**

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

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
