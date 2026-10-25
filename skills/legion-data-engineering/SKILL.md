---
name: legion-data-engineering
description: "Data Engineering pack with 10 ready procedures: etl pipeline, data quality checks, dbt models, streaming pipeline, warehouse design, data cleaning, csv excel processing, web scraping ethical, data catalog, change data capture. Use for any data engineering task."
---
# Data Engineering — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `etl-pipeline` | Build an ETL/ELT pipeline from sources to a warehouse with idempotent loads, scheduling and quality checks. Use to centralise data. |
| `data-quality-checks` | Add data quality tests (Great Expectations, dbt tests, Soda) for nulls, uniqueness, ranges and freshness. Use when data cannot be trusted. |
| `dbt-models` | Build dbt models (staging, intermediate, marts) with tests, docs and incremental strategies. Use for analytics transformations. |
| `streaming-pipeline` | Build streaming pipelines with Kafka, Kinesis, Pub/Sub or Flink: topics, consumers, windows and exactly-once concerns. Use for real-time data. |
| `warehouse-design` | Design a data warehouse (BigQuery, Snowflake, Redshift, DuckDB) with dimensional models, partitioning and access control. Use when setting up analytics infrastructure. |
| `data-cleaning` | Clean messy datasets: fix types, duplicates, missing values, inconsistent categories and outliers with reproducible code. Use before analysis. |
| `csv-excel-processing` | Process CSV and Excel files with pandas or similar: merge, filter, pivot, reshape and export. Use for file-based data work. |
| `web-scraping-ethical` | Collect public web data responsibly: respect robots.txt and terms, rate-limit, cache and parse robustly. Use when no API exists and scraping is permitted. |
| `data-catalog` | Document datasets: data dictionary, owners, lineage, freshness and sensitivity classification. Use when people do not know what data exists. |
| `change-data-capture` | Set up change data capture (Debezium, logical replication, Fivetran) to stream database changes downstream. Use to sync databases or feed warehouses in near real time. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
