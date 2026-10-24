# category: testing | Testing
agents: test-architect, unit-tester, e2e-tester, qa-gatekeeper

## write-unit-tests
desc: Write unit tests for a function, class or module covering behaviour, edge cases and errors. Use when code lacks tests.
- Read the code and list inputs, outputs, side effects and error paths.
- Write one test per behaviour with a descriptive name.
- Cover edge cases: empty, null, boundaries, large inputs, unicode.
- Mock only external boundaries (network, time, filesystem).
- Run the tests and confirm they fail when the code is broken.
check: Tests fail on a deliberately broken implementation; no flaky time/network use
out: Test file with all tests passing.

## tdd-cycle
desc: Develop a feature test-first with red-green-refactor cycles. Use when building logic-heavy code where correctness matters.
- Write the smallest failing test for the next behaviour.
- Write the minimum code to make it pass.
- Refactor while keeping tests green.
- Repeat until the feature is complete.
- Review the test list for missing cases.
check: Each test seen failing first; refactor kept tests green
out: Feature code and its tests.

## e2e-playwright
desc: Write end-to-end browser tests with Playwright for critical user journeys. Use for signup, login, checkout or any key flow.
- List the critical journeys and their success conditions.
- Use role- and label-based locators.
- Isolate tests with fresh data and auth state.
- Enable traces and screenshots on failure.
- Run headless in CI across target browsers.
check: No fixed sleeps; tests independent; runs in CI
out: Playwright specs and config.

## test-coverage-gaps
desc: Find untested critical code using coverage reports and risk analysis, then add the most valuable tests. Use to improve confidence quickly.
- Generate a coverage report.
- Cross it with risk: business-critical, frequently changed, bug-prone files.
- List the top 10 untested risky paths.
- Write tests for them in priority order.
- Report coverage before and after for those areas.
check: Prioritised by risk, not raw percentage
out: Gap list and new tests.

## flaky-test-fixer
desc: Diagnose and fix flaky tests caused by timing, shared state, order dependence or network. Use when CI fails randomly.
- Rerun the test many times to confirm flakiness and frequency.
- Check for timing assumptions, shared state, test order and real network/time.
- Replace sleeps with explicit waits or fake timers.
- Isolate state per test.
- Verify stability with repeated runs.
check: Root cause identified; 50+ consecutive passes
out: Fix with explanation of the cause.

## mocking-strategy
desc: Decide what to mock, stub or fake in tests and implement it cleanly (MSW, test doubles, in-memory fakes). Use when tests are brittle or slow because of dependencies.
- Identify external boundaries: HTTP, DB, queue, clock, randomness.
- Prefer in-memory fakes or test containers over deep mocks.
- Mock at the boundary, not internal functions.
- Keep mock data realistic and shared via fixtures.
- Add a few contract tests against the real dependency.
check: No mocking of the unit under test; fakes realistic
out: Mocking setup and refactored tests.

## load-testing
desc: Run load and stress tests (k6, Locust, Artillery) to find capacity limits and bottlenecks. Use before launches or when scaling.
- Define scenarios from real traffic patterns.
- Set goals: throughput, p95 latency, error rate.
- Ramp load gradually; run against a production-like environment.
- Collect server metrics during the run.
- Report the breaking point and the bottleneck.
check: Production-like environment; goals defined before running
out: Load test scripts and results report.

## regression-suite
desc: Build a regression test suite from past bugs and critical behaviours. Use after recurring bugs or before refactors.
- Collect past bugs and incidents.
- Write a test that reproduces each one.
- Add tests for critical business rules.
- Tag the suite so it runs on every PR.
- Keep it fast.
check: Every historical bug has a test; suite runs in CI
out: Regression tests linked to bug references.

## property-based-testing
desc: Use property-based testing (fast-check, Hypothesis) to find edge cases automatically. Use for parsers, algorithms, serializers and financial calculations.
- Identify properties that always hold (round-trip, invariants, idempotence).
- Write generators for valid inputs.
- Run and shrink failures to minimal cases.
- Turn found failures into fixed regression tests.
- Keep run counts reasonable for CI.
check: Properties meaningful; shrunk failures saved as tests
out: Property tests and any bugs found.

## manual-test-plan
desc: Write a manual QA test plan with test cases, steps, expected results and devices. Use before releases when automation is incomplete.
- List features in scope and risk areas.
- Write test cases with preconditions, steps and expected results.
- Include negative and edge cases.
- Define devices, browsers and accounts to use.
- Provide a results template to record pass/fail.
check: Each case reproducible by someone else; negative cases included
out: A test plan table ready to execute.

