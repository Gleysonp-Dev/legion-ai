# Query Optimization

> Legion procedure `query-optimization` · pack **Databases & Data Modelling** (`legion-database`)

## When to use
Speed up slow SQL queries using EXPLAIN plans, indexes, query rewrites and statistics. Use when a query or page is slow because of the database.

## Procedure
1. Capture the exact slow query and its parameters.
2. Run EXPLAIN (ANALYZE) and identify scans, sorts and row estimates.
3. Add or adjust indexes; rewrite subqueries or OR conditions.
4. Remove N+1 patterns in application code.
5. Measure before and after.

## Quality checklist
- [ ] Plan improved and verified
- [ ] no regression on writes

## Output
Optimised query/indexes with timing evidence.
