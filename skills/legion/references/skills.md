# Legion skill registry

300 procedures in 30 packs + 5 core skills. Invoke the pack skill (e.g. `legion-testing`), then read `procedures/<name>.md` inside it.

## Core

- `legion`
- `legion-council`
- `legion-help`
- `legion-memory`
- `legion-playbooks`

## Planning & Delivery — pack `legion-planning` — agents: `conductor`, `task-splitter`, `project-manager`

- `project-kickoff` — Start a new project from an idea: goals, scope, stack, milestones and first tasks. Use when the user says "I want to build X" with no plan yet.
- `work-breakdown` — Decompose a large task into small, independent work packages with dependencies and parallel waves. Use before handing big work to several agents.
- `estimate-effort` — Estimate time and effort for a feature or project with ranges and assumptions. Use when someone asks "how long will this take?".
- `sprint-planning` — Plan a sprint or week of work: pick backlog items by priority and capacity, define a sprint goal and daily plan. Use at the start of an iteration.
- `definition-of-done` — Create a definition of done and acceptance criteria checklist for a team or task. Use to stop "done" from meaning different things to different people.
- `risk-register` — Build a risk register for a project with likelihood, impact, owners and mitigations. Use for launches, migrations or any project with deadlines.
- `status-report` — Write a concise project status report: progress, next steps, blockers, decisions needed and health. Use for weekly updates to stakeholders.
- `retrospective` — Run a retrospective: what went well, what didn't, root causes and concrete actions. Use after a sprint, project or incident.
- `decision-matrix` — Compare options with a weighted decision matrix and recommend one. Use when choosing between tools, vendors, designs or strategies.
- `okr-builder` — Draft OKRs (objectives and measurable key results) for a person, team or product. Use for quarterly goal-setting.

## Architecture & System Design — pack `legion-architecture` — agents: `software-architect`, `microservices-engineer`, `database-architect`

- `system-design` — Design a system end to end: requirements, components, data flow, scaling and trade-offs with a diagram. Use for new products or interview-style design questions.
- `adr-writer` — Write Architecture Decision Records documenting context, options, decision and consequences. Use whenever a significant technical decision is made.
- `architecture-review` — Review an existing architecture for coupling, scalability, reliability, security and maintainability issues. Use when a system feels fragile or before scaling.
- `c4-diagrams` — Produce C4 model diagrams (context, container, component) as Mermaid or PlantUML. Use to explain a system to new developers or stakeholders.
- `monolith-to-services` — Plan an incremental migration from a monolith to modules or services using the strangler-fig pattern. Use when a monolith blocks team velocity.
- `event-driven-design` — Design event-driven systems: events, topics, schemas, consumers, ordering and delivery guarantees. Use when services need to react to each other asynchronously.
- `caching-strategy` — Design a caching strategy: what to cache, where, TTLs, invalidation and stampede protection. Use when reads are slow or expensive.
- `multi-tenancy-design` — Design multi-tenant SaaS architecture: isolation model, tenant routing, data partitioning, limits and billing hooks. Use when building B2B SaaS.
- `scalability-plan` — Plan how a system will handle 10x and 100x load: bottlenecks, scaling levers and capacity milestones. Use before growth or a big launch.
- `tech-stack-selection` — Choose a technology stack for a project based on requirements, team skills, ecosystem and cost. Use when starting something new or replacing a core technology.

## Frontend Development — pack `legion-frontend` — agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`

- `build-landing-page` — Build a responsive, fast landing page with hero, benefits, social proof, pricing and CTA. Use for product launches and marketing sites.
- `component-builder` — Create a reusable UI component with props API, variants, states, accessibility and tests. Use when adding buttons, modals, tables, dropdowns or any shared widget.
- `form-builder` — Build robust forms with validation, error messages, accessibility and submission handling. Use for signup, checkout, settings or any data entry.
- `state-management` — Choose and implement state management: server cache (React Query/SWR), global store (Zustand/Redux) or local state. Use when app state is tangled or duplicated.
- `responsive-layout` — Make a layout work across phone, tablet and desktop using modern CSS (flex, grid, container queries, clamp). Use when a page breaks on some screen sizes.
- `dark-mode` — Add light/dark theme support with CSS variables, system preference detection and a toggle. Use when a site needs a dark mode.
- `nextjs-app` — Scaffold or extend a Next.js app with App Router, server components, data fetching, metadata and deployment. Use for React web apps that need SSR or SEO.
- `frontend-testing` — Test frontend components and pages with Testing Library, Vitest/Jest and mock APIs (MSW). Use when UI code lacks tests.
- `tailwind-setup` — Set up or refactor Tailwind CSS with design tokens, theme config, component patterns and class organisation. Use for Tailwind projects or migrations to Tailwind.
- `i18n-setup` — Internationalise a frontend: extract strings, set up i18n library, locale routing, plurals, dates and currencies. Use when a product must support multiple languages (e.g. PT-BR and EN).

## Backend Development — pack `legion-backend` — agents: `backend-engineer`, `integration-engineer`, `auth-specialist`

