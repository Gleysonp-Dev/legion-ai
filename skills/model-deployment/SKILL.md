---
name: model-deployment
description: "Deploy a model as an API or batch job with versioning, monitoring and rollback. Use to put a model in production."
---
# Model Deployment

> Legion skill · category **Machine Learning**

## When to use
Deploy a model as an API or batch job with versioning, monitoring and rollback. Use to put a model in production.

## Procedure
1. Package model and preprocessing together.
2. Serve via API (FastAPI, BentoML) or batch.
3. Version models and data.
4. Monitor latency, inputs and predictions for drift.
5. Plan rollback.

## Quality checklist
- [ ] Preprocessing identical in training and serving

## Output
Serving code and monitoring setup.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
