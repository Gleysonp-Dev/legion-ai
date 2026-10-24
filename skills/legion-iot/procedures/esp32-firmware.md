# ESP32 Firmware

> Legion procedure `esp32-firmware` · pack **IoT & Embedded** (`legion-iot`)

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
