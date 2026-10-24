# Deploy Pipeline

> Legion procedure `deploy-pipeline` · pack **DevOps & CI/CD** (`legion-devops`)

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
