# Event Driven Design

> Legion procedure `event-driven-design` · pack **Architecture & System Design** (`legion-architecture`)

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
