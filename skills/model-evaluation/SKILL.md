---
name: model-evaluation
description: "Evaluate models thoroughly: metrics, confusion matrix, calibration, slices, fairness and error analysis. Use before shipping a model."
---
# Model Evaluation

> Legion skill · category **Machine Learning**

## When to use
Evaluate models thoroughly: metrics, confusion matrix, calibration, slices, fairness and error analysis. Use before shipping a model.

## Procedure
1. Compute metrics on a held-out test set.
2. Analyse errors by slice.
3. Check calibration.
4. Check fairness across relevant groups.
5. Summarise risks.

## Quality checklist
- [ ] Held-out data
- [ ] slice analysis done

## Output
Evaluation report.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
