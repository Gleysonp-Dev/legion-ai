---
name: hyperparameter-tuning
description: "Tune hyperparameters with cross-validation and Optuna/grid/random search within a budget. Use to squeeze performance."
---
# Hyperparameter Tuning

> Legion skill · category **Machine Learning**

## When to use
Tune hyperparameters with cross-validation and Optuna/grid/random search within a budget. Use to squeeze performance.

## Procedure
1. Define search space and budget.
2. Use cross-validation appropriate to data.
3. Run search with early stopping.
4. Check for overfitting on validation.
5. Retrain final model and report.

## Quality checklist
- [ ] Test set untouched during tuning

## Output
Best parameters and scores.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
