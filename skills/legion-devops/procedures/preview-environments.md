# Preview Environments

> Legion procedure `preview-environments` · pack **DevOps & CI/CD** (`legion-devops`)

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
