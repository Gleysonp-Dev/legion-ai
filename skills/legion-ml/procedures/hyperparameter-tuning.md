# Hyperparameter Tuning

> Legion procedure `hyperparameter-tuning` · pack **Machine Learning** (`legion-ml`)

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