- `crud-service` — Implement a complete CRUD feature: model, validation, service layer, endpoints, pagination and tests. Use for new resources in a backend.
- `background-jobs` — Add background jobs and queues (BullMQ, Celery, Sidekiq, cloud queues) with retries, idempotency and monitoring. Use for emails, reports, imports or slow work.
- `webhook-handler` — Build secure webhook receivers and senders: signature verification, idempotency, retries and replay. Use for Stripe, GitHub, payment or any event callbacks.
- `file-uploads` — Implement file uploads safely: presigned URLs, size/type limits, virus scanning, image processing and storage. Use for avatars, documents or media uploads.
- `email-notifications` — Send transactional emails and notifications with templates, queues, providers (SES, Resend, SendGrid) and deliverability setup. Use for signup, password reset, receipts or alerts.
- `payments-integration` — Integrate payments (Stripe, Mercado Pago, PayPal): checkout, subscriptions, webhooks, refunds and reconciliation. Use when a product needs to charge money.
- `search-feature` — Add search: database full-text, Postgres trigram, Meilisearch/Typesense/Elasticsearch, with ranking, filters and typo tolerance. Use when users need to find content.
- `rate-limiting` — Add rate limiting and throttling to APIs (token bucket, sliding window) per user, IP or key. Use to protect endpoints from abuse and overload.
- `config-management` — Organise application configuration and environment variables with validation, defaults and per-environment overrides. Use when config is scattered or deployments fail from missing variables.
- `login-flow` — Implement signup, login, logout, password reset and email verification with secure sessions or a managed auth provider. Use when an app needs user accounts.

## API Design & Integration — pack `legion-api` — agents: `api-designer`, `backend-engineer`, `integration-engineer`

- `rest-api-design` — Design a RESTful API with resources, methods, status codes, errors, pagination and filtering. Use before building endpoints.
- `openapi-spec` — Write or generate an OpenAPI 3 specification with schemas, examples, security schemes and validation. Use to document an API or generate clients.
- `graphql-schema` — Design a GraphQL schema with types, queries, mutations, pagination, errors and resolver performance (DataLoader). Use for GraphQL APIs.
- `api-versioning` — Plan API versioning, deprecation and backward-compatible changes. Use before making breaking changes to a public API.
- `api-client-sdk` — Build a typed API client or SDK with auth, retries, pagination helpers and error types. Use to make an API easy to consume.
- `third-party-api-integration` — Integrate any external API safely: read docs, auth, rate limits, error handling, adapters and mocks. Use when connecting to a new service.
- `api-error-handling` — Standardise API error handling: error codes, messages, logging, client guidance and mapping from exceptions. Use when errors are inconsistent or leak internals.
- `api-testing` — Test APIs with integration and contract tests (Supertest, pytest, Postman/Newman, Pact). Use to verify endpoints and prevent breaking clients.
- `api-docs-portal` — Produce developer-friendly API documentation: quickstart, auth guide, reference and code samples. Use when external developers will use the API.
- `grpc-service` — Design and implement gRPC services with protobuf schemas, streaming, deadlines and error codes. Use for high-performance internal service communication.

## Databases & Data Modelling — pack `legion-database` — agents: `database-architect`, `backend-engineer`

- `schema-design` — Design a relational schema with tables, keys, constraints, relationships and indexes from requirements. Use when starting a data model.
- `migration-writer` — Write safe database migrations, including zero-downtime changes (expand/contract) and rollback scripts. Use for any schema change in production.
- `query-optimization` — Speed up slow SQL queries using EXPLAIN plans, indexes, query rewrites and statistics. Use when a query or page is slow because of the database.
- `sql-writer` — Write correct, readable SQL for reporting and analysis: joins, CTEs, window functions and aggregations. Use when someone needs a query written or explained.
- `nosql-modeling` — Model data for MongoDB, DynamoDB, Firestore or Redis based on access patterns. Use when using a document or key-value database.
- `orm-usage` — Use ORMs (Prisma, Drizzle, SQLAlchemy, TypeORM, Django ORM) efficiently: relations, eager loading, transactions and raw SQL escapes. Use when ORM code is slow or confusing.
- `backup-restore` — Set up database backups, point-in-time recovery and tested restore procedures. Use for any production database.
- `seed-data` — Create realistic seed and test data with factories, fixtures and anonymised production samples. Use for local development, demos and tests.
- `postgres-tuning` — Tune PostgreSQL: configuration, connection pooling, vacuum, indexes, partitioning and monitoring. Use when Postgres is slow or overloaded.
- `data-integrity-audit` — Audit a database for integrity problems: orphans, duplicates, invalid values and missing constraints. Use before migrations or when data looks wrong.

## Testing — pack `legion-testing` — agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`

- `write-unit-tests` — Write unit tests for a function, class or module covering behaviour, edge cases and errors. Use when code lacks tests.
- `tdd-cycle` — Develop a feature test-first with red-green-refactor cycles. Use when building logic-heavy code where correctness matters.
- `e2e-playwright` — Write end-to-end browser tests with Playwright for critical user journeys. Use for signup, login, checkout or any key flow.
- `test-coverage-gaps` — Find untested critical code using coverage reports and risk analysis, then add the most valuable tests. Use to improve confidence quickly.
- `flaky-test-fixer` — Diagnose and fix flaky tests caused by timing, shared state, order dependence or network. Use when CI fails randomly.
- `mocking-strategy` — Decide what to mock, stub or fake in tests and implement it cleanly (MSW, test doubles, in-memory fakes). Use when tests are brittle or slow because of dependencies.
- `load-testing` — Run load and stress tests (k6, Locust, Artillery) to find capacity limits and bottlenecks. Use before launches or when scaling.
- `regression-suite` — Build a regression test suite from past bugs and critical behaviours. Use after recurring bugs or before refactors.
- `property-based-testing` — Use property-based testing (fast-check, Hypothesis) to find edge cases automatically. Use for parsers, algorithms, serializers and financial calculations.
- `manual-test-plan` — Write a manual QA test plan with test cases, steps, expected results and devices. Use before releases when automation is incomplete.

## Debugging & Troubleshooting — pack `legion-debugging` — agents: `debugger`, `observability-engineer`

