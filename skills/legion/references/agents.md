# Legion agent registry

80 agents in 10 teams. Claude Code: call with the Task/Agent tool using the agent name (plugin agents may appear as `legion:<name>`). Codex: spawn the custom agent `<name_with_underscores>`.

## Command Center (`command`)

| Agent | Use for |
|---|---|
| `conductor` | Legion's lead orchestrator. Use for any large, ambiguous or multi-part request: it analyses the goal and returns a dispatch plan that splits the work across the right Legion specialists, with order, dependencies and acceptance criteria. |
| `task-splitter` | Breaks a large task into small, independent, well-specified work packages with dependencies (a DAG). Use when a job is too big for one agent or must be parallelised. |
| `integrator` | Merges outputs from several Legion agents into one coherent result, resolving conflicts, duplicated work and inconsistent naming. Use after parallel work finishes. |
| `chief-reviewer` | Senior final reviewer for any deliverable — code, docs, plans or analyses. Use before presenting important work to the user to catch errors, gaps and weak reasoning. |
| `memory-curator` | Maintains Legion's user memory: turns observed corrections and preferences into durable profile rules and removes stale or conflicting ones. Use when the user states a preference or at the end of a long session. |
| `context-scout` | Fast read-only explorer that maps a codebase or document set before work starts: structure, entry points, conventions, build and test commands. Use at the start of any task in an unfamiliar repository. |
| `qa-gatekeeper` | Verifies that each subtask meets its acceptance criteria by actually running checks (tests, builds, linters, sample inputs). Use before marking any Legion work as done. |
| `risk-assessor` | Identifies technical, security, cost, legal and delivery risks of a plan or change before it is executed, with mitigations. Use for migrations, launches, irreversible operations and big refactors. |

## Architecture & Backend (`backend`)

| Agent | Use for |
|---|---|
| `software-architect` | Designs system architecture: components, boundaries, data flow, technology choices and trade-offs, documented as ADRs and diagrams. Use for new systems, major features or when structure is the problem. |
| `backend-engineer` | Implements server-side features: business logic, services, jobs and endpoints in Node, Python, Go, Java or similar, with tests. Use for building or changing backend code. |
| `api-designer` | Designs and reviews REST, GraphQL and gRPC APIs: resources, schemas, versioning, errors, pagination and OpenAPI specs. Use before building or changing a public or internal API. |
| `database-architect` | Designs data models, schemas, indexes, migrations and query strategies for SQL and NoSQL databases. Use for schema design, slow queries, migrations or choosing a datastore. |
| `microservices-engineer` | Designs and implements service decomposition, inter-service communication, queues, events and resilience patterns. Use when splitting a monolith or building distributed services. |
| `integration-engineer` | Connects systems through third-party APIs, webhooks, SDKs, ETL and automation platforms with robust auth, retries and mapping. Use for payments, CRMs, messaging, any external service integration. |
| `realtime-engineer` | Builds realtime features: WebSockets, Server-Sent Events, pub/sub, presence, live dashboards and streaming pipelines. Use for chat, notifications, collaborative or live-updating features. |
| `auth-specialist` | Implements authentication and authorisation: OAuth2/OIDC, sessions, JWT, SSO, MFA, RBAC/ABAC and permission models. Use for login flows, access control or auth bugs. |

## Frontend, Mobile & Devices (`frontend`)

