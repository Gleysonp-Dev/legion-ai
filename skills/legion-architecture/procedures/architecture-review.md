# Architecture Review

> Legion procedure `architecture-review` · pack **Architecture & System Design** (`legion-architecture`)

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
