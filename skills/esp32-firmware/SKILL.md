---
name: esp32-firmware
description: "Write ESP32 firmware (Arduino or ESP-IDF) with Wi-Fi reconnection, sensors, deep sleep, watchdog and OTA. Use for connected devices."
---
# ESP32 Firmware

> Legion skill · category **IoT & Embedded**

## When to use
Write ESP32 firmware (Arduino or ESP-IDF) with Wi-Fi reconnection, sensors, deep sleep, watchdog and OTA. Use for connected devices.

## Procedure
1. Define sensors, pins and sampling rate.
2. Implement Wi-Fi with reconnection and backoff.
3. Read sensors with calibration and filtering.
4. Add watchdog and deep sleep where useful.
5. Add OTA updates with rollback.

## Quality checklist
- [ ] Recovers from Wi-Fi loss
- [ ] watchdog enabled

## Output
Firmware code and wiring notes.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
