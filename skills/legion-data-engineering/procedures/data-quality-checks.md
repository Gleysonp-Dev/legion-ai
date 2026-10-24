# Data Quality Checks

> Legion procedure `data-quality-checks` · pack **Data Engineering** (`legion-data-engineering`)

## When to use
Add data quality tests (Great Expectations, dbt tests, Soda) for nulls, uniqueness, ranges and freshness. Use when data cannot be trusted.

## Procedure
1. Identify critical tables and columns.
2. Define expectations per column.
3. Add freshness and volume checks.
4. Fail or alert on violations.
5. Report quality over time.

## Quality checklist
- [ ] Critical columns covered
- [ ] alerts wired

## Output
Data quality test suite.
