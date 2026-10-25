# Playbook: IoT product (sensor → cloud → dashboard → alerts)

**Goal:** a device that measures something reliably, sends it securely to the cloud, and shows live data with alerts — e.g. pool water quality, tank level, energy use.
**Mode:** full · **Council:** review firmware + backend before field test

## Ask first
- What is measured (pH, temperature, chlorine/ORP, level, flow…), how often, acceptable error
- Hardware chosen or budget (ESP32, Raspberry Pi…), power (mains/battery/solar), connectivity (Wi-Fi, LTE, LoRa)
- Who sees the data (owner, technician, both), alert rules, phone app or web
- Cloud preference (Supabase, Firebase, AWS IoT, own server)

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | iot-engineer | `legion-iot` → hardware-bom, mqtt-architecture | BOM with costs + MQTT topics/payload spec | spec reviewed by user |
| 1 | software-architect | `legion-architecture` → system-design | device→broker→DB→dashboard design | diagram + ADR |
| 2 | iot-engineer | `legion-iot` → esp32-firmware, sensor-calibration | firmware with reconnect, watchdog, calibration | serial log: readings within tolerance vs reference |
| 2 | realtime-engineer | `legion-backend` → background-jobs | broker + ingestion service | 1,000 test messages stored, none lost |
| 2 | database-architect | `legion-database` → schema-design | time-series schema + retention | query of last 24 h < 200 ms |
| 3 | data-visualizer | `legion-iot` → iot-dashboard | live dashboard + history | live value updates within 5 s |
| 3 | backend-engineer | `legion-backend` → email-notifications | alert rules (out-of-range, offline device) | test alert delivered |
| 3 | iot-engineer | `legion-iot` → device-provisioning, ota-updates | provisioning + OTA with rollback | OTA to test device succeeds, rollback tested |
| 4 | security-auditor | `legion-iot` → iot-security | per-device credentials, TLS, debug off | checklist all pass |
| 4 | qa-gatekeeper | `legion-testing` → manual-test-plan | 48 h soak test plan + results | no data gaps > 2 intervals |

## Definition of done
Device runs 48 h unattended, reconnects after Wi-Fi loss, data visible live and historically, alerts fire, OTA works, each device has its own credentials.
