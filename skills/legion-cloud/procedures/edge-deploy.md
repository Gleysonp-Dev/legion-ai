# Edge Deploy

> Legion procedure `edge-deploy` · pack **Cloud & Infrastructure** (`legion-cloud`)

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
