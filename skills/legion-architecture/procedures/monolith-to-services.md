# Monolith To Services

> Legion procedure `monolith-to-services` · pack **Architecture & System Design** (`legion-architecture`)

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
