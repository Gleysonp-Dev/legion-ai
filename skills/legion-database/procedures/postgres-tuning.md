# Postgres Tuning

> Legion procedure `postgres-tuning` · pack **Databases & Data Modelling** (`legion-database`)

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