| Agent | Use for |
|---|---|
| `frontend-architect` | Plans frontend architecture: framework choice, routing, state management, data fetching, folder structure and build tooling. Use when starting a web app or when the frontend has become hard to change. |
| `ui-engineer` | Builds user interfaces from designs or descriptions: responsive layouts, components, forms and interactions in HTML/CSS/JS or any framework. Use for implementing screens and components. |
| `react-specialist` | Expert in React, Next.js and the React ecosystem: hooks, server components, rendering performance, forms, data fetching and testing. Use for React-specific work or problems. |
| `css-stylist` | Specialist in CSS, Tailwind, design tokens, theming, dark mode, animations and responsive layout bugs. Use for styling work or broken layouts. |
| `mobile-engineer` | Builds mobile apps with React Native, Expo, Flutter, Swift or Kotlin: navigation, native APIs, offline storage, push notifications and store releases. Use for any mobile app work. |
| `accessibility-expert` | Audits and fixes accessibility to WCAG 2.2 AA: semantics, keyboard navigation, screen readers, contrast, focus and ARIA. Use before launches or when building interactive components. |
| `web-performance-tuner` | Improves web performance and Core Web Vitals (LCP, INP, CLS): bundle size, images, fonts, caching, rendering and network waterfalls. Use when a site is slow or before launch. |
| `iot-engineer` | Designs and builds IoT and embedded solutions: ESP32/Arduino/Raspberry Pi firmware, sensors, MQTT, device provisioning, OTA updates and telemetry dashboards. Use for hardware-connected products. |

## Data & AI (`data-ai`)

| Agent | Use for |
|---|---|
| `data-engineer` | Builds data pipelines: ingestion, ETL/ELT, batch and streaming jobs, orchestration (Airflow, Dagster), warehouses and data quality checks. Use for moving, transforming or modelling data at scale. |
| `data-analyst` | Answers business questions with data: SQL, pandas, statistics, cohort and funnel analysis, A/B test evaluation and clear write-ups. Use when you need numbers and conclusions from a dataset. |
| `ml-engineer` | Builds and ships machine-learning models: feature engineering, training, evaluation, hyperparameter tuning, serving and monitoring. Use for classic ML, forecasting, classification or recommender work. |
| `llm-engineer` | Builds LLM-powered applications and agents: model selection, tool calling, structured outputs, streaming, caching, cost control and evals with Claude, OpenAI or open models. Use for any feature that calls an LLM API. |
| `prompt-engineer` | Writes and optimises prompts, system prompts, agent instructions and skills for LLMs, with test cases and measurable improvements. Use when an AI output is inconsistent, off-tone or wrong. |
| `rag-specialist` | Designs retrieval-augmented generation: chunking, embeddings, vector databases, hybrid search, reranking, citations and retrieval evals. Use for "chat with your documents" or knowledge-base assistants. |
| `data-visualizer` | Creates clear charts and dashboards (matplotlib, Plotly, D3, Recharts, BI tools) that answer a specific question. Use whenever data needs to be shown visually. |
| `analytics-engineer` | Models analytics data with dbt/SQL: metrics layers, dimensional models, event tracking plans and BI-ready tables. Use when defining KPIs or making product analytics trustworthy. |

## Infrastructure & DevOps (`infra`)

| Agent | Use for |
|---|---|
| `devops-engineer` | Automates build, deploy and operations: scripts, Dockerfiles, environments, configuration management and developer tooling. Use for anything between "code merged" and "running in production". |
| `cloud-architect` | Designs cloud infrastructure on AWS, GCP, Azure or edge platforms: networking, compute, storage, managed services, multi-region and Infrastructure as Code. Use for choosing or reshaping cloud setups. |
| `ci-cd-engineer` | Builds and fixes CI/CD pipelines in GitHub Actions, GitLab CI and others: caching, matrices, test sharding, artifacts, environments and deployment gates. Use when pipelines are slow, flaky or missing. |
| `container-specialist` | Writes and optimises Dockerfiles, docker-compose and Kubernetes manifests/Helm charts: small images, health checks, resources and security contexts. Use for containerising or debugging container workloads. |
| `sre-engineer` | Improves reliability: SLOs and error budgets, incident response, on-call runbooks, capacity planning and postmortems. Use after outages or when defining reliability targets. |
| `observability-engineer` | Sets up logging, metrics, tracing and alerting (OpenTelemetry, Prometheus, Grafana, Datadog, Sentry) so problems are detected and diagnosed quickly. Use when you cannot see what production is doing. |
| `cost-optimizer` | Reduces cloud, SaaS and LLM/API spend: rightsizing, reserved capacity, storage tiers, caching and usage analysis. Use when bills are growing faster than usage. |
| `release-manager` | Plans and runs releases: versioning, changelogs, feature flags, staged rollouts, app-store submissions and rollback plans. Use when shipping a version to users. |

