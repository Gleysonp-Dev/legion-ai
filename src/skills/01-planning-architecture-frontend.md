# category: planning | Planning & Delivery
agents: conductor, task-splitter, project-manager

## project-kickoff
desc: Start a new project from an idea: goals, scope, stack, milestones and first tasks. Use when the user says "I want to build X" with no plan yet.
- Restate the idea as a one-paragraph goal with target user and core value.
- List must-have features for an MVP and explicitly park nice-to-haves.
- Propose a stack that fits the user's known skills and budget; justify each choice.
- Break the MVP into 3–5 milestones with a demoable result each.
- Write the first 10 concrete tasks for milestone 1.
check: MVP fits in weeks, not months; every milestone is demoable; risks listed
out: A kickoff brief: goal, MVP scope, stack, milestones, first tasks, risks.

## work-breakdown
desc: Decompose a large task into small, independent work packages with dependencies and parallel waves. Use before handing big work to several agents.
- Identify deliverables and natural seams (modules, layers, documents).
- Write each package with goal, inputs, output and files in scope.
- Draw dependencies and group independent packages into waves.
- Flag packages that touch the same files to avoid conflicts.
- Estimate each package as S/M/L.
check: No package needs guessing; no circular dependency; conflicts flagged
out: A numbered package list plus a wave plan.

## estimate-effort
desc: Estimate time and effort for a feature or project with ranges and assumptions. Use when someone asks "how long will this take?".
- Break the work into tasks small enough to estimate (under 2 days each).
- Give each task an optimistic, likely and pessimistic estimate.
- Compute PERT expected value ((O + 4L + P) / 6) and total range.
- Add explicit buffers for integration, testing and unknowns.
- List the assumptions that would change the estimate most.
check: Ranges, not single numbers; assumptions explicit; testing included
out: An estimate table with totals and key assumptions.

## sprint-planning
desc: Plan a sprint or week of work: pick backlog items by priority and capacity, define a sprint goal and daily plan. Use at the start of an iteration.
- Confirm available capacity (people × days, minus meetings and holidays).
- Choose a single sprint goal that delivers user value.
- Pull top-priority items that serve the goal until capacity is ~80% used.
- Split items that are too large; make acceptance criteria explicit.
- Identify dependencies and risks to raise in stand-ups.
check: Sprint goal stated; capacity not overbooked; every item has acceptance criteria
out: A sprint plan with goal, items, owners and risks.

## definition-of-done
desc: Create a definition of done and acceptance criteria checklist for a team or task. Use to stop "done" from meaning different things to different people.
- Gather quality expectations: code review, tests, docs, deploy, monitoring.
- Write them as a short checklist that applies to every item.
- Add item-specific acceptance criteria in Given/When/Then form.
- Make every check verifiable by someone else.
- Review with the team and publish it where work is tracked.
check: Every check is verifiable; checklist fits on one screen
out: A DoD checklist plus an acceptance-criteria template.

## risk-register
desc: Build a risk register for a project with likelihood, impact, owners and mitigations. Use for launches, migrations or any project with deadlines.
- Brainstorm risks across technical, people, vendor, legal, budget and schedule.
- Score likelihood and impact from 1 to 5; multiply for priority.
- Give each top risk a mitigation, trigger signal and owner.
- Mark irreversible actions and plan rollbacks.
- Schedule a review cadence.
check: Top risks have owners; triggers are observable; irreversible items flagged
out: A risk register table sorted by score.

## status-report
desc: Write a concise project status report: progress, next steps, blockers, decisions needed and health. Use for weekly updates to stakeholders.
- Collect what was completed since the last report with evidence (links, demos).
- List next steps with owners and dates.
- Call out blockers and the decision or help needed.
- Rate health (green/yellow/red) with a one-line reason.
- Keep it readable in under two minutes.
check: Leads with the headline; blockers have an ask; no jargon
out: A status update ready to paste into email or chat.

