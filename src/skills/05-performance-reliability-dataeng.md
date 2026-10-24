# category: performance | Performance
agents: performance-engineer, web-performance-tuner

## profile-app
desc: Profile an application (CPU, memory, I/O) with the right tools for the language to find real bottlenecks. Use before optimising anything.
- Reproduce the slow scenario with realistic data.
- Choose a profiler (Chrome DevTools, py-spy, pprof, clinic, perf).
- Capture a profile and read the flame graph.
- Identify the top 3 hot spots with their share of time.
- Recommend targeted fixes.
check: Profile captured on realistic workload; hot spots quantified
out: Profiling summary with flame-graph findings.

## core-web-vitals
desc: Improve Core Web Vitals (LCP, INP, CLS) using Lighthouse and field data. Use when a site scores poorly or ranks badly.
- Measure lab and field data (PageSpeed Insights, CrUX).
- Fix LCP: preload hero image, reduce server time, remove render-blocking.
- Fix INP: break up long tasks, reduce JavaScript.
- Fix CLS: reserve space for images, ads and fonts.
- Re-measure and report.
check: Each metric measured before and after
out: Web vitals report with fixes.

## bundle-size
desc: Reduce JavaScript bundle size with analysis, code splitting, tree shaking and dependency replacement. Use when apps load slowly.
- Run a bundle analyser and list the biggest modules.
- Lazy-load routes and heavy components.
- Replace heavy dependencies with lighter ones.
- Ensure tree shaking works (ESM, sideEffects).
- Report size before and after (gzip/brotli).
check: Size reduction measured; no broken features
out: Bundle report and changes.

## image-optimization
desc: Optimise images: modern formats (AVIF/WebP), responsive sizes, lazy loading and CDN transformation. Use when images slow down pages.
- Inventory images and their sizes.
- Convert to modern formats with fallbacks.
- Serve responsive sizes with srcset.
- Lazy-load below-the-fold images; prioritise the hero.
- Set width/height to avoid layout shift.
check: Bytes saved measured; no layout shift
out: Optimised images and markup changes.

## api-latency
desc: Reduce API response time by finding slow dependencies, queries and serialisation, then caching or parallelising. Use when endpoints are slow.
- Measure p50/p95/p99 latency per endpoint.
- Trace a slow request to see time per step.
- Fix slow queries, parallelise independent calls, add caching.
- Reduce payload size and serialisation cost.
- Verify with load tests.
check: Percentiles measured before and after
out: Latency report and fixes.

## caching-implementation
desc: Implement caching (Redis, in-memory, HTTP cache headers, CDN) with correct keys, TTLs and invalidation. Use after deciding what to cache.
- Pick the layer for each cached item.
- Implement cache-aside or write-through.
- Set TTLs and invalidate on writes.
- Add stampede protection.
- Monitor hit rate.
check: Invalidation correct; hit rate monitored
out: Cache code and configuration.

## database-performance
desc: Fix database-driven slowness: N+1 queries, missing indexes, connection pool limits and lock contention. Use when the database is the bottleneck.
- Find top queries by total time.
- Check for N+1 patterns in application logs.
- Add indexes and rewrite queries.
- Tune connection pool size.
- Investigate locks and long transactions.
check: Top queries improved; pool sized correctly
out: Database performance changes with metrics.

## frontend-rendering
desc: Fix slow rendering in web apps: unnecessary re-renders, large lists, layout thrashing and heavy animations. Use when the UI feels janky.
- Profile with the browser and framework devtools.
- Memoise expensive components and calculations where profiling shows benefit.
- Virtualise long lists.
- Avoid layout thrashing; use transform/opacity for animation.
- Re-profile and compare.
check: Frame times improved with profile evidence
out: Rendering fixes and profiling results.

## startup-time
desc: Reduce startup time of apps, CLIs, servers or mobile apps through lazy loading and deferring work. Use when launch is slow.
- Measure cold and warm start time.
- Trace what runs at startup.
- Defer non-critical initialisation.
- Lazy-load modules and reduce dependencies.
- Re-measure.
check: Startup time measured before and after
out: Startup optimisation report.