- `root-cause-analysis` — Find the root cause of a bug systematically: reproduce, hypothesise, test, fix and prevent. Use for any bug whose cause is unclear.
- `stack-trace-reader` — Read and explain stack traces and error messages, locate the failing code and propose fixes. Use when the user pastes an error.
- `git-bisect` — Find the commit that introduced a bug using git bisect with an automated test. Use for regressions that "used to work".
- `memory-leak-hunt` — Find and fix memory leaks using heap snapshots, profilers and growth analysis. Use when memory grows until crashes.
- `production-incident` — Guide incident response: triage, mitigate, communicate, resolve and write a postmortem. Use when production is down or degraded.
- `log-analysis` — Analyse logs to find errors, patterns and anomalies using grep, jq, or log query languages. Use when investigating behaviour from logs.
- `network-debugging` — Debug network and HTTP problems: DNS, TLS, CORS, timeouts, proxies and status codes. Use when requests fail or hang.
- `performance-regression` — Investigate why something became slower after a change, using profiling and comparison. Use after deploys that degrade performance.
- `environment-issues` — Fix "works on my machine" problems: versions, env vars, paths, OS differences and dependency mismatches. Use when code behaves differently across machines or CI.
- `crash-report-triage` — Triage crash and error reports (Sentry, Crashlytics) by frequency, impact and root cause. Use when there are many errors and limited time.

## Code Quality & Refactoring — pack `legion-code-quality` — agents: `code-reviewer`, `refactoring-expert`, `legacy-modernizer`

- `code-review` — Review a diff or pull request for correctness, security, performance, readability and tests with prioritised comments. Use before merging.
- `refactor-safely` — Refactor code in small verified steps without changing behaviour. Use when code is hard to read or change.
- `dead-code-removal` — Find and remove unused code, files, dependencies, feature flags and exports. Use to shrink and simplify a codebase.
- `naming-cleanup` — Improve naming of variables, functions, files and modules for clarity and consistency. Use when code is hard to understand.
- `lint-format-setup` — Set up linters and formatters (ESLint, Prettier, Ruff, Black, gofmt) with pre-commit hooks and CI. Use for consistent style.
- `type-safety` — Add or strengthen static types (TypeScript strict, mypy, Pydantic) and remove any/unsafe casts. Use to catch bugs at compile time.
- `complexity-reduction` — Reduce cyclomatic complexity: simplify long functions, deep nesting and big conditionals. Use when functions are hard to follow.
- `duplication-removal` — Find duplicated logic and consolidate it into shared, well-named abstractions without over-engineering. Use when the same fix must be made in many places.
- `framework-upgrade` — Upgrade a framework or language version (React, Next, Django, Node, Python) following official migration guides. Use for major version upgrades.
- `coding-standards` — Write a coding standards guide for a project from its existing conventions. Use to onboard developers or align a team.

## Security (defensive) — pack `legion-security` — agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`

- `security-review` — Run a defensive security review of your own code against OWASP Top 10 with severity and fixes. Use before releases or after big changes.
- `owasp-checklist` — Walk through the OWASP Top 10 and ASVS checklist for a web app and record pass/fail with evidence. Use for structured security assessments.
- `secret-scan` — Scan code and git history for leaked secrets and remediate (rotate, remove, prevent). Use when credentials may have been committed.
- `dependency-audit` — Audit dependencies for vulnerabilities and licence issues and plan upgrades. Use regularly or before releases.
- `input-validation` — Add strict input validation and sanitisation at every trust boundary (schemas, allowlists, encoding). Use to prevent injection and bad data.
- `security-headers` — Configure security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors, referrer and permissions policies, CORS. Use when hardening a web app.
- `threat-model` — Create a STRIDE threat model with data-flow diagram, threats and mitigations. Use when designing features that handle sensitive data or money.
- `access-control-review` — Review authorisation logic for broken access control: IDOR, privilege escalation and missing checks. Use for multi-user or multi-tenant apps.
- `encryption-setup` — Apply encryption correctly: TLS everywhere, encryption at rest, key management and password hashing. Use when storing or transmitting sensitive data.
- `security-incident-response` — Respond to a suspected security incident in your own systems: contain, preserve evidence, eradicate, recover and notify. Use when a breach or compromise is suspected.

## DevOps & CI/CD — pack `legion-devops` — agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`

- `github-actions-ci` — Create a GitHub Actions CI pipeline with lint, test, build, caching and matrix builds. Use for any repo without CI.
- `dockerize-app` — Containerise an application with a small, secure multi-stage Dockerfile and docker-compose for local development. Use to run an app anywhere.
- `kubernetes-deploy` — Deploy to Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, probes and resource limits (or Helm). Use for k8s deployments.
- `deploy-pipeline` — Build a continuous deployment pipeline with environments, approvals, migrations and rollback. Use to automate releases.
- `preview-environments` — Set up per-pull-request preview deployments (Vercel, Netlify, Render, Fly, k8s namespaces). Use to review changes live before merge.
- `infrastructure-as-code` — Write Terraform, Pulumi or CDK code for infrastructure with modules, state management and plans. Use to stop clicking in cloud consoles.
- `dev-environment-setup` — Create a one-command developer setup (Makefile, scripts, devcontainer, mise/asdf) that works on Windows, Mac and Linux. Use when onboarding is slow.
- `release-automation` — Automate versioning, changelogs and releases (semantic-release, changesets, release-please). Use to stop manual release chores.
- `pre-commit-hooks` — Set up pre-commit hooks for formatting, linting, tests and secret scanning (husky, lefthook, pre-commit). Use to catch problems before they reach CI.
- `monorepo-setup` — Organise a monorepo with workspaces, shared packages, task caching (Turborepo, Nx, pnpm) and CI filtering. Use when multiple apps share code.

## Cloud & Infrastructure — pack `legion-cloud` — agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`

