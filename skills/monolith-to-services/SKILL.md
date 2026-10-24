---
name: monolith-to-services
description: "Plan an incremental migration from a monolith to modules or services using the strangler-fig pattern. Use when a monolith blocks team velocity."
---
# Monolith To Services

> Legion skill · category **Architecture & System Design**

## When to use
Plan an incremental migration from a monolith to modules or services using the strangler-fig pattern. Use when a monolith blocks team velocity.

## Procedure
1. Identify bounded contexts and their data ownership in the monolith.
2. Pick the first candidate: high change rate, low coupling.
3. Introduce an internal API boundary before extracting.
4. Plan data migration and dual-write or change-data-capture steps.
5. Define rollback and success metrics per step.

## Quality checklist
- [ ] First extraction is small
- [ ] data ownership explicit
- [ ] rollback defined

## Output
A migration roadmap with step-by-step extraction plan.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
