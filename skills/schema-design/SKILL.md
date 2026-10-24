---
name: schema-design
description: "Design a relational schema with tables, keys, constraints, relationships and indexes from requirements. Use when starting a data model."
---
# Schema Design

> Legion skill · category **Databases & Data Modelling**

## When to use
Design a relational schema with tables, keys, constraints, relationships and indexes from requirements. Use when starting a data model.

## Procedure
1. List entities, attributes and relationships from use cases.
2. Normalise to 3NF; denormalise only with a measured reason.
3. Add primary keys, foreign keys, unique and check constraints.
4. Add indexes for known query patterns.
5. Draw an ER diagram in Mermaid.

## Quality checklist
- [ ] Constraints enforce business rules
- [ ] indexes match queries
- [ ] ER diagram included

## Output
SQL DDL and ER diagram.

## Works well with
Legion agents: `database-architect`, `backend-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
