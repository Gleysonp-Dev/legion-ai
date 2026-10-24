---
name: azure-architecture
description: "Design Azure architectures (App Service, Functions, AKS, Cosmos DB, Azure SQL, Entra ID). Use for building on Azure."
---
# Azure Architecture

> Legion skill · category **Cloud & Infrastructure**

## When to use
Design Azure architectures (App Service, Functions, AKS, Cosmos DB, Azure SQL, Entra ID). Use for building on Azure.

## Procedure
1. Map requirements to Azure services.
2. Organise resource groups and subscriptions.
3. Use managed identities instead of secrets.
4. Plan monitoring with Azure Monitor.
5. Estimate cost.

## Quality checklist
- [ ] Managed identities used
- [ ] cost estimated

## Output
Azure design and cost.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
