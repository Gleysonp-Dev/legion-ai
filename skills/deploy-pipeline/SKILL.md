---
name: deploy-pipeline
description: "Build a continuous deployment pipeline with environments, approvals, migrations and rollback. Use to automate releases."
---
# Deploy Pipeline

> Legion skill · category **DevOps & CI/CD**

## When to use
Build a continuous deployment pipeline with environments, approvals, migrations and rollback. Use to automate releases.

## Procedure
1. Define environments (preview, staging, production).
2. Deploy automatically to staging; require approval for production.
3. Run database migrations safely as a step.
4. Add smoke tests after deploy.
5. Implement one-click rollback.

## Quality checklist
- [ ] Rollback tested
- [ ] production gated
- [ ] smoke tests run

## Output
Deployment workflow and runbook.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
