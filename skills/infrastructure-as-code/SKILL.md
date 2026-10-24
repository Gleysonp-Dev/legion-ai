---
name: infrastructure-as-code
description: "Write Terraform, Pulumi or CDK code for infrastructure with modules, state management and plans. Use to stop clicking in cloud consoles."
---
# Infrastructure As Code

> Legion skill · category **DevOps & CI/CD**

## When to use
Write Terraform, Pulumi or CDK code for infrastructure with modules, state management and plans. Use to stop clicking in cloud consoles.

## Procedure
1. Inventory existing resources.
2. Structure code into modules per component.
3. Configure remote state with locking.
4. Run plan in CI and apply with approval.
5. Import existing resources rather than recreating.

## Quality checklist
- [ ] Remote locked state
- [ ] plan reviewed before apply

## Output
IaC code and CI workflow.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
