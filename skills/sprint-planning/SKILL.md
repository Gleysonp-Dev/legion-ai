---
name: sprint-planning
description: "Plan a sprint or week of work: pick backlog items by priority and capacity, define a sprint goal and daily plan. Use at the start of an iteration."
---
# Sprint Planning

> Legion skill · category **Planning & Delivery**

## When to use
Plan a sprint or week of work: pick backlog items by priority and capacity, define a sprint goal and daily plan. Use at the start of an iteration.

## Procedure
1. Confirm available capacity (people × days, minus meetings and holidays).
2. Choose a single sprint goal that delivers user value.
3. Pull top-priority items that serve the goal until capacity is ~80% used.
4. Split items that are too large; make acceptance criteria explicit.
5. Identify dependencies and risks to raise in stand-ups.

## Quality checklist
- [ ] Sprint goal stated
- [ ] capacity not overbooked
- [ ] every item has acceptance criteria

## Output
A sprint plan with goal, items, owners and risks.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
