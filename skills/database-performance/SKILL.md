---
name: database-performance
description: "Fix database-driven slowness: N+1 queries, missing indexes, connection pool limits and lock contention. Use when the database is the bottleneck."
---
# Database Performance

> Legion skill · category **Performance**

## When to use
Fix database-driven slowness: N+1 queries, missing indexes, connection pool limits and lock contention. Use when the database is the bottleneck.

## Procedure
1. Find top queries by total time.
2. Check for N+1 patterns in application logs.
3. Add indexes and rewrite queries.
4. Tune connection pool size.
5. Investigate locks and long transactions.

## Quality checklist
- [ ] Top queries improved
- [ ] pool sized correctly

## Output
Database performance changes with metrics.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
