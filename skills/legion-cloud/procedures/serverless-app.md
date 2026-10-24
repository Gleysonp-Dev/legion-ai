# Serverless App

> Legion procedure `serverless-app` · pack **Cloud & Infrastructure** (`legion-cloud`)

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
