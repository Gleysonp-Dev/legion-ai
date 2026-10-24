---
name: edge-deploy
description: "Deploy apps and functions to edge platforms (Cloudflare Workers, Vercel, Netlify) with caching, KV and CDN rules. Use for global low-latency sites."
---
# Edge Deploy

> Legion skill · category **Cloud & Infrastructure**

## When to use
Deploy apps and functions to edge platforms (Cloudflare Workers, Vercel, Netlify) with caching, KV and CDN rules. Use for global low-latency sites.

## Procedure
1. Check runtime limits and API compatibility.
2. Configure caching and revalidation.
3. Use edge storage (KV, D1, R2) where it fits.
4. Set custom domains and TLS.
5. Measure latency from several regions.

## Quality checklist
- [ ] Runtime constraints respected
- [ ] cache rules verified

## Output
Edge configuration and deploy steps.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
