---
name: legion-iot
description: "IoT & Embedded playbook with 10 ready procedures: esp32 firmware, mqtt architecture, sensor calibration, iot dashboard, device provisioning, ota updates, home automation, hardware bom, edge data processing, iot security. Use for any iot & embedded task."
---
# IoT & Embedded — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `esp32-firmware` | Write ESP32 firmware (Arduino or ESP-IDF) with Wi-Fi reconnection, sensors, deep sleep, watchdog and OTA. Use for connected devices. |
| `mqtt-architecture` | Design MQTT topic structure, payload schemas, QoS, retained messages and broker security. Use for IoT messaging. |
| `sensor-calibration` | Calibrate sensors (pH, temperature, ORP, chlorine, flow, pressure) with reference points, drift tracking and filtering. Use for accurate measurements. |
| `iot-dashboard` | Build a telemetry dashboard with live values, history charts, alerts and device status. Use to monitor devices. |
| `device-provisioning` | Design secure device provisioning: unique identities, claiming, Wi-Fi setup (BLE/SoftAP) and certificate rotation. Use for shipping devices. |
| `ota-updates` | Implement over-the-air firmware updates with signing, staged rollout and automatic rollback. Use for device fleets. |
| `home-automation` | Integrate devices with Home Assistant, Node-RED or smart-home platforms with automations. Use for home or facility automation. |
| `hardware-bom` | Create a hardware bill of materials with components, suppliers, costs and alternatives. Use for prototyping or production. |
| `edge-data-processing` | Process data on the device or gateway: filtering, aggregation, anomaly detection and buffering when offline. Use to reduce bandwidth and latency. |
| `iot-security` | Secure IoT devices and backends: secure boot, encrypted storage, TLS, least privilege and vulnerability disclosure. Use before shipping devices. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
