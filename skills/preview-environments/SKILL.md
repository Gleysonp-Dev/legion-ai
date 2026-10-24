---
name: preview-environments
description: "Set up per-pull-request preview deployments (Vercel, Netlify, Render, Fly, k8s namespaces). Use to review changes live before merge."
---
# Preview Environments

> Legion skill · category **DevOps & CI/CD**

## When to use
Set up per-pull-request preview deployments (Vercel, Netlify, Render, Fly, k8s namespaces). Use to review changes live before merge.

## Procedure
1. Choose a platform that fits the stack.
2. Deploy on each PR with a unique URL.
3. Use isolated or seeded data.
4. Post the URL on the PR.
5. Tear down on merge/close.

## Quality checklist
- [ ] Previews isolated
- [ ] cleaned up automatically

## Output
Preview configuration.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
