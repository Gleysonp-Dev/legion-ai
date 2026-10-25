# Playbook: Data dashboard

**Goal:** a KPI dashboard people trust — clear metric definitions, clean data, automatic refresh.
**Mode:** lite → full with pipelines · **Council:** optional on metric definitions

## Ask first
- Decisions the dashboard should support, the 5–8 KPIs, audience
- Data sources (spreadsheets, database, APIs), refresh frequency, tool (Metabase, Looker Studio, custom web)

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | analytics-engineer | `legion-business-finance` → kpi-definition | metric catalogue (formula, source, owner) | user signs off definitions |
| 1 | data-engineer | `legion-data-engineering` → data-cleaning, etl-pipeline | clean, scheduled data | row counts reconcile with source |
| 2 | data-analyst | `legion-data-analysis` → exploratory-analysis | sanity checks + first insights | numbers match a known total |
| 2 | data-visualizer | `legion-data-analysis` → kpi-dashboard, chart-maker | dashboard | screenshot + freshness indicator |
| 3 | data-engineer | `legion-data-engineering` → data-quality-checks | quality alerts | failing check triggers alert |

## Definition of done
Every KPI defined and reconciled, dashboard refreshes automatically, stale data is visibly flagged.
