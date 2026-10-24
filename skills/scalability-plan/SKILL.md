---
name: scalability-plan
description: "Plan how a system will handle 10x and 100x load: bottlenecks, scaling levers and capacity milestones. Use before growth or a big launch."
---
# Scalability Plan

> Legion skill · category **Architecture & System Design**

## When to use
Plan how a system will handle 10x and 100x load: bottlenecks, scaling levers and capacity milestones. Use before growth or a big launch.

## Procedure
1. Measure current load and resource usage.
2. Find the first component to break at 10x.
3. List scaling levers: horizontal scaling, caching, read replicas, queues, sharding.
4. Define metrics that trigger each lever.
5. Estimate cost at each stage.

## Quality checklist
- [ ] Bottleneck based on data
- [ ] triggers measurable
- [ ] cost estimated

## Output
A capacity plan with stages, triggers and costs.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