## Quality Engineering (`quality`)

| Agent | Use for |
|---|---|
| `test-architect` | Designs test strategy: test pyramid, what to test at which level, fixtures, test data, coverage goals and CI integration. Use when a project has few tests or tests that do not catch bugs. |
| `unit-tester` | Writes fast, focused unit and integration tests for existing or new code, including edge cases and regression tests for bugs. Use when code lacks tests or after fixing a bug. |
| `e2e-tester` | Writes end-to-end and browser tests with Playwright or Cypress covering critical user journeys, plus visual and cross-browser checks. Use before releases or for flows like signup and checkout. |
| `debugger` | Finds root causes of bugs, crashes, flaky tests and unexpected behaviour using reproduction, logs, bisection and hypothesis testing. Use whenever something is broken and the cause is unclear. |
| `code-reviewer` | Reviews code changes and pull requests for correctness, readability, security, performance and consistency, with prioritised actionable comments. Use before merging any change. |
| `refactoring-expert` | Restructures code safely without changing behaviour: extract, rename, split modules, remove duplication and dead code, backed by tests. Use when code is hard to understand or change. |
| `performance-engineer` | Profiles and optimises backend and application performance: CPU, memory, I/O, database queries, caching and load testing. Use when something is slow, uses too much memory or must scale. |
| `legacy-modernizer` | Modernises legacy systems: upgrades frameworks and languages, migrates off deprecated APIs, and incrementally replaces old modules (strangler fig). Use for major version upgrades or migrations. |

## Security & Compliance (`security`)

| Agent | Use for |
|---|---|
| `security-auditor` | Performs defensive security reviews of code and configuration against OWASP Top 10 and common weaknesses, with severity and fixes. Use before releases or when handling sensitive data. |
| `appsec-engineer` | Fixes application security issues and builds security into development: secure defaults, input validation, CSP and headers, SAST/DAST setup in CI. Use to remediate findings or harden an app. |
| `threat-modeler` | Builds threat models with STRIDE or attack trees: assets, trust boundaries, data flows, threats and mitigations. Use when designing a new system or a feature that touches sensitive data. |
| `secrets-guardian` | Finds and prevents leaked secrets (API keys, tokens, passwords) in code, history, logs and config; sets up secret managers and rotation. Use when credentials are involved or a leak is suspected. |
| `dependency-auditor` | Audits third-party dependencies for known vulnerabilities, licences, maintenance health and supply-chain risk; plans safe upgrades. Use before adding packages or on a regular schedule. |
| `privacy-engineer` | Implements privacy by design: data minimisation, consent, retention, anonymisation, data-subject requests and LGPD/GDPR/CCPA technical requirements. Use when collecting or processing personal data. |
| `compliance-analyst` | Maps systems and processes to frameworks such as SOC 2, ISO 27001, PCI DSS, HIPAA, LGPD and GDPR; produces control matrices, policies and evidence checklists. Use when preparing for audits or customer security reviews. |
| `cloud-security-engineer` | Secures cloud environments: IAM least privilege, network segmentation, encryption, logging, CSPM findings and secure IaC. Use when reviewing or hardening AWS, GCP or Azure setups. |

## Product & Design (`product`)

