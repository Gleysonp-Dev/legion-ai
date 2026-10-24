---
name: nextjs-app
description: "Scaffold or extend a Next.js app with App Router, server components, data fetching, metadata and deployment. Use for React web apps that need SSR or SEO."
---
# Next.js App

> Legion skill · category **Frontend Development**

## When to use
Scaffold or extend a Next.js app with App Router, server components, data fetching, metadata and deployment. Use for React web apps that need SSR or SEO.

## Procedure
1. Choose rendering per route (static, dynamic, ISR) based on data freshness.
2. Fetch data in server components; keep client components small.
3. Add metadata, Open Graph and sitemaps.
4. Handle loading and error boundaries per route.
5. Configure environment variables and deploy target.

## Quality checklist
- [ ] Build passes
- [ ] no client secrets
- [ ] routes have loading/error states

## Output
Next.js code changes and deploy notes.

## Works well with
Legion agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
