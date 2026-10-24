# category: ux-design | UX, UI & Accessibility
agents: ux-designer, ui-designer, accessibility-expert, design-system-builder, ux-researcher

## user-flow
desc: Map user flows for a task from entry to success, including errors and alternatives. Use before designing screens.
- Define the user goal and entry points.
- List steps and decisions.
- Add error and edge paths.
- Remove unnecessary steps.
- Draw as a Mermaid flowchart.
check: Error paths included; steps minimised
out: User flow diagram.

## wireframe
desc: Create low-fidelity wireframes (ASCII, Mermaid or simple HTML) for key screens with annotations. Use to agree layout before visual design.
- List content and actions per screen.
- Prioritise by importance.
- Sketch layout blocks.
- Annotate interactions and states.
- Iterate with feedback.
check: Primary action obvious; states annotated
out: Wireframes with notes.

## ui-polish
desc: Improve the visual quality of an interface: hierarchy, spacing, typography, colour and consistency. Use when a UI looks amateur.
- Audit hierarchy: what should be noticed first.
- Apply a spacing scale consistently.
- Limit to 2 type families and a clear scale.
- Use a restrained palette with one accent.
- Align elements to a grid.
check: Consistent spacing; contrast passes
out: Style changes with before/after notes.

## design-tokens
desc: Define design tokens (colour, type, spacing, radius, shadow, motion) and export them to CSS/Tailwind/JSON. Use to create a consistent design foundation.
- Define primitive values.
- Create semantic tokens mapped to primitives.
- Provide light and dark themes.
- Export to platform formats.
- Document usage.
check: Semantic layer exists; themes complete
out: Token files and docs.

## accessibility-audit
desc: Audit a site or app for WCAG 2.2 AA issues with automated and manual checks, then fix them. Use before launch.
- Run automated tools (axe, Lighthouse).
- Test keyboard-only navigation.
- Test with a screen reader.
- Check contrast and zoom to 200%.
- Report issues with WCAG references and fixes.
check: Manual and automated checks both done
out: Accessibility report and fixes.

## usability-heuristics
desc: Evaluate an interface against Nielsen's 10 usability heuristics and propose fixes. Use for quick UX reviews.
- Walk through main tasks.
- Check each heuristic.
- Rate severity of each issue.
- Propose fixes.
- Prioritise.
check: Issues tied to heuristics and tasks
out: Heuristic evaluation table.

## microcopy
desc: Write UI microcopy: buttons, labels, errors, empty states, tooltips and confirmations. Use to make interfaces clearer.
- Use verbs on buttons that describe the outcome.
- Write errors that say what happened and how to fix it.
- Make empty states helpful with a next action.
- Keep tone consistent with brand.
- Cut words.
check: Errors actionable; consistent tone
out: Microcopy table.

## persona-builder
desc: Create evidence-based personas or jobs-to-be-done profiles from research data. Use to align a team on who the user is.
- Gather research data.
- Cluster users by goals and behaviours.
- Write personas with goals, pains and context.
- Mark assumptions.
- Use JTBD statements.
check: Based on evidence; assumptions marked
out: Persona profiles.

## usability-test-plan
desc: Plan and run usability tests: tasks, script, recruitment, metrics and synthesis. Use to validate designs with users.
- Define research questions.
- Write realistic tasks.
- Write a neutral script.
- Define metrics (success, time, errors).
- Synthesise findings into fixes.
check: Tasks realistic; script neutral
out: Test plan and findings template.

## design-critique
desc: Critique a design or screenshot constructively: goals, hierarchy, clarity, consistency, accessibility. Use for feedback on mockups.
- Clarify the design's goal.
- Assess hierarchy and clarity.
- Check consistency and accessibility.
- Note strengths.
- Give prioritised suggestions.
check: Feedback tied to goals; prioritised
out: Critique notes.

# category: product | Product Management
agents: product-manager, requirements-analyst, roadmap-planner, ux-researcher

## prd-writer
desc: Write a product requirements document: problem, goals, users, stories, scope, metrics and open questions. Use when defining a feature.
- Describe problem and evidence.
- Set goals and non-goals.
- Write user stories with acceptance criteria.
- Define success metrics.
- List risks and open questions.
check: Non-goals explicit; metrics measurable
out: PRD document.

## user-stories
desc: Write user stories with acceptance criteria (Given/When/Then) and split them to be small. Use for backlog creation.
- Write stories as "As a…, I want…, so that…".
- Add acceptance criteria.
- Split large stories by workflow or data.
- Check INVEST.
- Order by value.
check: Each story testable and small
out: Story list.

## prioritization
desc: Prioritise a backlog with RICE, ICE, MoSCoW or Kano and explain trade-offs. Use when there is more to do than time.
- List items with estimates.
- Choose a framework.
- Score items.
- Review for dependencies and strategy fit.
- Publish ranked list with rationale.
check: Scores explained; dependencies respected
out: Ranked backlog.

## mvp-scoping
desc: Cut a product idea down to a minimum viable product that tests the riskiest assumption. Use before building a new product.
- List assumptions.
- Identify riskiest assumption.
- Design the smallest product or experiment to test it.
- Define success criteria.
- List what is deliberately excluded.
check: Tests riskiest assumption; exclusions explicit
out: MVP definition.

