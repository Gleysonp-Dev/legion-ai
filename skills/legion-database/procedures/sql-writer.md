# SQL Writer

> Legion procedure `sql-writer` · pack **Databases & Data Modelling** (`legion-database`)

## When to use
Write correct, readable SQL for reporting and analysis: joins, CTEs, window functions and aggregations. Use when someone needs a query written or explained.

## Procedure
1. Clarify the question, grain and filters.
2. Build the query in CTE steps that can be checked individually.
3. Use window functions for rankings, running totals and period comparisons.
4. Check joins for row multiplication.
5. Validate results against a known number.

## Quality checklist
- [ ] Grain correct
- [ ] no duplicate rows from joins
- [ ] result sanity-checked

## Output
SQL query with explanation.
