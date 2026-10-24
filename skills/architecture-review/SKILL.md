---
name: architecture-review
description: "Review an existing architecture for coupling, scalability, reliability, security and maintainability issues. Use when a system feels fragile or before scaling."
---
# Architecture Review

> Legion skill · category **Architecture & System Design**

## When to use
Review an existing architecture for coupling, scalability, reliability, security and maintainability issues. Use when a system feels fragile or before scaling.

## Procedure
1. Map the current components and dependencies from the code and config.
2. Identify hot spots: tight coupling, shared databases, single points of failure.
3. Check scaling limits and failure handling at each boundary.
4. Rank issues by risk and cost to fix.
5. Propose an incremental improvement path.

## Quality checklist
- [ ] Claims backed by code references
- [ ] improvements are incremental

## Output
An architecture review with a ranked issue list and roadmap.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