# category: debugging | Debugging & Troubleshooting
agents: debugger, observability-engineer

## root-cause-analysis
desc: Find the root cause of a bug systematically: reproduce, hypothesise, test, fix and prevent. Use for any bug whose cause is unclear.
- Reproduce reliably and note exact steps, environment and inputs.
- Write down hypotheses ranked by likelihood.
- Test each with evidence: logs, debugger, minimal repro.
- Fix the root cause with the smallest change.
- Add a regression test and check for similar bugs.
check: Root cause explained with evidence; regression test added
out: Root-cause summary, fix and test.

## stack-trace-reader
desc: Read and explain stack traces and error messages, locate the failing code and propose fixes. Use when the user pastes an error.
- Identify the error type and message.
- Find the first frame in the user's own code.
- Read that code and the values involved.
- Explain the cause in plain language.
- Propose and, if asked, apply the fix.
check: Points to the exact file and line; explanation matches code
out: Explanation and fix.

## git-bisect
desc: Find the commit that introduced a bug using git bisect with an automated test. Use for regressions that "used to work".
- Find a known good and known bad commit.
- Write a script that exits 0 when good and 1 when bad.
- Run git bisect run with the script.
- Inspect the culprit commit's diff.
- Fix and add a regression test.
check: Test script reliable; culprit confirmed by reverting
out: Culprit commit, explanation and fix.

## memory-leak-hunt
desc: Find and fix memory leaks using heap snapshots, profilers and growth analysis. Use when memory grows until crashes.
- Confirm the leak with memory metrics over time.
- Take heap snapshots before and after load and diff them.
- Identify retained objects and their retainers.
- Fix common causes: listeners, caches without limits, closures, globals.
- Verify memory stabilises under the same load.
check: Leak reproduced; memory flat after fix
out: Leak cause and fix with memory graphs or numbers.

## production-incident
desc: Guide incident response: triage, mitigate, communicate, resolve and write a postmortem. Use when production is down or degraded.
- Assess impact and severity; assign an incident lead.
- Mitigate first: rollback, feature flag, scale up, failover.
- Communicate status at a regular cadence.
- Find root cause once stable.
- Write a blameless postmortem with action items.
check: Mitigation before deep debugging; status communicated; actions owned
out: Incident timeline and postmortem.

## log-analysis
desc: Analyse logs to find errors, patterns and anomalies using grep, jq, or log query languages. Use when investigating behaviour from logs.
- Narrow the time window and services involved.
- Filter by error level and correlation IDs.
- Count and group errors to find the dominant pattern.
- Trace a single failing request end to end.
- Summarise findings with sample log lines.
check: Findings quantified; sample evidence included
out: Log analysis summary with queries used.

## network-debugging
desc: Debug network and HTTP problems: DNS, TLS, CORS, timeouts, proxies and status codes. Use when requests fail or hang.
- Reproduce with curl -v and record full output.
- Check DNS resolution, TLS certificate and ports.
- For browsers, inspect CORS preflight and headers.
- Check timeouts and proxies along the path.
- Fix configuration and verify.
check: Failure reproduced outside the app; fix verified with same command
out: Diagnosis and fix.

## performance-regression
desc: Investigate why something became slower after a change, using profiling and comparison. Use after deploys that degrade performance.
- Quantify the regression with before/after metrics.
- Narrow down to the change (deploy diff, bisect).
- Profile both versions on the same workload.
- Identify and fix the cause.
- Add a performance check to prevent recurrence.
check: Regression quantified; cause proven by profile
out: Cause, fix and guard.

## environment-issues
desc: Fix "works on my machine" problems: versions, env vars, paths, OS differences and dependency mismatches. Use when code behaves differently across machines or CI.
- Compare runtime versions, OS and architecture.
- Compare environment variables and config files.
- Check lockfiles and installed dependency versions.
- Check path separators, case sensitivity and line endings.
- Pin versions and document the setup.
check: Difference identified; setup reproducible
out: Diagnosis and the pinning/config fix.

## crash-report-triage
desc: Triage crash and error reports (Sentry, Crashlytics) by frequency, impact and root cause. Use when there are many errors and limited time.
- Group errors by signature.
- Rank by affected users and frequency.
- Identify the release where each began.
- Investigate the top issues with stack traces and breadcrumbs.
- Create tickets with reproduction info.
check: Ranked by user impact; top issues have repro info
out: Prioritised error list with next actions.

