---
name: postgres-tuning
description: "Tune PostgreSQL: configuration, connection pooling, vacuum, indexes, partitioning and monitoring. Use when Postgres is slow or overloaded."
---
# Postgres Tuning

> Legion skill · category **Databases & Data Modelling**

## When to use
Tune PostgreSQL: configuration, connection pooling, vacuum, indexes, partitioning and monitoring. Use when Postgres is slow or overloaded.

## Procedure
1. Check connection counts and add pooling (PgBouncer) if needed.
2. Review memory settings against available RAM.
3. Inspect bloat and autovacuum behaviour.
4. Use pg_stat_statements to find top queries.
5. Consider partitioning for very large time-series tables.

## Quality checklist
- [ ] Changes measured
- [ ] pooling in place
- [ ] top queries reviewed

## Output
Tuning report with applied settings.

## Works well with
Legion agents: `database-architect`, `backend-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