## cost-performance-tradeoff
desc: Balance performance against infrastructure cost: right instance sizes, autoscaling and caching ROI. Use when scaling decisions affect budget.
- Measure current performance and cost per request.
- Model options (bigger instances, more instances, caching).
- Estimate cost and performance for each.
- Recommend the best value option.
- Define metrics to re-evaluate.
check: Cost per request computed; options compared with numbers
out: Trade-off analysis.

# category: reliability | Reliability & Observability
agents: sre-engineer, observability-engineer

## slo-definition
desc: Define SLIs, SLOs and error budgets from user-facing behaviour. Use to set reliability targets.
- Identify critical user journeys.
- Choose SLIs (availability, latency, correctness) measurable from data.
- Set realistic SLO targets from history.
- Define error budget policy.
- Build dashboards and alerts on burn rate.
check: SLIs measurable; burn-rate alerts defined
out: SLO document and alert rules.

## logging-setup
desc: Set up structured logging with levels, correlation IDs, redaction and centralised collection. Use when logs are hard to search.
- Choose a structured logger for the stack.
- Add request/correlation IDs to every log line.
- Redact secrets and personal data.
- Set levels appropriately per environment.
- Ship logs to a central store.
check: JSON logs; IDs present; sensitive data redacted
out: Logging configuration.

## metrics-dashboards
desc: Instrument metrics and build dashboards (Prometheus/Grafana, Datadog, CloudWatch) for services. Use to see system health at a glance.
- Instrument golden signals per service.
- Add business metrics (signups, orders).
- Build an overview dashboard with key numbers on top.
- Add drill-down panels.
- Share links in runbooks.
check: Golden signals present; dashboard readable at a glance
out: Instrumentation and dashboard definition.

## alerting-rules
desc: Write actionable alerts with clear thresholds, severities, routing and runbook links; remove noisy alerts. Use when on-call is noisy or blind.
- List what should wake someone vs what can wait.
- Alert on symptoms (SLO burn) rather than causes when possible.
- Set severities and routing.
- Link every alert to a runbook.
- Review alert history and remove noise.
check: Every alert actionable with runbook
out: Alert rules and routing config.

## distributed-tracing
desc: Add distributed tracing with OpenTelemetry across services, queues and databases. Use when requests span many services.
- Install OpenTelemetry SDKs and auto-instrumentation.
- Propagate context across HTTP and messaging.
- Add custom spans for key business operations.
- Configure sampling.
- Export to a tracing backend and verify end-to-end traces.
check: Traces connect across services; sampling configured
out: Tracing setup and sample trace.

## runbook-writer
desc: Write operational runbooks with detection, diagnosis, mitigation and escalation steps. Use for recurring incidents and on-call readiness.
- Describe the symptom and how it is detected.
- List diagnosis commands with expected output.
- Give mitigation steps in order of safety.
- Define escalation contacts and criteria.
- Test the runbook during a drill.
check: Commands copy-pasteable; escalation defined
out: Runbook markdown.

## postmortem
desc: Write a blameless postmortem: summary, impact, timeline, root causes, what went well and action items. Use after any incident.
- Summarise impact in user terms and duration.
- Build a precise timeline.
- Find contributing causes with 5 whys.
- Note what went well and what was lucky.
- Define owned, dated action items.
check: Blameless language; actions owned and dated
out: Postmortem document.

## health-checks
desc: Implement liveness, readiness and dependency health checks and status pages. Use for any deployed service.
- Add a liveness endpoint that checks the process only.
- Add readiness that checks critical dependencies.
- Keep checks fast and cached.
- Wire into orchestrator and load balancer.
- Publish a status page for users if needed.
check: Liveness does not depend on downstream services
out: Health endpoints and config.

## chaos-testing
desc: Run controlled chaos experiments (kill instances, add latency, drop dependencies) to validate resilience. Use for systems claiming high availability.
- Form a hypothesis about steady state.
- Start in staging with a small blast radius.
- Inject one failure at a time.
- Observe metrics and user impact.
- Fix weaknesses and repeat.
check: Blast radius limited; abort plan ready
out: Experiment report and fixes.

## uptime-monitoring
desc: Set up external uptime and synthetic monitoring for sites, APIs and SSL expiry. Use for any public service.
- Choose endpoints and user journeys to check.
- Configure checks from multiple regions.
- Alert on consecutive failures.
- Monitor TLS certificate and domain expiry.
- Report uptime monthly.
check: Multi-region checks; cert expiry monitored
out: Monitoring configuration.

