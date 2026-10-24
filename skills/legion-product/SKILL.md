---
name: legion-product
description: "Product Management playbook with 10 ready procedures: prd writer, user stories, prioritization, mvp scoping, feature spec, competitive analysis, product metrics, customer feedback synthesis, roadmap builder, launch plan. Use for any product management task."
---
# Product Management — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `prd-writer` | Write a product requirements document: problem, goals, users, stories, scope, metrics and open questions. Use when defining a feature. |
| `user-stories` | Write user stories with acceptance criteria (Given/When/Then) and split them to be small. Use for backlog creation. |
| `prioritization` | Prioritise a backlog with RICE, ICE, MoSCoW or Kano and explain trade-offs. Use when there is more to do than time. |
| `mvp-scoping` | Cut a product idea down to a minimum viable product that tests the riskiest assumption. Use before building a new product. |
| `feature-spec` | Write a technical-friendly feature spec bridging product and engineering: behaviour, rules, states, edge cases and analytics. Use before implementation. |
| `competitive-analysis` | Compare competitors' features, pricing, positioning and reviews to find opportunities. Use for product strategy. |
| `product-metrics` | Define product metrics: north star, input metrics, guardrails and instrumentation. Use to measure product success. |
| `customer-feedback-synthesis` | Synthesise customer feedback from tickets, reviews and interviews into themes, counts and recommendations. Use to decide what to fix or build. |
| `roadmap-builder` | Build a Now/Next/Later roadmap with themes, outcomes and dependencies. Use for planning communication. |
| `launch-plan` | Plan a product or feature launch: readiness checklist, messaging, channels, timeline and success metrics. Use before going live. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`product-manager`, `requirements-analyst`, `roadmap-planner`, `ux-researcher`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