# category: code-quality | Code Quality & Refactoring
agents: code-reviewer, refactoring-expert, legacy-modernizer

## code-review
desc: Review a diff or pull request for correctness, security, performance, readability and tests with prioritised comments. Use before merging.
- Read the PR description and understand intent.
- Check correctness and edge cases first.
- Check tests, error handling and security.
- Then readability, naming and consistency.
- Label comments as blocker, should-fix or nit with suggested fixes.
check: Comments reference file:line; verdict stated
out: A review with verdict and comments.

## refactor-safely
desc: Refactor code in small verified steps without changing behaviour. Use when code is hard to read or change.
- Make sure tests cover the behaviour; add characterisation tests if not.
- Pick one refactoring at a time (extract, rename, move, inline).
- Run tests after each step.
- Commit in small steps.
- Summarise structural changes.
check: Behaviour unchanged; tests green after each step
out: Refactored code and change summary.

## dead-code-removal
desc: Find and remove unused code, files, dependencies, feature flags and exports. Use to shrink and simplify a codebase.
- Use tools (ts-prune, knip, vulture, depcheck) to find candidates.
- Verify each candidate is truly unused (dynamic imports, reflection).
- Remove in small commits.
- Remove stale feature flags and their dead branches.
- Run tests and build.
check: Each removal verified; build and tests green
out: Removal list and diff.

## naming-cleanup
desc: Improve naming of variables, functions, files and modules for clarity and consistency. Use when code is hard to understand.
- List confusing or inconsistent names.
- Propose names that reveal intent and domain terms.
- Apply consistent conventions (case, prefixes, plurals).
- Rename with IDE/codemod tools to catch all references.
- Run tests.
check: Names reflect domain language; all references updated
out: Rename map and changes.

## lint-format-setup
desc: Set up linters and formatters (ESLint, Prettier, Ruff, Black, gofmt) with pre-commit hooks and CI. Use for consistent style.
- Choose tools standard for the language.
- Configure rules close to community defaults.
- Format the whole codebase in one separate commit.
- Add pre-commit hooks and a CI check.
- Document how to run them.
check: Formatting commit separate; CI enforces
out: Config files and hook setup.

## type-safety
desc: Add or strengthen static types (TypeScript strict, mypy, Pydantic) and remove any/unsafe casts. Use to catch bugs at compile time.
- Enable stricter compiler settings incrementally.
- Type public interfaces and data boundaries first.
- Replace any/unknown casts with real types or validation.
- Validate external data at runtime (zod, Pydantic).
- Fix errors in batches and keep the build green.
check: Strictness increased; boundaries validated at runtime
out: Typing changes and new compiler settings.

## complexity-reduction
desc: Reduce cyclomatic complexity: simplify long functions, deep nesting and big conditionals. Use when functions are hard to follow.
- Measure complexity and find the worst functions.
- Use guard clauses to flatten nesting.
- Extract well-named helper functions.
- Replace conditionals with polymorphism or lookup tables when clearer.
- Keep behaviour identical with tests.
check: Complexity metrics improved; tests green
out: Simplified code with before/after metrics.

## duplication-removal
desc: Find duplicated logic and consolidate it into shared, well-named abstractions without over-engineering. Use when the same fix must be made in many places.
- Detect duplication with tools (jscpd) and review.
- Confirm duplicates represent the same concept.
- Extract a shared function or module.
- Replace call sites one by one.
- Avoid premature abstraction for coincidental similarity.
check: Shared code represents one concept; tests green
out: Consolidated code and list of call sites changed.

## framework-upgrade
desc: Upgrade a framework or language version (React, Next, Django, Node, Python) following official migration guides. Use for major version upgrades.
- Read official changelogs and migration guides.
- Upgrade dependencies in a branch, one major at a time.
- Run codemods where available.
- Fix breaking changes and deprecations.
- Run full tests and a manual smoke test.
check: Migration guide followed; tests and smoke test pass
out: Upgrade diff and notes.

## coding-standards
desc: Write a coding standards guide for a project from its existing conventions. Use to onboard developers or align a team.
- Extract conventions from the codebase (structure, naming, error handling, tests).
- Write short rules with good/bad examples.
- Note tooling that enforces each rule.
- Keep it to what matters; skip what the formatter handles.
- Publish as CONTRIBUTING or docs/standards.md.
check: Rules match the existing codebase; examples included
out: A standards document.
