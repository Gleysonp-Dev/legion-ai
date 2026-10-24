---
name: data-cleaning
description: "Clean messy datasets: fix types, duplicates, missing values, inconsistent categories and outliers with reproducible code. Use before analysis."
---
# Data Cleaning

> Legion skill · category **Data Engineering**

## When to use
Clean messy datasets: fix types, duplicates, missing values, inconsistent categories and outliers with reproducible code. Use before analysis.

## Procedure
1. Profile the data (types, nulls, uniques, ranges).
2. Standardise formats (dates, numbers, text case).
3. Deduplicate with clear rules.
4. Handle missing values explicitly and document choices.
5. Save cleaning as a reproducible script.

## Quality checklist
- [ ] Every transformation documented
- [ ] row counts reconciled

## Output
Clean dataset and cleaning script.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
