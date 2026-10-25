---
name: legion-business-finance
description: "Business & Finance pack with 10 ready procedures: business plan, financial model, pricing strategy, unit economics, pitch deck, budget planner, process mapping, invoice quote, kpi definition, startup validation. Use for any business & finance task."
---
# Business & Finance — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `business-plan` | Write a business plan: problem, solution, market, model, go-to-market, operations, team, financials and risks. Use for starting a business or seeking funding. |
| `financial-model` | Build a financial model with revenue, costs, cash flow, scenarios and sensitivity in a spreadsheet. Use for planning and fundraising (not personalised financial advice). |
| `pricing-strategy` | Design pricing: value metrics, tiers, price points, discounting and experiments. Use for SaaS or product pricing decisions. |
| `unit-economics` | Compute unit economics: CAC, LTV, payback, gross margin and contribution margin. Use to check business viability. |
| `pitch-deck` | Create a startup pitch deck outline: problem, solution, market, traction, model, competition, team, ask. Use for fundraising. |
| `budget-planner` | Create a budget with categories, forecasts, actuals tracking and variance analysis. Use for personal, project or company budgets. |
| `process-mapping` | Map business processes (as-is and to-be) with swimlanes, bottlenecks and improvements. Use for operational improvement. |
| `invoice-quote` | Create professional quotes, proposals and invoice templates with clear scope, terms and totals. Use for freelancers and small businesses. |
| `kpi-definition` | Define business KPIs with formulas, data sources, owners, targets and review cadence. Use to manage performance. |
| `startup-validation` | Validate a startup idea quickly: problem interviews, landing page tests, pre-sales and success criteria. Use before building. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`business-analyst`, `financial-analyst`, `project-manager`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