## feature-spec
desc: Write a technical-friendly feature spec bridging product and engineering: behaviour, rules, states, edge cases and analytics. Use before implementation.
- Describe behaviour per user type.
- Define business rules.
- Specify states and transitions.
- List edge cases and errors.
- Define analytics events.
check: Edge cases covered; events defined
out: Feature spec.

## competitive-analysis
desc: Compare competitors' features, pricing, positioning and reviews to find opportunities. Use for product strategy.
- Identify direct and indirect competitors.
- Build a feature and pricing matrix.
- Summarise positioning and reviews.
- Find gaps.
- Recommend differentiation.
check: Sources cited with dates
out: Competitive analysis.

## product-metrics
desc: Define product metrics: north star, input metrics, guardrails and instrumentation. Use to measure product success.
- Define the north star metric.
- Map input metrics.
- Add guardrails.
- Specify tracking.
- Set targets.
check: Metrics actionable and instrumented
out: Metrics framework.

## customer-feedback-synthesis
desc: Synthesise customer feedback from tickets, reviews and interviews into themes, counts and recommendations. Use to decide what to fix or build.
- Collect feedback sources.
- Code each item into themes.
- Count and weight by customer value.
- Quote representative examples.
- Recommend actions.
check: Themes quantified; quotes included
out: Feedback synthesis.

## roadmap-builder
desc: Build a Now/Next/Later roadmap with themes, outcomes and dependencies. Use for planning communication.
- Group initiatives into themes.
- State outcome per theme.
- Sequence by value and dependency.
- Mark confidence levels.
- Tailor views for audiences.
check: Outcome-focused; confidence marked
out: Roadmap document.

## launch-plan
desc: Plan a product or feature launch: readiness checklist, messaging, channels, timeline and success metrics. Use before going live.
- Define audience and message.
- Build readiness checklist.
- Plan channels and assets.
- Create timeline.
- Define launch metrics.
check: Readiness owners assigned; metrics defined
out: Launch plan.

# category: marketing | Marketing & Growth
agents: growth-strategist, seo-specialist, social-media-manager, content-strategist

## seo-audit
desc: Audit a website's SEO: technical issues, on-page factors, content gaps and quick wins. Use to increase organic traffic.
- Crawl the site for indexing, status codes and duplicates.
- Check titles, metas, headings and structured data.
- Check speed and mobile usability.
- Find content gaps vs competitors.
- Prioritise fixes.
check: Prioritised by impact; technical and content covered
out: SEO audit report.

## keyword-research
desc: Research keywords by intent, volume and difficulty and map them to pages. Use for content and SEO planning.
- Brainstorm seed topics.
- Expand with tools or search suggestions.
- Classify intent.
- Cluster by topic.
- Map clusters to pages.
check: One primary intent per page
out: Keyword map.

## marketing-plan
desc: Build a marketing plan: audience, positioning, channels, budget, calendar and KPIs. Use for launching or growing a business.
- Define target audience and positioning.
- Choose channels by audience fit and budget.
- Set budget and timeline.
- Create content and campaign calendar.
- Define KPIs.
check: Channels match audience; KPIs measurable
out: Marketing plan.

## email-campaign
desc: Write email campaigns and sequences (welcome, nurture, launch, re-engagement) with subject lines and CTAs. Use for email marketing.
- Define goal and audience segment.
- Plan sequence timing.
- Write subject lines and preview text variants.
- Write body with one CTA.
- Plan A/B tests.
check: One CTA per email; unsubscribe included
out: Email sequence.

## ad-copy
desc: Write ad copy for Google, Meta, LinkedIn and TikTok within platform limits, with variants for testing. Use for paid campaigns.
- Define audience, offer and objective.
- Respect character limits.
- Write multiple headline and description variants.
- Match landing page message.
- Plan tests.
check: Within limits; variants differ meaningfully
out: Ad copy sets.

## growth-experiments
desc: Design growth experiments with hypotheses, metrics, sample sizes and ICE scores. Use to grow systematically.
- Identify funnel bottleneck.
- Generate hypotheses.
- Score with ICE.
- Design experiment with metric and duration.
- Plan analysis.
check: Hypothesis falsifiable; metric defined
out: Experiment backlog.

## social-content-calendar
desc: Create a social media content calendar with post ideas, formats, captions and schedule. Use for consistent social presence.
- Define pillars and platforms.
- Plan posting frequency.
- Write post ideas with hooks.
- Draft captions and hashtags.
- Schedule.
check: Mix of pillars; realistic frequency
out: Content calendar.

## landing-page-copy
desc: Write conversion-focused landing page copy: headline, subhead, benefits, objections, proof and CTA. Use for product or campaign pages.
- Identify audience pain and promise.
- Write headline variants.
- List benefits with proof.
- Handle objections in FAQ.
- Write CTA.
check: Benefit-led; one primary CTA
out: Landing page copy.

## brand-voice
desc: Define a brand voice and tone guide with traits, do/don't examples and vocabulary. Use to keep communication consistent.
- Define brand personality traits.
- Describe tone per context.
- Give do/don't examples.
- List vocabulary.
- Provide sample rewrites.
check: Examples concrete; contexts covered
out: Brand voice guide.

## analytics-tracking-plan
desc: Create a marketing analytics tracking plan with UTM conventions, events, conversions and attribution. Use before campaigns.
- Define conversion events.
- Define UTM naming conventions.
- Map events to tools.
- Configure attribution.
- Verify tracking.
check: UTM convention documented; events verified
out: Tracking plan.