| Agent | Use for |
|---|---|
| `product-manager` | Defines what to build and why: problem statements, PRDs, user stories, prioritisation (RICE, MoSCoW) and success metrics. Use at the start of a feature or when scope is unclear. |
| `ux-researcher` | Plans and synthesises user research: interview guides, surveys, usability tests, personas, journey maps and insight reports. Use to understand users before or after building. |
| `ux-designer` | Designs user flows, information architecture, wireframes and interaction patterns that make tasks easy. Use before building a new screen or when users get lost. |
| `ui-designer` | Creates visual design: layout, typography, colour, spacing, iconography and polished mockups or HTML prototypes consistent with a brand. Use when an interface needs to look professional. |
| `requirements-analyst` | Elicits and documents precise requirements: functional and non-functional specs, acceptance criteria, edge cases, business rules and traceability. Use when a request is vague or stakeholders disagree. |
| `design-system-builder` | Builds and maintains design systems: tokens, component libraries, documentation, Storybook and usage guidelines. Use when UI is inconsistent or multiple products share components. |
| `growth-strategist` | Designs growth experiments across acquisition, activation, retention, referral and revenue, with hypotheses and metrics. Use to grow users or revenue of a product. |
| `roadmap-planner` | Builds product and technical roadmaps: themes, milestones, sequencing, dependencies and capacity, communicated for different audiences. Use for quarterly planning or aligning stakeholders. |

## Content, Docs & Marketing (`content`)

| Agent | Use for |
|---|---|
| `technical-writer` | Writes clear technical documentation: READMEs, guides, tutorials, API references, runbooks and release notes. Use whenever developers or users need to understand something. |
| `documentation-engineer` | Builds documentation infrastructure: docs sites (Docusaurus, MkDocs, VitePress), API reference generation, docstrings, diagrams-as-code and doc linting. Use to set up or scale a docs system. |
| `copywriter` | Writes persuasive, on-brand copy: landing pages, ads, emails, product descriptions, UX microcopy and calls to action. Use for any text meant to convince or convert. |
| `seo-specialist` | Improves organic search visibility: keyword research, on-page SEO, technical SEO (crawlability, schema, sitemaps, speed) and content briefs. Use for websites that need traffic from Google. |
| `content-strategist` | Plans content programmes: audience, pillars, editorial calendar, formats, distribution and measurement. Use to build a blog, newsletter, YouTube or social presence with purpose. |
| `translator` | Translates and localises text, UI strings and documentation (including Portuguese ↔ English and Spanish) keeping meaning, tone and terminology. Use for multilingual products or content. |
| `social-media-manager` | Creates social media content and plans: posts, threads, captions, hooks, hashtags and posting schedules for LinkedIn, Instagram, X, TikTok and YouTube. Use to grow an audience on social platforms. |
| `presentation-designer` | Builds presentations and pitch decks: storyline, slide structure, data visuals and speaker notes. Use for investor pitches, sales decks, talks and internal reviews. |

## Business, Research & Operations (`business`)

| Agent | Use for |
|---|---|
| `business-analyst` | Analyses business processes and models: process maps, KPIs, unit economics, requirements for systems and improvement opportunities. Use to understand how a business works and where to improve it. |
| `financial-analyst` | Builds financial models and analyses: revenue projections, unit economics, pricing, budgets, break-even, cash flow and scenario analysis. Use for business plans, pricing or investment decisions (not personalised financial advice). |
| `market-researcher` | Researches markets and competitors: market sizing (TAM/SAM/SOM), competitor feature and pricing matrices, positioning and trends, with cited sources. Use before launching or positioning a product. |
| `research-analyst` | Conducts deep research on any topic: finds and reads primary sources, compares evidence, and writes a balanced, cited synthesis. Use for literature reviews, technical comparisons or fact-finding. |
| `project-manager` | Plans and tracks projects: scope, work breakdown, timelines, owners, RACI, status reports and risk logs. Use to organise any multi-week effort or keep a project on track. |
| `operations-automator` | Automates repetitive business and personal workflows with scripts, spreadsheets, Zapier/Make/n8n, email and file automation. Use when someone does the same manual task every week. |
| `legal-researcher` | Researches legal and regulatory topics, drafts and reviews contracts, terms of service and privacy policies for clarity and common risks, always flagging the need for a qualified lawyer. Use for first drafts and issue spotting, not as legal advice. |
| `customer-success-advisor` | Improves customer experience and support: onboarding flows, help-centre articles, support macros, FAQ, feedback analysis and churn reduction. Use when customers struggle, complain or leave. |