## retrospective
desc: Run a retrospective: what went well, what didn't, root causes and concrete actions. Use after a sprint, project or incident.
- Gather facts first: timeline, metrics, events.
- Collect what went well and what was hard without blame.
- Group items into themes and find root causes with "5 whys".
- Choose at most 3 actions with owners and due dates.
- Check last retro's actions for follow-through.
check: Actions are specific and owned; tone is blameless
out: Retro notes with themes and action items.

## decision-matrix
desc: Compare options with a weighted decision matrix and recommend one. Use when choosing between tools, vendors, designs or strategies.
- Define the decision and the options (include "do nothing" when sensible).
- Choose 4–7 criteria and weight them by importance.
- Score each option per criterion with a short justification.
- Compute weighted totals and test sensitivity to weights.
- Recommend, noting what would change the decision.
check: Criteria agreed before scoring; justification per score; sensitivity checked
out: A decision matrix table and recommendation.

## okr-builder
desc: Draft OKRs (objectives and measurable key results) for a person, team or product. Use for quarterly goal-setting.
- Write 1–3 inspiring, qualitative objectives tied to strategy.
- Give each objective 2–4 measurable key results with baseline and target.
- Ensure key results measure outcomes, not task completion.
- List initiatives that could move each key result.
- Define how and when progress will be scored.
check: Every KR has a number and baseline; outcomes not outputs
out: An OKR sheet with objectives, KRs, initiatives.

# category: architecture | Architecture & System Design
agents: software-architect, microservices-engineer, database-architect

## system-design
desc: Design a system end to end: requirements, components, data flow, scaling and trade-offs with a diagram. Use for new products or interview-style design questions.
- Clarify functional requirements and quantify non-functional ones (users, QPS, data size, latency).
- Sketch the high-level components and data flow as a Mermaid diagram.
- Choose storage, caching and messaging with justification.
- Address scaling, failure modes and bottlenecks.
- Summarise trade-offs and what you would build first.
check: Numbers drive decisions; single points of failure addressed; diagram included
out: A design doc with diagram, component list and trade-offs.

## adr-writer
desc: Write Architecture Decision Records documenting context, options, decision and consequences. Use whenever a significant technical decision is made.
- State the context and forces driving the decision.
- List options considered with pros and cons.
- Record the decision in one clear sentence.
- Describe consequences: positive, negative and follow-ups.
- Number and date the ADR; link superseded ones.
check: Options genuinely compared; consequences include downsides
out: An ADR markdown file in docs/adr/.

## architecture-review
desc: Review an existing architecture for coupling, scalability, reliability, security and maintainability issues. Use when a system feels fragile or before scaling.
- Map the current components and dependencies from the code and config.
- Identify hot spots: tight coupling, shared databases, single points of failure.
- Check scaling limits and failure handling at each boundary.
- Rank issues by risk and cost to fix.
- Propose an incremental improvement path.
check: Claims backed by code references; improvements are incremental
out: An architecture review with a ranked issue list and roadmap.

## c4-diagrams
desc: Produce C4 model diagrams (context, container, component) as Mermaid or PlantUML. Use to explain a system to new developers or stakeholders.
- Draw the system context: users and external systems.
- Draw containers: apps, services, databases and their protocols.
- Draw components for the most important container.
- Label every arrow with what flows and how.
- Keep each diagram readable on one screen.
check: Each level answers a different question; arrows labelled
out: Diagram-as-code files plus short captions.

## monolith-to-services
desc: Plan an incremental migration from a monolith to modules or services using the strangler-fig pattern. Use when a monolith blocks team velocity.
- Identify bounded contexts and their data ownership in the monolith.
- Pick the first candidate: high change rate, low coupling.
- Introduce an internal API boundary before extracting.
- Plan data migration and dual-write or change-data-capture steps.
- Define rollback and success metrics per step.
check: First extraction is small; data ownership explicit; rollback defined
out: A migration roadmap with step-by-step extraction plan.

