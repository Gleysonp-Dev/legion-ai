# Infrastructure As Code

> Legion procedure `infrastructure-as-code` · pack **DevOps & CI/CD** (`legion-devops`)

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
