---
name: device-provisioning
description: "Design secure device provisioning: unique identities, claiming, Wi-Fi setup (BLE/SoftAP) and certificate rotation. Use for shipping devices."
---
# Device Provisioning

> Legion skill · category **IoT & Embedded**

## When to use
Design secure device provisioning: unique identities, claiming, Wi-Fi setup (BLE/SoftAP) and certificate rotation. Use for shipping devices.

## Procedure
1. Generate unique identity per device.
2. Design claiming flow.
3. Implement Wi-Fi onboarding.
4. Store credentials securely.
5. Plan rotation and revocation.

## Quality checklist
- [ ] No shared credentials across devices

## Output
Provisioning design.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
