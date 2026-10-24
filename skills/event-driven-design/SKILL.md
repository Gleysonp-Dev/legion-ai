---
name: event-driven-design
description: "Design event-driven systems: events, topics, schemas, consumers, ordering and delivery guarantees. Use when services need to react to each other asynchronously."
---
# Event Driven Design

> Legion skill · category **Architecture & System Design**

## When to use
Design event-driven systems: events, topics, schemas, consumers, ordering and delivery guarantees. Use when services need to react to each other asynchronously.

## Procedure
1. List domain events in past tense (OrderPlaced) with owners.
2. Define event schemas with versioning rules.
3. Choose broker and topic layout; decide on ordering keys.
4. Make consumers idempotent and handle retries and dead letters.
5. Use the outbox pattern for reliable publishing.

## Quality checklist
- [ ] Schemas versioned
- [ ] consumers idempotent
- [ ] DLQ handling defined

## Output
An event catalogue and flow diagram.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
