---
name: ml-baseline
description: "Build a quick, honest ML baseline with proper splits and metrics before trying complex models. Use at the start of any ML project."
---
# ML Baseline

> Legion skill · category **Machine Learning**

## When to use
Build a quick, honest ML baseline with proper splits and metrics before trying complex models. Use at the start of any ML project.

## Procedure
1. Define target and evaluation metric.
2. Split data (time-based if temporal).
3. Train a trivial baseline (mean, majority, simple rule).
4. Train a simple model (logistic/linear, gradient boosting).
5. Report metrics and next steps.

## Quality checklist
- [ ] No leakage
- [ ] baseline compared

## Output
Baseline results.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
