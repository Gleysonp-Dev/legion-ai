---
name: legion-database
description: "Databases & Data Modelling pack with 10 ready procedures: schema design, migration writer, query optimization, sql writer, nosql modeling, orm usage, backup restore, seed data, postgres tuning, data integrity audit. Use for any databases & data modelling task."
---
# Databases & Data Modelling — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `schema-design` | Design a relational schema with tables, keys, constraints, relationships and indexes from requirements. Use when starting a data model. |
| `migration-writer` | Write safe database migrations, including zero-downtime changes (expand/contract) and rollback scripts. Use for any schema change in production. |
| `query-optimization` | Speed up slow SQL queries using EXPLAIN plans, indexes, query rewrites and statistics. Use when a query or page is slow because of the database. |
| `sql-writer` | Write correct, readable SQL for reporting and analysis: joins, CTEs, window functions and aggregations. Use when someone needs a query written or explained. |
| `nosql-modeling` | Model data for MongoDB, DynamoDB, Firestore or Redis based on access patterns. Use when using a document or key-value database. |
| `orm-usage` | Use ORMs (Prisma, Drizzle, SQLAlchemy, TypeORM, Django ORM) efficiently: relations, eager loading, transactions and raw SQL escapes. Use when ORM code is slow or confusing. |
| `backup-restore` | Set up database backups, point-in-time recovery and tested restore procedures. Use for any production database. |
| `seed-data` | Create realistic seed and test data with factories, fixtures and anonymised production samples. Use for local development, demos and tests. |
| `postgres-tuning` | Tune PostgreSQL: configuration, connection pooling, vacuum, indexes, partitioning and monitoring. Use when Postgres is slow or overloaded. |
| `data-integrity-audit` | Audit a database for integrity problems: orphans, duplicates, invalid values and missing constraints. Use before migrations or when data looks wrong. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`database-architect`, `backend-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
