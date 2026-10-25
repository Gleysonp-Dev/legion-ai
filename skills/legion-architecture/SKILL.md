---
name: legion-architecture
description: "Architecture & System Design pack with 10 ready procedures: system design, adr writer, architecture review, c4 diagrams, monolith to services, event driven design, caching strategy, multi tenancy design, scalability plan, tech stack selection. Use for any architecture & system design task."
---
# Architecture & System Design — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `system-design` | Design a system end to end: requirements, components, data flow, scaling and trade-offs with a diagram. Use for new products or interview-style design questions. |
| `adr-writer` | Write Architecture Decision Records documenting context, options, decision and consequences. Use whenever a significant technical decision is made. |
| `architecture-review` | Review an existing architecture for coupling, scalability, reliability, security and maintainability issues. Use when a system feels fragile or before scaling. |
| `c4-diagrams` | Produce C4 model diagrams (context, container, component) as Mermaid or PlantUML. Use to explain a system to new developers or stakeholders. |
| `monolith-to-services` | Plan an incremental migration from a monolith to modules or services using the strangler-fig pattern. Use when a monolith blocks team velocity. |
| `event-driven-design` | Design event-driven systems: events, topics, schemas, consumers, ordering and delivery guarantees. Use when services need to react to each other asynchronously. |
| `caching-strategy` | Design a caching strategy: what to cache, where, TTLs, invalidation and stampede protection. Use when reads are slow or expensive. |
| `multi-tenancy-design` | Design multi-tenant SaaS architecture: isolation model, tenant routing, data partitioning, limits and billing hooks. Use when building B2B SaaS. |
| `scalability-plan` | Plan how a system will handle 10x and 100x load: bottlenecks, scaling levers and capacity milestones. Use before growth or a big launch. |
| `tech-stack-selection` | Choose a technology stack for a project based on requirements, team skills, ecosystem and cost. Use when starting something new or replacing a core technology. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
