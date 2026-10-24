---
name: serverless-app
description: "Build serverless applications with functions, managed queues, storage and API gateways, handling cold starts and limits. Use for event-driven or spiky workloads."
---
# Serverless App

> Legion skill · category **Cloud & Infrastructure**

## When to use
Build serverless applications with functions, managed queues, storage and API gateways, handling cold starts and limits. Use for event-driven or spiky workloads.

## Procedure
1. Split work into small functions triggered by events.
2. Choose runtime and memory for latency and cost.
3. Handle cold starts, timeouts and concurrency limits.
4. Use managed queues for retries.
5. Deploy with a framework (SST, Serverless, SAM).

## Quality checklist
- [ ] Timeouts and retries configured
- [ ] IaC used

## Output
Serverless app code and deploy config.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
