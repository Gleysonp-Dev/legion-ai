---
name: mqtt-architecture
description: "Design MQTT topic structure, payload schemas, QoS, retained messages and broker security. Use for IoT messaging."
---
# MQTT Architecture

> Legion skill · category **IoT & Embedded**

## When to use
Design MQTT topic structure, payload schemas, QoS, retained messages and broker security. Use for IoT messaging.

## Procedure
1. Design topic hierarchy.
2. Define JSON payloads with timestamps and units.
3. Choose QoS and retained usage.
4. Secure broker with TLS and per-device credentials.
5. Plan bridging to backend.

## Quality checklist
- [ ] TLS and per-device auth
- [ ] schemas versioned

## Output
Topic and payload spec.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
