---
name: system-design
description: "Design a system end to end: requirements, components, data flow, scaling and trade-offs with a diagram. Use for new products or interview-style design questions."
---
# System Design

> Legion skill · category **Architecture & System Design**

## When to use
Design a system end to end: requirements, components, data flow, scaling and trade-offs with a diagram. Use for new products or interview-style design questions.

## Procedure
1. Clarify functional requirements and quantify non-functional ones (users, QPS, data size, latency).
2. Sketch the high-level components and data flow as a Mermaid diagram.
3. Choose storage, caching and messaging with justification.
4. Address scaling, failure modes and bottlenecks.
5. Summarise trade-offs and what you would build first.

## Quality checklist
- [ ] Numbers drive decisions
- [ ] single points of failure addressed
- [ ] diagram included

## Output
A design doc with diagram, component list and trade-offs.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
