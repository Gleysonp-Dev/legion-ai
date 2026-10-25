---
name: legion-frontend
description: "Frontend Development pack with 10 ready procedures: build landing page, component builder, form builder, state management, responsive layout, dark mode, next.js app, frontend testing, tailwind setup, i18n setup. Use for any frontend development task."
---
# Frontend Development — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `build-landing-page` | Build a responsive, fast landing page with hero, benefits, social proof, pricing and CTA. Use for product launches and marketing sites. |
| `component-builder` | Create a reusable UI component with props API, variants, states, accessibility and tests. Use when adding buttons, modals, tables, dropdowns or any shared widget. |
| `form-builder` | Build robust forms with validation, error messages, accessibility and submission handling. Use for signup, checkout, settings or any data entry. |
| `state-management` | Choose and implement state management: server cache (React Query/SWR), global store (Zustand/Redux) or local state. Use when app state is tangled or duplicated. |
| `responsive-layout` | Make a layout work across phone, tablet and desktop using modern CSS (flex, grid, container queries, clamp). Use when a page breaks on some screen sizes. |
| `dark-mode` | Add light/dark theme support with CSS variables, system preference detection and a toggle. Use when a site needs a dark mode. |
| `nextjs-app` | Scaffold or extend a Next.js app with App Router, server components, data fetching, metadata and deployment. Use for React web apps that need SSR or SEO. |
| `frontend-testing` | Test frontend components and pages with Testing Library, Vitest/Jest and mock APIs (MSW). Use when UI code lacks tests. |
| `tailwind-setup` | Set up or refactor Tailwind CSS with design tokens, theme config, component patterns and class organisation. Use for Tailwind projects or migrations to Tailwind. |
| `i18n-setup` | Internationalise a frontend: extract strings, set up i18n library, locale routing, plurals, dates and currencies. Use when a product must support multiple languages (e.g. PT-BR and EN). |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
