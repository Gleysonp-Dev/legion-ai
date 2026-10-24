---
name: edge-data-processing
description: "Process data on the device or gateway: filtering, aggregation, anomaly detection and buffering when offline. Use to reduce bandwidth and latency."
---
# Edge Data Processing

> Legion skill · category **IoT & Embedded**

## When to use
Process data on the device or gateway: filtering, aggregation, anomaly detection and buffering when offline. Use to reduce bandwidth and latency.

## Procedure
1. Decide what runs on edge vs cloud.
2. Filter and aggregate.
3. Detect anomalies locally.
4. Buffer offline.
5. Sync when connected.

## Quality checklist
- [ ] No data loss when offline

## Output
Edge processing code.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
