# ORM Usage

> Legion procedure `orm-usage` · pack **Databases & Data Modelling** (`legion-database`)

## When to use
Use ORMs (Prisma, Drizzle, SQLAlchemy, TypeORM, Django ORM) efficiently: relations, eager loading, transactions and raw SQL escapes. Use when ORM code is slow or confusing.

## Procedure
1. Review generated SQL for hot paths.
2. Fix N+1 with eager loading or batched queries.
3. Wrap multi-step writes in transactions.
4. Select only needed columns.
5. Drop to raw SQL for complex reports.

## Quality checklist
- [ ] Generated SQL inspected
- [ ] transactions used for multi-writes

## Output
Improved ORM code and SQL logs.