- `aws-architecture` — Design AWS architectures using managed services (Lambda, ECS, RDS, S3, CloudFront, SQS) with IAM and networking. Use for building on AWS.
- `gcp-architecture` — Design Google Cloud architectures (Cloud Run, GKE, Cloud SQL, Pub/Sub, BigQuery, Firebase). Use for building on GCP.
- `azure-architecture` — Design Azure architectures (App Service, Functions, AKS, Cosmos DB, Azure SQL, Entra ID). Use for building on Azure.
- `serverless-app` — Build serverless applications with functions, managed queues, storage and API gateways, handling cold starts and limits. Use for event-driven or spiky workloads.
- `edge-deploy` — Deploy apps and functions to edge platforms (Cloudflare Workers, Vercel, Netlify) with caching, KV and CDN rules. Use for global low-latency sites.
- `cloud-cost-review` — Review cloud bills and find savings: idle resources, rightsizing, commitments, storage tiers and data transfer. Use when costs grow unexpectedly.
- `iam-least-privilege` — Review and tighten IAM policies to least privilege, removing wildcards and unused permissions. Use for cloud security hardening.
- `dns-domains` — Configure domains and DNS records (A, CNAME, MX, TXT, SPF, DKIM, DMARC) and TLS certificates. Use when connecting a domain to a site or email.
- `disaster-recovery` — Plan disaster recovery: RPO/RTO, backups, multi-region failover and recovery drills. Use for business-critical systems.
- `vps-setup` — Set up a VPS (Hetzner, DigitalOcean, Lightsail) securely with SSH keys, firewall, updates, reverse proxy and TLS. Use for simple self-hosting.

## Performance — pack `legion-performance` — agents: `performance-engineer`, `web-performance-tuner`

- `profile-app` — Profile an application (CPU, memory, I/O) with the right tools for the language to find real bottlenecks. Use before optimising anything.
- `core-web-vitals` — Improve Core Web Vitals (LCP, INP, CLS) using Lighthouse and field data. Use when a site scores poorly or ranks badly.
- `bundle-size` — Reduce JavaScript bundle size with analysis, code splitting, tree shaking and dependency replacement. Use when apps load slowly.
- `image-optimization` — Optimise images: modern formats (AVIF/WebP), responsive sizes, lazy loading and CDN transformation. Use when images slow down pages.
- `api-latency` — Reduce API response time by finding slow dependencies, queries and serialisation, then caching or parallelising. Use when endpoints are slow.
- `caching-implementation` — Implement caching (Redis, in-memory, HTTP cache headers, CDN) with correct keys, TTLs and invalidation. Use after deciding what to cache.
- `database-performance` — Fix database-driven slowness: N+1 queries, missing indexes, connection pool limits and lock contention. Use when the database is the bottleneck.
- `frontend-rendering` — Fix slow rendering in web apps: unnecessary re-renders, large lists, layout thrashing and heavy animations. Use when the UI feels janky.
- `startup-time` — Reduce startup time of apps, CLIs, servers or mobile apps through lazy loading and deferring work. Use when launch is slow.
- `cost-performance-tradeoff` — Balance performance against infrastructure cost: right instance sizes, autoscaling and caching ROI. Use when scaling decisions affect budget.

## Reliability & Observability — pack `legion-reliability` — agents: `sre-engineer`, `observability-engineer`

- `slo-definition` — Define SLIs, SLOs and error budgets from user-facing behaviour. Use to set reliability targets.
- `logging-setup` — Set up structured logging with levels, correlation IDs, redaction and centralised collection. Use when logs are hard to search.
- `metrics-dashboards` — Instrument metrics and build dashboards (Prometheus/Grafana, Datadog, CloudWatch) for services. Use to see system health at a glance.
- `alerting-rules` — Write actionable alerts with clear thresholds, severities, routing and runbook links; remove noisy alerts. Use when on-call is noisy or blind.
- `distributed-tracing` — Add distributed tracing with OpenTelemetry across services, queues and databases. Use when requests span many services.
- `runbook-writer` — Write operational runbooks with detection, diagnosis, mitigation and escalation steps. Use for recurring incidents and on-call readiness.
- `postmortem` — Write a blameless postmortem: summary, impact, timeline, root causes, what went well and action items. Use after any incident.
- `health-checks` — Implement liveness, readiness and dependency health checks and status pages. Use for any deployed service.
- `chaos-testing` — Run controlled chaos experiments (kill instances, add latency, drop dependencies) to validate resilience. Use for systems claiming high availability.
- `uptime-monitoring` — Set up external uptime and synthetic monitoring for sites, APIs and SSL expiry. Use for any public service.

## Data Engineering — pack `legion-data-engineering` — agents: `data-engineer`, `analytics-engineer`, `database-architect`

- `etl-pipeline` — Build an ETL/ELT pipeline from sources to a warehouse with idempotent loads, scheduling and quality checks. Use to centralise data.
- `data-quality-checks` — Add data quality tests (Great Expectations, dbt tests, Soda) for nulls, uniqueness, ranges and freshness. Use when data cannot be trusted.
- `dbt-models` — Build dbt models (staging, intermediate, marts) with tests, docs and incremental strategies. Use for analytics transformations.
- `streaming-pipeline` — Build streaming pipelines with Kafka, Kinesis, Pub/Sub or Flink: topics, consumers, windows and exactly-once concerns. Use for real-time data.
- `warehouse-design` — Design a data warehouse (BigQuery, Snowflake, Redshift, DuckDB) with dimensional models, partitioning and access control. Use when setting up analytics infrastructure.
- `data-cleaning` — Clean messy datasets: fix types, duplicates, missing values, inconsistent categories and outliers with reproducible code. Use before analysis.
- `csv-excel-processing` — Process CSV and Excel files with pandas or similar: merge, filter, pivot, reshape and export. Use for file-based data work.
- `web-scraping-ethical` — Collect public web data responsibly: respect robots.txt and terms, rate-limit, cache and parse robustly. Use when no API exists and scraping is permitted.
- `data-catalog` — Document datasets: data dictionary, owners, lineage, freshness and sensitivity classification. Use when people do not know what data exists.
- `change-data-capture` — Set up change data capture (Debezium, logical replication, Fivetran) to stream database changes downstream. Use to sync databases or feed warehouses in near real time.

