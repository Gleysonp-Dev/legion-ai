---
name: feature-engineering
description: "Create and select features: encoding, scaling, aggregations, time features and leakage checks. Use to improve model performance."
---
# Feature Engineering

> Legion skill · category **Machine Learning**

## When to use
Create and select features: encoding, scaling, aggregations, time features and leakage checks. Use to improve model performance.

## Procedure
1. Understand domain signals.
2. Create features with clear definitions.
3. Encode categoricals and handle missing values.
4. Check for target leakage.
5. Measure importance and remove useless features.

## Quality checklist
- [ ] Leakage checked
- [ ] features documented

## Output
Feature pipeline code.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
