# Database Performance

> Legion procedure `database-performance` · pack **Performance** (`legion-performance`)

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
