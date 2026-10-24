# category: mobile | Mobile Development
agents: mobile-engineer, ui-designer, release-manager

## react-native-app
desc: Build or extend a React Native / Expo app with navigation, state, native modules and builds. Use for cross-platform mobile apps in JavaScript/TypeScript.
- Scaffold with Expo unless native requirements prevent it.
- Set up navigation and typed routes.
- Use the same data-fetching patterns as web where possible.
- Handle permissions and platform differences.
- Build with EAS and test on real devices.
check: Works on iOS and Android; permissions handled
out: App code and build config.

## flutter-app
desc: Build Flutter apps with widgets, state management, theming and platform channels. Use for Flutter/Dart projects.
- Structure features into folders with clear layers.
- Choose state management (Riverpod, Bloc) consistently.
- Build responsive layouts and theming.
- Use platform channels only when needed.
- Test widgets and integration flows.
check: Widget tests pass; consistent state management
out: Flutter code and tests.

## ios-swiftui
desc: Build native iOS features with SwiftUI, async/await, Combine and Apple frameworks. Use for native iPhone/iPad development.
- Follow Human Interface Guidelines.
- Structure with MVVM and observable models.
- Use async/await for networking.
- Support Dynamic Type, dark mode and accessibility.
- Test with XCTest and previews.
check: Accessibility and dark mode supported
out: Swift code and tests.

## android-kotlin
desc: Build native Android features with Kotlin, Jetpack Compose, coroutines and Android architecture components. Use for native Android development.
- Follow Material Design guidelines.
- Use Compose with ViewModel and state hoisting.
- Use coroutines and Flow for async work.
- Handle lifecycle and configuration changes.
- Test with JUnit and Compose tests.
check: Survives rotation and process death
out: Kotlin code and tests.

## offline-sync
desc: Design offline-first data and sync: local database, queues, conflict resolution and background sync. Use for apps used with unreliable connectivity.
- Choose local storage (SQLite, WatermelonDB, Realm).
- Queue writes while offline.
- Define conflict resolution rules.
- Sync in background with retries.
- Show sync status to users.
check: Conflicts handled deterministically; no data loss offline
out: Sync design and implementation.

## push-notifications
desc: Implement push notifications (APNs, FCM, Expo) with permissions, tokens, deep links and preferences. Use to re-engage users.
- Ask permission at a meaningful moment.
- Register and store device tokens per user.
- Send from server with retries and token cleanup.
- Deep link into the right screen.
- Let users control notification types.
check: Permission requested in context; invalid tokens cleaned
out: Notification code and server sender.

## app-store-release
desc: Prepare App Store and Google Play releases: metadata, screenshots, privacy labels, review guidelines and staged rollout. Use before publishing a mobile app.
- Check review guidelines for risky features.
- Prepare metadata, keywords and screenshots.
- Complete privacy and data safety forms accurately.
- Build signed release versions.
- Use staged rollout and monitor crashes.
check: Privacy forms match actual data use; staged rollout
out: Release checklist and assets list.

## mobile-performance
desc: Improve mobile app performance: startup, frame rate, memory, battery and app size. Use when apps feel slow or drain battery.
- Measure startup, frame rate and memory on low-end devices.
- Optimise lists and images.
- Reduce work on the main thread.
- Limit background tasks and location use.
- Reduce app size.
check: Measured on low-end device
out: Performance report and fixes.

## deep-linking
desc: Set up deep links and universal/app links with routing, fallbacks and attribution. Use for sharing links and marketing campaigns.
- Configure universal links (iOS) and app links (Android).
- Map URLs to screens.
- Handle not-installed fallback to web or store.
- Handle auth-required routes.
- Test on devices.
check: Works installed and not installed
out: Deep link configuration.

## mobile-analytics
desc: Instrument mobile analytics and crash reporting with privacy-respecting event tracking. Use to understand app usage.
- Define a tracking plan.
- Integrate analytics and crash SDKs.
- Respect consent and platform tracking rules.
- Verify events in debug mode.
- Build key dashboards.
check: Consent respected; events verified
out: Analytics setup and tracking plan.

# category: git | Git & Collaboration
agents: release-manager, code-reviewer, devops-engineer

## commit-message
desc: Write clear conventional commit messages from staged changes. Use before committing.
- Review the staged diff.
- Choose type (feat, fix, refactor, docs, test, chore) and scope.
- Write an imperative summary under 72 characters.
- Explain why in the body if not obvious.
- Reference issues.
check: Summary imperative and short; type correct
out: Commit message.

## pull-request-writer
desc: Write a pull request description with summary, changes, testing evidence, screenshots and risks. Use when opening a PR.
- Summarise the change and its motivation.
- List key changes by area.
- Describe how it was tested.
- Note risks, migrations and rollout steps.
- Link issues.
check: Testing evidence included; risks noted
out: PR description.

## branching-strategy
desc: Choose and document a branching strategy (trunk-based, GitHub flow, release branches) with protection rules. Use to organise team git workflow.
- Assess team size and release cadence.
- Recommend a strategy.
- Define branch naming and protections.
- Define merge method.
- Document the workflow.
check: Protections defined; strategy fits release cadence
out: Branching guide.

## merge-conflict-resolver
desc: Resolve git merge or rebase conflicts by understanding both sides' intent. Use when a merge is stuck.
- List conflicted files.
- Read both versions and the base.
- Combine intentions, not just text.
- Run tests after resolving.
- Explain decisions in the commit.
check: Tests pass; both intentions preserved
out: Resolved files and explanation.

