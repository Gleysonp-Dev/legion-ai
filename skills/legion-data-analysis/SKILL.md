---
name: legion-data-analysis
description: "Data Analysis & Visualisation playbook with 10 ready procedures: exploratory analysis, a/b test analysis, cohort retention, funnel analysis, kpi dashboard, chart maker, statistical testing, forecasting, survey analysis, spreadsheet analysis. Use for any data analysis & visualisation task."
---
# Data Analysis & Visualisation — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `exploratory-analysis` | Run exploratory data analysis: profile, distributions, correlations, outliers and first insights. Use when receiving a new dataset. |
| `ab-test-analysis` | Analyse A/B tests correctly: sample size, significance, confidence intervals, guardrail metrics and peeking pitfalls. Use to decide if an experiment won. |
| `cohort-retention` | Build cohort and retention analyses to see how user behaviour changes over time. Use for product engagement and churn questions. |
| `funnel-analysis` | Analyse conversion funnels to find where users drop off and why. Use for signup, onboarding or checkout optimisation. |
| `kpi-dashboard` | Design a KPI dashboard: metric definitions, layout, targets and refresh. Use to track business or product health. |
| `chart-maker` | Create a clear, honest chart from data with the right chart type, labels and a takeaway title. Use whenever data should be visualised. |
| `statistical-testing` | Choose and run the right statistical test (t-test, chi-square, Mann-Whitney, regression) and explain results plainly. Use when comparing groups or testing relationships. |
| `forecasting` | Forecast time series (sales, demand, traffic) with baselines, seasonality and uncertainty intervals. Use for planning. |
| `survey-analysis` | Analyse survey results: response rates, Likert scales, cross-tabs, open-text themes and bias. Use after collecting survey data. |
| `spreadsheet-analysis` | Analyse data in spreadsheets with formulas, pivot tables and charts. Use for Excel or Google Sheets analysis. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`data-analyst`, `data-visualizer`, `analytics-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
