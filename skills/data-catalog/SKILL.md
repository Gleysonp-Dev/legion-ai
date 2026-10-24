---
name: data-catalog
description: "Document datasets: data dictionary, owners, lineage, freshness and sensitivity classification. Use when people do not know what data exists."
---
# Data Catalog

> Legion skill · category **Data Engineering**

## When to use
Document datasets: data dictionary, owners, lineage, freshness and sensitivity classification. Use when people do not know what data exists.

## Procedure
1. Inventory tables and sources.
2. Write descriptions for tables and columns.
3. Assign owners and sensitivity levels.
4. Document lineage.
5. Publish searchable docs.

## Quality checklist
- [ ] Owners and sensitivity set for every table

## Output
Data catalogue.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
