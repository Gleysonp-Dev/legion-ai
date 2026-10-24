# Model Evaluation

> Legion procedure `model-evaluation` · pack **Machine Learning** (`legion-ml`)

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
