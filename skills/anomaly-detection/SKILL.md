---
name: anomaly-detection
description: "Detect anomalies in metrics, transactions or sensor data with statistical and ML methods. Use for fraud, monitoring or IoT alerts."
---
# Anomaly Detection

> Legion skill · category **Machine Learning**

## When to use
Detect anomalies in metrics, transactions or sensor data with statistical and ML methods. Use for fraud, monitoring or IoT alerts.

## Procedure
1. Understand normal patterns and seasonality.
2. Start with statistical methods (z-score, IQR, seasonal decomposition).
3. Try isolation forest or autoencoders if needed.
4. Tune thresholds to acceptable false-positive rate.
5. Route alerts with context.

## Quality checklist
- [ ] False-positive rate measured

## Output
Detector and threshold rationale.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
