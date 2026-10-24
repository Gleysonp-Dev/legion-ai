---
name: iot-dashboard
description: "Build a telemetry dashboard with live values, history charts, alerts and device status. Use to monitor devices."
---
# IoT Dashboard

> Legion skill · category **IoT & Embedded**

## When to use
Build a telemetry dashboard with live values, history charts, alerts and device status. Use to monitor devices.

## Procedure
1. Define metrics per device.
2. Choose stack (Grafana, custom web).
3. Show live values and history.
4. Add thresholds and alerts.
5. Show device online status.

## Quality checklist
- [ ] Stale data flagged
- [ ] alerts work

## Output
Dashboard.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