## event-driven-design
desc: Design event-driven systems: events, topics, schemas, consumers, ordering and delivery guarantees. Use when services need to react to each other asynchronously.
- List domain events in past tense (OrderPlaced) with owners.
- Define event schemas with versioning rules.
- Choose broker and topic layout; decide on ordering keys.
- Make consumers idempotent and handle retries and dead letters.
- Use the outbox pattern for reliable publishing.
check: Schemas versioned; consumers idempotent; DLQ handling defined
out: An event catalogue and flow diagram.

## caching-strategy
desc: Design a caching strategy: what to cache, where, TTLs, invalidation and stampede protection. Use when reads are slow or expensive.
- Identify hot read paths and their tolerance for staleness.
- Choose cache layers (CDN, HTTP, application, database).
- Define keys, TTLs and invalidation triggers.
- Protect against stampedes and cache penetration.
- Measure hit rate and latency after rollout.
check: Staleness tolerance explicit; invalidation defined; metrics planned
out: A caching plan with keys, TTLs and invalidation rules.

## multi-tenancy-design
desc: Design multi-tenant SaaS architecture: isolation model, tenant routing, data partitioning, limits and billing hooks. Use when building B2B SaaS.
- Choose isolation: shared schema with tenant_id, schema-per-tenant, or database-per-tenant.
- Enforce tenant scoping at the data-access layer (row-level security or middleware).
- Plan per-tenant limits, quotas and noisy-neighbour protection.
- Design tenant onboarding, offboarding and data export.
- Add tenant context to logs and metrics.
check: Cross-tenant leakage impossible by default; tests prove isolation
out: A multi-tenancy design and enforcement checklist.

## scalability-plan
desc: Plan how a system will handle 10x and 100x load: bottlenecks, scaling levers and capacity milestones. Use before growth or a big launch.
- Measure current load and resource usage.
- Find the first component to break at 10x.
- List scaling levers: horizontal scaling, caching, read replicas, queues, sharding.
- Define metrics that trigger each lever.
- Estimate cost at each stage.
check: Bottleneck based on data; triggers measurable; cost estimated
out: A capacity plan with stages, triggers and costs.

## tech-stack-selection
desc: Choose a technology stack for a project based on requirements, team skills, ecosystem and cost. Use when starting something new or replacing a core technology.
- List requirements and constraints (team skills, hosting, budget, timeline).
- Shortlist 2–3 candidates per layer.
- Compare maturity, community, hiring, performance and lock-in.
- Prototype the riskiest part if uncertain.
- Recommend a stack and document why in an ADR.
check: Team skills weighed; lock-in considered; ADR written
out: A stack recommendation with comparison table.

# category: frontend | Frontend Development
agents: ui-engineer, react-specialist, css-stylist, frontend-architect

## build-landing-page
desc: Build a responsive, fast landing page with hero, benefits, social proof, pricing and CTA. Use for product launches and marketing sites.
- Define the audience, offer and single call to action.
- Structure sections: hero, problem, solution, benefits, proof, pricing, FAQ, CTA.
- Implement mobile-first with semantic HTML and accessible contrast.
- Optimise images and fonts for fast load.
- Add analytics events on CTAs.
check: Works at 360px; Lighthouse performance and accessibility ≥ 90; one clear CTA
out: Landing page code ready to deploy.

## component-builder
desc: Create a reusable UI component with props API, variants, states, accessibility and tests. Use when adding buttons, modals, tables, dropdowns or any shared widget.
- Define the props API and variants before coding.
- Implement all states: default, hover, focus, active, disabled, loading, error.
- Add keyboard support and correct ARIA roles.
- Write usage examples and unit tests.
- Keep styling consistent with design tokens.
check: Keyboard operable; all states covered; tests pass
out: Component file, tests and usage example.

