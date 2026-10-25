---
name: legion-performance
description: "Performance pack with 10 ready procedures: profile app, core web vitals, bundle size, image optimization, api latency, caching implementation, database performance, frontend rendering, startup time, cost performance tradeoff. Use for any performance task."
---
# Performance — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `profile-app` | Profile an application (CPU, memory, I/O) with the right tools for the language to find real bottlenecks. Use before optimising anything. |
| `core-web-vitals` | Improve Core Web Vitals (LCP, INP, CLS) using Lighthouse and field data. Use when a site scores poorly or ranks badly. |
| `bundle-size` | Reduce JavaScript bundle size with analysis, code splitting, tree shaking and dependency replacement. Use when apps load slowly. |
| `image-optimization` | Optimise images: modern formats (AVIF/WebP), responsive sizes, lazy loading and CDN transformation. Use when images slow down pages. |
| `api-latency` | Reduce API response time by finding slow dependencies, queries and serialisation, then caching or parallelising. Use when endpoints are slow. |
| `caching-implementation` | Implement caching (Redis, in-memory, HTTP cache headers, CDN) with correct keys, TTLs and invalidation. Use after deciding what to cache. |
| `database-performance` | Fix database-driven slowness: N+1 queries, missing indexes, connection pool limits and lock contention. Use when the database is the bottleneck. |
| `frontend-rendering` | Fix slow rendering in web apps: unnecessary re-renders, large lists, layout thrashing and heavy animations. Use when the UI feels janky. |
| `startup-time` | Reduce startup time of apps, CLIs, servers or mobile apps through lazy loading and deferring work. Use when launch is slow. |
| `cost-performance-tradeoff` | Balance performance against infrastructure cost: right instance sizes, autoscaling and caching ROI. Use when scaling decisions affect budget. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`performance-engineer`, `web-performance-tuner`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
