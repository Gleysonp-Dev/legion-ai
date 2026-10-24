---
name: legion-ml
description: "Machine Learning playbook with 10 ready procedures: ml baseline, feature engineering, model evaluation, hyperparameter tuning, model deployment, computer vision, nlp classification, recommendation system, anomaly detection, ml experiment tracking. Use for any machine learning task."
---
# Machine Learning — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `ml-baseline` | Build a quick, honest ML baseline with proper splits and metrics before trying complex models. Use at the start of any ML project. |
| `feature-engineering` | Create and select features: encoding, scaling, aggregations, time features and leakage checks. Use to improve model performance. |
| `model-evaluation` | Evaluate models thoroughly: metrics, confusion matrix, calibration, slices, fairness and error analysis. Use before shipping a model. |
| `hyperparameter-tuning` | Tune hyperparameters with cross-validation and Optuna/grid/random search within a budget. Use to squeeze performance. |
| `model-deployment` | Deploy a model as an API or batch job with versioning, monitoring and rollback. Use to put a model in production. |
| `computer-vision` | Build computer vision solutions: classification, detection, OCR with pretrained models and fine-tuning. Use for image or video tasks. |
| `nlp-classification` | Build text classification or extraction with classic NLP, embeddings or LLMs, choosing the cheapest approach that works. Use for tagging, sentiment, routing. |
| `recommendation-system` | Build recommendations: popularity, collaborative filtering, content-based and hybrid, with offline and online evaluation. Use for "you may also like". |
| `anomaly-detection` | Detect anomalies in metrics, transactions or sensor data with statistical and ML methods. Use for fraud, monitoring or IoT alerts. |
| `ml-experiment-tracking` | Set up experiment tracking (MLflow, Weights & Biases) for parameters, metrics, artifacts and data versions. Use when experiments are hard to compare. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`ml-engineer`, `data-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