# category: data-engineering | Data Engineering
agents: data-engineer, analytics-engineer, database-architect

## etl-pipeline
desc: Build an ETL/ELT pipeline from sources to a warehouse with idempotent loads, scheduling and quality checks. Use to centralise data.
- Document sources, schemas, volumes and freshness.
- Extract incrementally with watermarks.
- Load raw, then transform in the warehouse.
- Make every run idempotent.
- Add quality checks and failure alerts.
check: Re-runs produce same result; quality checks present
out: Pipeline code and schedule.

## data-quality-checks
desc: Add data quality tests (Great Expectations, dbt tests, Soda) for nulls, uniqueness, ranges and freshness. Use when data cannot be trusted.
- Identify critical tables and columns.
- Define expectations per column.
- Add freshness and volume checks.
- Fail or alert on violations.
- Report quality over time.
check: Critical columns covered; alerts wired
out: Data quality test suite.

## dbt-models
desc: Build dbt models (staging, intermediate, marts) with tests, docs and incremental strategies. Use for analytics transformations.
- Create staging models that clean and rename source data.
- Build intermediate models for business logic.
- Build marts per business area.
- Add tests and documentation.
- Use incremental models for large tables.
check: Tests pass; docs generated
out: dbt project changes.

## streaming-pipeline
desc: Build streaming pipelines with Kafka, Kinesis, Pub/Sub or Flink: topics, consumers, windows and exactly-once concerns. Use for real-time data.
- Define events, keys and partitions.
- Choose processing framework.
- Handle late data with windows and watermarks.
- Make consumers idempotent.
- Monitor lag.
check: Consumer lag monitored; idempotency ensured
out: Streaming pipeline design and code.

## warehouse-design
desc: Design a data warehouse (BigQuery, Snowflake, Redshift, DuckDB) with dimensional models, partitioning and access control. Use when setting up analytics infrastructure.
- Choose warehouse by scale and budget.
- Design facts and dimensions (star schema).
- Partition and cluster large tables.
- Define access roles.
- Plan cost controls.
check: Partitioning matches queries; cost controls in place
out: Warehouse design.

## data-cleaning
desc: Clean messy datasets: fix types, duplicates, missing values, inconsistent categories and outliers with reproducible code. Use before analysis.
- Profile the data (types, nulls, uniques, ranges).
- Standardise formats (dates, numbers, text case).
- Deduplicate with clear rules.
- Handle missing values explicitly and document choices.
- Save cleaning as a reproducible script.
check: Every transformation documented; row counts reconciled
out: Clean dataset and cleaning script.

## csv-excel-processing
desc: Process CSV and Excel files with pandas or similar: merge, filter, pivot, reshape and export. Use for file-based data work.
- Load files with explicit types and encodings.
- Validate columns and row counts.
- Apply transformations step by step.
- Export with correct formats.
- Print a summary of changes.
check: Encodings handled; totals reconciled
out: Processed files and script.

## web-scraping-ethical
desc: Collect public web data responsibly: respect robots.txt and terms, rate-limit, cache and parse robustly. Use when no API exists and scraping is permitted.
- Check terms of service and robots.txt; prefer official APIs.
- Rate-limit and identify the client.
- Parse with robust selectors and handle layout changes.
- Store raw responses for reprocessing.
- Avoid collecting personal data unnecessarily.
check: Terms respected; rate-limited; no unnecessary personal data
out: Scraper code and dataset.

## data-catalog
desc: Document datasets: data dictionary, owners, lineage, freshness and sensitivity classification. Use when people do not know what data exists.
- Inventory tables and sources.
- Write descriptions for tables and columns.
- Assign owners and sensitivity levels.
- Document lineage.
- Publish searchable docs.
check: Owners and sensitivity set for every table
out: Data catalogue.

## change-data-capture
desc: Set up change data capture (Debezium, logical replication, Fivetran) to stream database changes downstream. Use to sync databases or feed warehouses in near real time.
- Choose CDC method supported by the database.
- Configure replication slots and permissions.
- Handle schema changes.
- Monitor lag and slot growth.
- Test recovery after outage.
check: Slot growth monitored; schema changes handled
out: CDC configuration.
