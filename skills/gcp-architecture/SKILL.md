---
name: gcp-architecture
description: "Design Google Cloud architectures (Cloud Run, GKE, Cloud SQL, Pub/Sub, BigQuery, Firebase). Use for building on GCP."
---
# GCP Architecture

> Legion skill · category **Cloud & Infrastructure**

## When to use
Design Google Cloud architectures (Cloud Run, GKE, Cloud SQL, Pub/Sub, BigQuery, Firebase). Use for building on GCP.

## Procedure
1. Map requirements to GCP managed services.
2. Design projects, service accounts and IAM.
3. Plan networking and private connectivity.
4. Configure logging, monitoring and budgets.
5. Estimate monthly cost.

## Quality checklist
- [ ] Service accounts least privilege
- [ ] budgets set

## Output
GCP design and cost.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