## Data Analysis & Visualisation — pack `legion-data-analysis` — agents: `data-analyst`, `data-visualizer`, `analytics-engineer`

- `exploratory-analysis` — Run exploratory data analysis: profile, distributions, correlations, outliers and first insights. Use when receiving a new dataset.
- `ab-test-analysis` — Analyse A/B tests correctly: sample size, significance, confidence intervals, guardrail metrics and peeking pitfalls. Use to decide if an experiment won.
- `cohort-retention` — Build cohort and retention analyses to see how user behaviour changes over time. Use for product engagement and churn questions.
- `funnel-analysis` — Analyse conversion funnels to find where users drop off and why. Use for signup, onboarding or checkout optimisation.
- `kpi-dashboard` — Design a KPI dashboard: metric definitions, layout, targets and refresh. Use to track business or product health.
- `chart-maker` — Create a clear, honest chart from data with the right chart type, labels and a takeaway title. Use whenever data should be visualised.
- `statistical-testing` — Choose and run the right statistical test (t-test, chi-square, Mann-Whitney, regression) and explain results plainly. Use when comparing groups or testing relationships.
- `forecasting` — Forecast time series (sales, demand, traffic) with baselines, seasonality and uncertainty intervals. Use for planning.
- `survey-analysis` — Analyse survey results: response rates, Likert scales, cross-tabs, open-text themes and bias. Use after collecting survey data.
- `spreadsheet-analysis` — Analyse data in spreadsheets with formulas, pivot tables and charts. Use for Excel or Google Sheets analysis.

## Machine Learning — pack `legion-ml` — agents: `ml-engineer`, `data-engineer`

- `ml-baseline` — Build a quick, honest ML baseline with proper splits and metrics before trying complex models. Use at the start of any ML project.
- `feature-engineering` — Create and select features: encoding, scaling, aggregations, time features and leakage checks. Use to improve model performance.
- `model-evaluation` — Evaluate models thoroughly: metrics, confusion matrix, calibration, slices, fairness and error analysis. Use before shipping a model.
- `hyperparameter-tuning` — Tune hyperparameters with cross-validation and Optuna/grid/random search within a budget. Use to squeeze performance.
- `model-deployment` — Deploy a model as an API or batch job with versioning, monitoring and rollback. Use to put a model in production.
- `computer-vision` — Build computer vision solutions: classification, detection, OCR with pretrained models and fine-tuning. Use for image or video tasks.
- `nlp-classification` — Build text classification or extraction with classic NLP, embeddings or LLMs, choosing the cheapest approach that works. Use for tagging, sentiment, routing.
- `recommendation-system` — Build recommendations: popularity, collaborative filtering, content-based and hybrid, with offline and online evaluation. Use for "you may also like".
- `anomaly-detection` — Detect anomalies in metrics, transactions or sensor data with statistical and ML methods. Use for fraud, monitoring or IoT alerts.
- `ml-experiment-tracking` — Set up experiment tracking (MLflow, Weights & Biases) for parameters, metrics, artifacts and data versions. Use when experiments are hard to compare.

## LLMs, Agents & Prompting — pack `legion-llm` — agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`

- `prompt-optimizer` — Improve a prompt with clear instructions, context, examples and output format, tested on sample inputs. Use when an AI gives inconsistent results.
- `system-prompt-writer` — Write a system prompt for a chatbot or agent: role, tone, capabilities, boundaries, tools and response format. Use when building an assistant.
- `agent-builder` — Build an AI agent with tool calling, a loop, memory and guardrails (Claude Agent SDK, OpenAI Agents SDK, LangGraph). Use for autonomous task automation.
- `rag-pipeline` — Build a retrieval-augmented generation pipeline: ingestion, chunking, embeddings, vector store, retrieval, reranking and cited answers. Use for document Q&A.
- `llm-evals` — Build evaluation sets and automated graders for LLM features (exact match, rubric, LLM-as-judge). Use to measure AI quality before changes.
- `structured-output` — Get reliable structured output (JSON) from LLMs using schemas, tool calling and validation with retries. Use when parsing model output.
- `llm-cost-control` — Reduce LLM costs with model routing, prompt caching, shorter prompts, batching and output limits. Use when AI bills are high.
- `mcp-server-builder` — Build a Model Context Protocol (MCP) server exposing tools and resources to Claude, Codex and other clients. Use to connect AI assistants to your systems.
- `claude-skill-writer` — Write a new Agent Skill (SKILL.md with name and description frontmatter) that works in Claude Code and Codex. Use to teach the assistant a repeatable procedure.
- `ai-safety-guardrails` — Add guardrails to AI features: input/output filtering, prompt-injection defences, PII handling and human review. Use before exposing LLM features to users.

## Mobile Development — pack `legion-mobile` — agents: `mobile-engineer`, `ui-designer`, `release-manager`

