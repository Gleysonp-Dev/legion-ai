---
name: ota-updates
description: "Implement over-the-air firmware updates with signing, staged rollout and automatic rollback. Use for device fleets."
---
# OTA Updates

> Legion skill · category **IoT & Embedded**

## When to use
Implement over-the-air firmware updates with signing, staged rollout and automatic rollback. Use for device fleets.

## Procedure
1. Sign firmware images.
2. Use A/B partitions.
3. Roll out in stages.
4. Verify health and roll back.
5. Track versions.

## Quality checklist
- [ ] Signed images
- [ ] rollback tested

## Output
OTA implementation.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