## form-builder
desc: Build robust forms with validation, error messages, accessibility and submission handling. Use for signup, checkout, settings or any data entry.
- Define fields, types, required rules and validation constraints.
- Use labels, helpful placeholders and input types for mobile keyboards.
- Validate on blur and submit; show clear, specific error messages.
- Handle submission states: loading, success, server errors, retries.
- Validate again on the server; never trust the client.
check: Every input labelled; errors announced; double-submit prevented
out: Form code with client and server validation.

## state-management
desc: Choose and implement state management: server cache (React Query/SWR), global store (Zustand/Redux) or local state. Use when app state is tangled or duplicated.
- Classify state as server, URL, global client or local component state.
- Move server data into a caching library with proper keys.
- Keep global client state minimal and typed.
- Derive values instead of duplicating them.
- Remove prop drilling where it hurts readability.
check: No duplicated sources of truth; cache invalidation correct
out: Refactored state layer and a short explanation.

## responsive-layout
desc: Make a layout work across phone, tablet and desktop using modern CSS (flex, grid, container queries, clamp). Use when a page breaks on some screen sizes.
- Reproduce the issue at 360, 768, 1024 and 1440px widths.
- Restructure with grid/flex and fluid sizes instead of fixed widths.
- Use container queries for component-level responsiveness.
- Fix overflow, long words and images without max-width.
- Verify no horizontal scrolling at any width.
check: No horizontal scroll; tap targets ≥ 44px; text readable without zoom
out: CSS changes with a checklist of widths verified.

## dark-mode
desc: Add light/dark theme support with CSS variables, system preference detection and a toggle. Use when a site needs a dark mode.
- Define semantic colour tokens (background, surface, text, border, accent).
- Implement themes via CSS custom properties.
- Respect prefers-color-scheme and persist the user's choice.
- Prevent flash of wrong theme on load.
- Check contrast in both themes.
check: Both themes pass contrast; no flash on load; images/icons adapt
out: Theme tokens, toggle code and contrast check.

## nextjs-app
desc: Scaffold or extend a Next.js app with App Router, server components, data fetching, metadata and deployment. Use for React web apps that need SSR or SEO.
- Choose rendering per route (static, dynamic, ISR) based on data freshness.
- Fetch data in server components; keep client components small.
- Add metadata, Open Graph and sitemaps.
- Handle loading and error boundaries per route.
- Configure environment variables and deploy target.
check: Build passes; no client secrets; routes have loading/error states
out: Next.js code changes and deploy notes.

## frontend-testing
desc: Test frontend components and pages with Testing Library, Vitest/Jest and mock APIs (MSW). Use when UI code lacks tests.
- List user-visible behaviours for the component or page.
- Query by role and label as a user would.
- Mock network with MSW instead of stubbing fetch internals.
- Test loading, error and empty states.
- Avoid snapshot tests for logic; keep them for stable visuals only.
check: Tests use accessible queries; network mocked; states covered
out: Test files with all behaviours passing.

## tailwind-setup
desc: Set up or refactor Tailwind CSS with design tokens, theme config, component patterns and class organisation. Use for Tailwind projects or migrations to Tailwind.
- Install and configure Tailwind for the framework in use.
- Map brand tokens into the theme config.
- Extract repeated class groups into components, not @apply everywhere.
- Enable dark mode and container queries if needed.
- Add the Prettier plugin for class sorting.
check: Tokens centralised; no unused CSS in build; consistent class order
out: Tailwind config and refactored components.

## i18n-setup
desc: Internationalise a frontend: extract strings, set up i18n library, locale routing, plurals, dates and currencies. Use when a product must support multiple languages (e.g. PT-BR and EN).
- Choose an i18n library suited to the framework.
- Extract hard-coded strings into message files with keys.
- Handle plurals, interpolation, dates, numbers and currencies by locale.
- Add locale detection and switching, with SEO-friendly routes.
- Add a check for missing translation keys in CI.
check: No hard-coded user-facing strings; plurals correct; missing keys detected
out: i18n setup with initial locale files.