- `react-native-app` — Build or extend a React Native / Expo app with navigation, state, native modules and builds. Use for cross-platform mobile apps in JavaScript/TypeScript.
- `flutter-app` — Build Flutter apps with widgets, state management, theming and platform channels. Use for Flutter/Dart projects.
- `ios-swiftui` — Build native iOS features with SwiftUI, async/await, Combine and Apple frameworks. Use for native iPhone/iPad development.
- `android-kotlin` — Build native Android features with Kotlin, Jetpack Compose, coroutines and Android architecture components. Use for native Android development.
- `offline-sync` — Design offline-first data and sync: local database, queues, conflict resolution and background sync. Use for apps used with unreliable connectivity.
- `push-notifications` — Implement push notifications (APNs, FCM, Expo) with permissions, tokens, deep links and preferences. Use to re-engage users.
- `app-store-release` — Prepare App Store and Google Play releases: metadata, screenshots, privacy labels, review guidelines and staged rollout. Use before publishing a mobile app.
- `mobile-performance` — Improve mobile app performance: startup, frame rate, memory, battery and app size. Use when apps feel slow or drain battery.
- `deep-linking` — Set up deep links and universal/app links with routing, fallbacks and attribution. Use for sharing links and marketing campaigns.
- `mobile-analytics` — Instrument mobile analytics and crash reporting with privacy-respecting event tracking. Use to understand app usage.

## Git & Collaboration — pack `legion-git` — agents: `release-manager`, `code-reviewer`, `devops-engineer`

- `commit-message` — Write clear conventional commit messages from staged changes. Use before committing.
- `pull-request-writer` — Write a pull request description with summary, changes, testing evidence, screenshots and risks. Use when opening a PR.
- `branching-strategy` — Choose and document a branching strategy (trunk-based, GitHub flow, release branches) with protection rules. Use to organise team git workflow.
- `merge-conflict-resolver` — Resolve git merge or rebase conflicts by understanding both sides' intent. Use when a merge is stuck.
- `git-history-cleanup` — Clean up git history safely: squash, reorder, split commits, or remove large files and secrets with filter-repo. Use before merging or after mistakes.
- `changelog-writer` — Write a user-facing changelog from commits and PRs following Keep a Changelog. Use for releases.
- `repo-setup` — Set up a professional GitHub repository: README, licence, .gitignore, templates, CI, branch protection and topics. Use when creating or publishing a project.
- `code-owners` — Set up CODEOWNERS and review rules so the right people review changes. Use for multi-team repos.
- `open-source-launch` — Prepare a project for open-source release: licence, docs, contribution guide, code of conduct, issue labels and announcement. Use before publishing a project publicly.
- `github-issues-triage` — Triage GitHub issues: label, deduplicate, prioritise, request info and close stale ones. Use for busy repositories.

## Documentation — pack `legion-docs` — agents: `technical-writer`, `documentation-engineer`

- `readme-writer` — Write a great README: what it is, why, install, quick start, usage, configuration, contributing and licence. Use for any project.
- `api-reference-docs` — Generate and polish API reference docs from code or OpenAPI specs. Use when developers need complete reference material.
- `tutorial-writer` — Write step-by-step tutorials that take a beginner from zero to a working result. Use for onboarding users or developers.
- `architecture-docs` — Document system architecture for developers: overview, components, data flow, decisions and operations. Use for onboarding and knowledge sharing.
- `docstrings` — Add docstrings and inline documentation to public functions, classes and modules in the project's style. Use when code lacks documentation.
- `user-guide` — Write end-user help documentation and FAQs in plain language with screenshots placeholders. Use for product help centres.
- `onboarding-guide` — Write a developer onboarding guide: setup, architecture tour, workflows, conventions and first tasks. Use when new people join a project.
- `docs-site` — Set up a documentation website (Docusaurus, MkDocs Material, VitePress, Starlight) with navigation, search and deployment. Use when docs outgrow a README.
- `diagram-as-code` — Create diagrams as code with Mermaid, PlantUML or D2: flowcharts, sequence, ER, state and architecture diagrams. Use to explain flows visually.
- `docs-audit` — Audit documentation for outdated content, broken links, gaps and inconsistencies. Use periodically.

## UX, UI & Accessibility — pack `legion-ux-design` — agents: `ux-designer`, `ui-designer`, `accessibility-expert`, `design-system-builder`, `ux-researcher`

- `user-flow` — Map user flows for a task from entry to success, including errors and alternatives. Use before designing screens.
- `wireframe` — Create low-fidelity wireframes (ASCII, Mermaid or simple HTML) for key screens with annotations. Use to agree layout before visual design.
- `ui-polish` — Improve the visual quality of an interface: hierarchy, spacing, typography, colour and consistency. Use when a UI looks amateur.
- `design-tokens` — Define design tokens (colour, type, spacing, radius, shadow, motion) and export them to CSS/Tailwind/JSON. Use to create a consistent design foundation.
- `accessibility-audit` — Audit a site or app for WCAG 2.2 AA issues with automated and manual checks, then fix them. Use before launch.
- `usability-heuristics` — Evaluate an interface against Nielsen's 10 usability heuristics and propose fixes. Use for quick UX reviews.
- `microcopy` — Write UI microcopy: buttons, labels, errors, empty states, tooltips and confirmations. Use to make interfaces clearer.
- `persona-builder` — Create evidence-based personas or jobs-to-be-done profiles from research data. Use to align a team on who the user is.
- `usability-test-plan` — Plan and run usability tests: tasks, script, recruitment, metrics and synthesis. Use to validate designs with users.
- `design-critique` — Critique a design or screenshot constructively: goals, hierarchy, clarity, consistency, accessibility. Use for feedback on mockups.

## Product Management — pack `legion-product` — agents: `product-manager`, `requirements-analyst`, `roadmap-planner`, `ux-researcher`

