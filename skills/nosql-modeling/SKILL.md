---
name: nosql-modeling
description: "Model data for MongoDB, DynamoDB, Firestore or Redis based on access patterns. Use when using a document or key-value database."
---
# NoSQL Modeling

> Legion skill · category **Databases & Data Modelling**

## When to use
Model data for MongoDB, DynamoDB, Firestore or Redis based on access patterns. Use when using a document or key-value database.

## Procedure
1. List access patterns first.
2. Design documents or keys to serve the main patterns in one read.
3. Choose embedding vs referencing deliberately.
4. Plan secondary indexes and their cost.
5. Handle consistency and transactions where required.

## Quality checklist
- [ ] Every access pattern served
- [ ] hot partitions avoided

## Output
Data model with access-pattern table.

## Works well with
Legion agents: `database-architect`, `backend-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
