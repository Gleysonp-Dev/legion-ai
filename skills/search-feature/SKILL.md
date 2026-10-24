---
name: search-feature
description: "Add search: database full-text, Postgres trigram, Meilisearch/Typesense/Elasticsearch, with ranking, filters and typo tolerance. Use when users need to find content."
---
# Search Feature

> Legion skill · category **Backend Development**

## When to use
Add search: database full-text, Postgres trigram, Meilisearch/Typesense/Elasticsearch, with ranking, filters and typo tolerance. Use when users need to find content.

## Procedure
1. Clarify what is searched, by whom, and expected volume.
2. Start with database full-text if it is enough; move to a search engine when needed.
3. Define indexed fields, ranking and filters.
4. Keep the index in sync via events or scheduled jobs.
5. Measure relevance with sample queries.

## Quality checklist
- [ ] Results respect permissions
- [ ] index stays in sync
- [ ] relevance tested

## Output
Search implementation and a relevance test list.

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
