---
name: hardware-bom
description: "Create a hardware bill of materials with components, suppliers, costs and alternatives. Use for prototyping or production."
---
# Hardware BOM

> Legion skill · category **IoT & Embedded**

## When to use
Create a hardware bill of materials with components, suppliers, costs and alternatives. Use for prototyping or production.

## Procedure
1. List components with specs.
2. Find suppliers and prices.
3. Identify alternatives.
4. Compute total at quantities.
5. Flag long lead times.

## Quality checklist
- [ ] Alternatives for critical parts

## Output
BOM spreadsheet.

## Works well with
Legion agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
