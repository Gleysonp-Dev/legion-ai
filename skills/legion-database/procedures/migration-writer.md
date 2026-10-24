# Migration Writer

> Legion procedure `migration-writer` · pack **Databases & Data Modelling** (`legion-database`)

## When to use
Write safe database migrations, including zero-downtime changes (expand/contract) and rollback scripts. Use for any schema change in production.

## Procedure
1. Classify the change: additive, destructive or data migration.
2. For risky changes, use expand → backfill → switch → contract.
3. Avoid long locks: add indexes concurrently, batch backfills.
4. Write down and test the rollback.
5. Run on a copy of production-sized data if possible.

## Quality checklist
- [ ] No long table locks
- [ ] rollback tested
- [ ] backfill batched

## Output
Migration files with rollback and run notes.