## git-history-cleanup
desc: Clean up git history safely: squash, reorder, split commits, or remove large files and secrets with filter-repo. Use before merging or after mistakes.
- Back up the branch first.
- Use non-interactive rebase strategies or filter-repo as appropriate.
- Never rewrite shared history without coordination.
- Rotate any secret that was committed.
- Force-push with lease only when agreed.
check: Backup made; collaborators informed
out: Cleaned history and notes.

## changelog-writer
desc: Write a user-facing changelog from commits and PRs following Keep a Changelog. Use for releases.
- Collect merged changes since last release.
- Group into Added, Changed, Fixed, Removed, Security.
- Write user-facing descriptions.
- Highlight breaking changes.
- Link PRs.
check: Breaking changes highlighted; user language
out: CHANGELOG entry.

## repo-setup
desc: Set up a professional GitHub repository: README, licence, .gitignore, templates, CI, branch protection and topics. Use when creating or publishing a project.
- Add README with badges, install and usage.
- Choose licence.
- Add .gitignore, issue/PR templates and CONTRIBUTING.
- Add CI workflow.
- Configure description, topics and branch protection.
check: README has install instructions; licence present
out: Repo files and settings checklist.

## code-owners
desc: Set up CODEOWNERS and review rules so the right people review changes. Use for multi-team repos.
- Map directories to owning teams.
- Write CODEOWNERS.
- Require code-owner reviews on protected branches.
- Avoid single points of failure.
- Review periodically.
check: Every critical path has an owner
out: CODEOWNERS file.

## open-source-launch
desc: Prepare a project for open-source release: licence, docs, contribution guide, code of conduct, issue labels and announcement. Use before publishing a project publicly.
- Remove secrets and internal references.
- Add licence, README, CONTRIBUTING and CODE_OF_CONDUCT.
- Add good-first-issue labels and templates.
- Set up CI and releases.
- Draft a launch announcement.
check: Secret scan clean; contribution path clear
out: Launch checklist and files.

## github-issues-triage
desc: Triage GitHub issues: label, deduplicate, prioritise, request info and close stale ones. Use for busy repositories.
- Read new issues and label by type and area.
- Find duplicates.
- Ask for reproduction info when missing.
- Prioritise by impact.
- Close stale issues politely.
check: Every issue labelled; duplicates linked
out: Triage summary.

# category: docs | Documentation
agents: technical-writer, documentation-engineer

## readme-writer
desc: Write a great README: what it is, why, install, quick start, usage, configuration, contributing and licence. Use for any project.
- Explain what the project does in one sentence.
- Show a quick start that works copy-paste.
- Document configuration and common tasks.
- Add badges, screenshots or GIFs where helpful.
- Link to deeper docs, contributing and licence.
check: Quick start tested; one-sentence pitch
out: README.md.

## api-reference-docs
desc: Generate and polish API reference docs from code or OpenAPI specs. Use when developers need complete reference material.
- Generate reference from source of truth.
- Add descriptions and examples to each item.
- Group logically.
- Document errors and limits.
- Publish and link from README.
check: Every public item documented with example
out: API reference pages.

## tutorial-writer
desc: Write step-by-step tutorials that take a beginner from zero to a working result. Use for onboarding users or developers.
- Define the end result and prerequisites.
- Write numbered steps with commands and expected output.
- Explain the why briefly at each step.
- Test the tutorial from scratch.
- End with next steps.
check: Tested from clean environment
out: Tutorial document.

## architecture-docs
desc: Document system architecture for developers: overview, components, data flow, decisions and operations. Use for onboarding and knowledge sharing.
- Write a one-page overview.
- Add diagrams for context and containers.
- Describe components and responsibilities.
- Link ADRs.
- Describe how to run, deploy and debug.
check: New developer can find their way
out: docs/architecture.md.

## docstrings
desc: Add docstrings and inline documentation to public functions, classes and modules in the project's style. Use when code lacks documentation.
- Detect the docstring style used.
- Document purpose, parameters, returns, errors and examples.
- Explain why for non-obvious code.
- Avoid comments that restate the code.
- Generate docs to verify.
check: Style consistent; no redundant comments
out: Documented code.

## user-guide
desc: Write end-user help documentation and FAQs in plain language with screenshots placeholders. Use for product help centres.
- List user tasks.
- Write a short article per task.
- Use plain language and numbered steps.
- Add FAQs from support tickets.
- Organise by user journey.
check: Plain language; task-oriented
out: Help articles.

## onboarding-guide
desc: Write a developer onboarding guide: setup, architecture tour, workflows, conventions and first tasks. Use when new people join a project.
- List setup steps with commands.
- Give an architecture tour.
- Explain workflows (branches, reviews, deploys).
- Link standards.
- Suggest starter tasks.
check: Setup verified on a fresh machine
out: ONBOARDING.md.

## docs-site
desc: Set up a documentation website (Docusaurus, MkDocs Material, VitePress, Starlight) with navigation, search and deployment. Use when docs outgrow a README.
- Pick a generator.
- Structure navigation by doc type.
- Enable search and versioning if needed.
- Deploy via CI to GitHub Pages or similar.
- Add link checking.
check: Builds in CI; search works
out: Docs site configuration.

## diagram-as-code
desc: Create diagrams as code with Mermaid, PlantUML or D2: flowcharts, sequence, ER, state and architecture diagrams. Use to explain flows visually.
- Choose diagram type for the question.
- Write diagram source.
- Keep it readable.
- Render and check.
- Store next to docs.
check: Renders without errors; labels clear
out: Diagram source and render.

## docs-audit
desc: Audit documentation for outdated content, broken links, gaps and inconsistencies. Use periodically.
- Inventory pages and last-updated dates.
- Check links and code samples.
- Compare docs with current behaviour.
- List gaps from support questions.
- Prioritise fixes.
check: Broken links listed; samples tested
out: Docs audit report.
