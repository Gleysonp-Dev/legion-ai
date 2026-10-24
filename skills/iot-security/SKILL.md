---
name: iot-security
description: "Secure IoT devices and backends: secure boot, encrypted storage, TLS, least privilege and vulnerability disclosure. Use before shipping devices."
---
# IoT Security

> Legion skill · category **IoT & Embedded**

## When to use
Secure IoT devices and backends: secure boot, encrypted storage, TLS, least privilege and vulnerability disclosure. Use before shipping devices.

## Procedure
1. Enable secure boot and flash encryption.
2. Use TLS with certificate validation.
3. Use per-device credentials with least privilege.
4. Disable debug interfaces in production.
5. Publish update and disclosure policy.

## Quality checklist
- [ ] Debug disabled
- [ ] per-device credentials

## Output
IoT security checklist.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