- `prd-writer` — Write a product requirements document: problem, goals, users, stories, scope, metrics and open questions. Use when defining a feature.
- `user-stories` — Write user stories with acceptance criteria (Given/When/Then) and split them to be small. Use for backlog creation.
- `prioritization` — Prioritise a backlog with RICE, ICE, MoSCoW or Kano and explain trade-offs. Use when there is more to do than time.
- `mvp-scoping` — Cut a product idea down to a minimum viable product that tests the riskiest assumption. Use before building a new product.
- `feature-spec` — Write a technical-friendly feature spec bridging product and engineering: behaviour, rules, states, edge cases and analytics. Use before implementation.
- `competitive-analysis` — Compare competitors' features, pricing, positioning and reviews to find opportunities. Use for product strategy.
- `product-metrics` — Define product metrics: north star, input metrics, guardrails and instrumentation. Use to measure product success.
- `customer-feedback-synthesis` — Synthesise customer feedback from tickets, reviews and interviews into themes, counts and recommendations. Use to decide what to fix or build.
- `roadmap-builder` — Build a Now/Next/Later roadmap with themes, outcomes and dependencies. Use for planning communication.
- `launch-plan` — Plan a product or feature launch: readiness checklist, messaging, channels, timeline and success metrics. Use before going live.

## Marketing & Growth — pack `legion-marketing` — agents: `growth-strategist`, `seo-specialist`, `social-media-manager`, `content-strategist`

- `seo-audit` — Audit a website's SEO: technical issues, on-page factors, content gaps and quick wins. Use to increase organic traffic.
- `keyword-research` — Research keywords by intent, volume and difficulty and map them to pages. Use for content and SEO planning.
- `marketing-plan` — Build a marketing plan: audience, positioning, channels, budget, calendar and KPIs. Use for launching or growing a business.
- `email-campaign` — Write email campaigns and sequences (welcome, nurture, launch, re-engagement) with subject lines and CTAs. Use for email marketing.
- `ad-copy` — Write ad copy for Google, Meta, LinkedIn and TikTok within platform limits, with variants for testing. Use for paid campaigns.
- `growth-experiments` — Design growth experiments with hypotheses, metrics, sample sizes and ICE scores. Use to grow systematically.
- `social-content-calendar` — Create a social media content calendar with post ideas, formats, captions and schedule. Use for consistent social presence.
- `landing-page-copy` — Write conversion-focused landing page copy: headline, subhead, benefits, objections, proof and CTA. Use for product or campaign pages.
- `brand-voice` — Define a brand voice and tone guide with traits, do/don't examples and vocabulary. Use to keep communication consistent.
- `analytics-tracking-plan` — Create a marketing analytics tracking plan with UTM conventions, events, conversions and attribution. Use before campaigns.

## Writing & Communication — pack `legion-writing` — agents: `copywriter`, `content-strategist`, `translator`, `technical-writer`

- `blog-post` — Write a well-structured blog post with hook, clear sections, examples and SEO basics. Use for content marketing or thought leadership.
- `email-writer` — Write clear professional emails: requests, follow-ups, updates, apologies and negotiations. Use for any important email.
- `rewrite-clarity` — Rewrite text to be clearer, shorter and easier to read while keeping meaning. Use to improve any draft.
- `translate-localize` — Translate and localise text between languages (e.g. Portuguese, English, Spanish) preserving tone, idioms and formatting. Use for multilingual content.
- `summarize-document` — Summarise long documents, reports, transcripts or threads into key points, decisions and action items. Use to digest content quickly.
- `proofread` — Proofread text for grammar, spelling, punctuation, consistency and style. Use before publishing anything.
- `press-release` — Write a press release with headline, dateline, lead, quotes, boilerplate and contact. Use for announcements.
- `speech-script` — Write speeches, talk scripts or video scripts with structure, timing and delivery cues. Use for presentations or videos.
- `newsletter` — Write a newsletter issue with sections, curated links, commentary and a CTA. Use for regular audience updates.
- `tone-adapter` — Adapt a text to a different tone or audience (formal, casual, technical, executive, friendly) without changing facts. Use when the same message must reach different readers.

## Research & Analysis — pack `legion-research` — agents: `research-analyst`, `market-researcher`

- `deep-research` — Research a question in depth using multiple sources, compare evidence and produce a cited report with confidence levels. Use for complex questions.
- `fact-check` — Verify claims against reliable sources and rate them true, false, misleading or unverified. Use before publishing or deciding.
- `literature-review` — Review academic or technical literature: search, screen, summarise and synthesise findings. Use for research projects.
- `market-sizing` — Estimate TAM, SAM and SOM with top-down and bottom-up methods and explicit assumptions. Use for business plans and pitches.
- `competitor-teardown` — Analyse a single competitor deeply: product, pricing, positioning, funnel, tech and weaknesses. Use to understand a rival.
- `technology-comparison` — Compare technologies, tools or vendors on features, performance, cost, maturity and fit with sources. Use for tool selection.
- `trend-analysis` — Identify and assess trends in an industry or technology with evidence and implications. Use for strategy.
- `interview-synthesis` — Synthesise interview notes or transcripts into themes, quotes and insights. Use after customer or expert interviews.
- `swot-analysis` — Build a SWOT analysis with evidence and turn it into strategic actions. Use for strategy planning.
- `source-evaluation` — Evaluate the credibility of sources: authority, methodology, bias, recency and corroboration. Use when sources conflict.

## Business & Finance — pack `legion-business-finance` — agents: `business-analyst`, `financial-analyst`, `project-manager`

