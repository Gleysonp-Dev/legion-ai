---
name: migration-writer
description: "Write safe database migrations, including zero-downtime changes (expand/contract) and rollback scripts. Use for any schema change in production."
---
# Migration Writer

> Legion skill · category **Databases & Data Modelling**

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

## Works well with
Legion agents: `database-architect`, `backend-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
