# Model Deployment

> Legion procedure `model-deployment` · pack **Machine Learning** (`legion-ml`)

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