- `business-plan` — Write a business plan: problem, solution, market, model, go-to-market, operations, team, financials and risks. Use for starting a business or seeking funding.
- `financial-model` — Build a financial model with revenue, costs, cash flow, scenarios and sensitivity in a spreadsheet. Use for planning and fundraising (not personalised financial advice).
- `pricing-strategy` — Design pricing: value metrics, tiers, price points, discounting and experiments. Use for SaaS or product pricing decisions.
- `unit-economics` — Compute unit economics: CAC, LTV, payback, gross margin and contribution margin. Use to check business viability.
- `pitch-deck` — Create a startup pitch deck outline: problem, solution, market, traction, model, competition, team, ask. Use for fundraising.
- `budget-planner` — Create a budget with categories, forecasts, actuals tracking and variance analysis. Use for personal, project or company budgets.
- `process-mapping` — Map business processes (as-is and to-be) with swimlanes, bottlenecks and improvements. Use for operational improvement.
- `invoice-quote` — Create professional quotes, proposals and invoice templates with clear scope, terms and totals. Use for freelancers and small businesses.
- `kpi-definition` — Define business KPIs with formulas, data sources, owners, targets and review cadence. Use to manage performance.
- `startup-validation` — Validate a startup idea quickly: problem interviews, landing page tests, pre-sales and success criteria. Use before building.

## Productivity & Automation — pack `legion-productivity` — agents: `operations-automator`, `presentation-designer`, `project-manager`

- `automate-task` — Automate a repetitive computer task with a script (Python, Node, Bash, PowerShell) that runs on Windows, Mac or Linux. Use when someone repeats the same steps often.
- `file-organizer` — Organise files and folders: rename in bulk, sort by type or date, deduplicate and archive. Use to clean up messy folders.
- `spreadsheet-builder` — Build spreadsheets with clean structure, formulas, validation, conditional formatting and charts. Use for trackers, calculators and reports.
- `presentation-builder` — Create presentation slides with storyline, headlines, visuals and speaker notes. Use for meetings, talks and pitches.
- `meeting-notes` — Turn meeting transcripts or notes into summaries with decisions, action items, owners and dates. Use after meetings.
- `no-code-automation` — Design automations in Zapier, Make, n8n or Power Automate connecting apps with triggers, filters and error handling. Use for business workflows without code.
- `personal-planner` — Create a weekly plan or schedule balancing priorities, deadlines, energy and routines. Use for time management.
- `sop-writer` — Write standard operating procedures with purpose, scope, steps, roles and checklists. Use to document how work is done.
- `email-triage` — Triage an inbox: categorise, prioritise, draft replies and set up filters. Use when email is overwhelming.
- `shell-scripting` — Write robust shell scripts (Bash, PowerShell) with argument parsing, error handling, logging and portability. Use for command-line automation.

## Legal, Privacy & Compliance (not legal advice) — pack `legion-legal-privacy` — agents: `legal-researcher`, `privacy-engineer`, `compliance-analyst`

- `privacy-policy` — Draft a privacy policy reflecting actual data practices, LGPD/GDPR/CCPA disclosures and user rights, marked for legal review. Use when launching an app or site.
- `terms-of-service` — Draft terms of service covering usage, accounts, payments, IP, liability and termination, marked for legal review. Use for apps and SaaS.
- `contract-review` — Review a contract for key terms, obligations, risks and unusual clauses, summarised in plain language (not legal advice). Use before signing.
- `lgpd-gdpr-compliance` — Assess LGPD/GDPR compliance technically: data inventory, legal bases, consent, rights requests, DPAs and breach process. Use when processing personal data.
- `cookie-consent` — Implement cookie consent with categories, blocking before consent and records of consent. Use for websites with analytics or ads.
- `data-retention` — Define and implement data retention and deletion schedules. Use to reduce risk and comply with regulations.
- `dsar-handler` — Build a process and tooling to handle data subject access, deletion and portability requests. Use for LGPD/GDPR obligations.
- `soc2-readiness` — Prepare for SOC 2: control matrix, policies, evidence collection and gap remediation. Use for B2B SaaS selling to enterprises.
- `license-compliance` — Check open-source licence compatibility for a project and its dependencies. Use before distributing software.
- `security-questionnaire` — Answer customer security questionnaires accurately from existing policies and evidence. Use in enterprise sales.

## IoT & Embedded — pack `legion-iot` — agents: `iot-engineer`, `realtime-engineer`, `data-visualizer`

- `esp32-firmware` — Write ESP32 firmware (Arduino or ESP-IDF) with Wi-Fi reconnection, sensors, deep sleep, watchdog and OTA. Use for connected devices.
- `mqtt-architecture` — Design MQTT topic structure, payload schemas, QoS, retained messages and broker security. Use for IoT messaging.
- `sensor-calibration` — Calibrate sensors (pH, temperature, ORP, chlorine, flow, pressure) with reference points, drift tracking and filtering. Use for accurate measurements.
- `iot-dashboard` — Build a telemetry dashboard with live values, history charts, alerts and device status. Use to monitor devices.
- `device-provisioning` — Design secure device provisioning: unique identities, claiming, Wi-Fi setup (BLE/SoftAP) and certificate rotation. Use for shipping devices.
- `ota-updates` — Implement over-the-air firmware updates with signing, staged rollout and automatic rollback. Use for device fleets.
- `home-automation` — Integrate devices with Home Assistant, Node-RED or smart-home platforms with automations. Use for home or facility automation.
- `hardware-bom` — Create a hardware bill of materials with components, suppliers, costs and alternatives. Use for prototyping or production.
- `edge-data-processing` — Process data on the device or gateway: filtering, aggregation, anomaly detection and buffering when offline. Use to reduce bandwidth and latency.
- `iot-security` — Secure IoT devices and backends: secure boot, encrypted storage, TLS, least privilege and vulnerability disclosure. Use before shipping devices.
