# category: security | Security (defensive)
agents: security-auditor, appsec-engineer, secrets-guardian, threat-modeler

## security-review
desc: Run a defensive security review of your own code against OWASP Top 10 with severity and fixes. Use before releases or after big changes.
- Map entry points, data flows and sensitive data.
- Check auth, access control, input validation, output encoding and crypto usage.
- Check dependencies and configuration.
- Rate each finding by severity and exploitability.
- Give concrete fixes and tests.
check: Only the user's own or authorised systems; every finding has a fix
out: Security review report ordered by severity.

## owasp-checklist
desc: Walk through the OWASP Top 10 and ASVS checklist for a web app and record pass/fail with evidence. Use for structured security assessments.
- List the checklist items relevant to the app.
- Check each with code references or test evidence.
- Mark pass, fail or not applicable.
- Prioritise failures.
- Create remediation tickets.
check: Evidence recorded for every item
out: Completed checklist table.

## secret-scan
desc: Scan code and git history for leaked secrets and remediate (rotate, remove, prevent). Use when credentials may have been committed.
- Run a secret scanner over the working tree and history.
- Mask values in all output.
- Rotate every real secret found first.
- Move secrets into environment variables or a secret manager.
- Add pre-commit and CI scanning.
check: Secrets rotated, not just deleted; values masked in reports
out: Masked findings and remediation steps.

## dependency-audit
desc: Audit dependencies for vulnerabilities and licence issues and plan upgrades. Use regularly or before releases.
- Run the ecosystem audit tool.
- Check whether vulnerable code paths are reachable.
- Check licences against policy.
- Group safe upgrades and test them.
- Enable automated dependency update PRs.
check: Critical issues addressed or justified; tests pass after upgrades
out: Audit report and upgrade PR plan.

## input-validation
desc: Add strict input validation and sanitisation at every trust boundary (schemas, allowlists, encoding). Use to prevent injection and bad data.
- List every input: params, bodies, headers, files, webhooks.
- Define schemas with types, lengths, formats and allowlists.
- Validate at the boundary and reject invalid input.
- Use parameterised queries and context-aware output encoding.
- Add tests with malicious inputs.
check: All boundaries validated; queries parameterised
out: Validation code and tests.

## security-headers
desc: Configure security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors, referrer and permissions policies, CORS. Use when hardening a web app.
- Audit current headers.
- Add HSTS, nosniff, referrer policy and frame protections.
- Build a CSP starting in report-only mode.
- Configure CORS to exact allowed origins.
- Verify with a header scanner.
check: CSP tested in report-only first; CORS not wildcard with credentials
out: Header configuration and scan results.

## threat-model
desc: Create a STRIDE threat model with data-flow diagram, threats and mitigations. Use when designing features that handle sensitive data or money.
- Draw the data-flow diagram with trust boundaries.
- Enumerate STRIDE threats per element.
- Rate and map to mitigations.
- Identify design changes that remove threats.
- Record owners for mitigations.
check: Trust boundaries explicit; high threats mitigated
out: Threat model document.

## access-control-review
desc: Review authorisation logic for broken access control: IDOR, privilege escalation and missing checks. Use for multi-user or multi-tenant apps.
- List roles, resources and allowed actions as a matrix.
- Find every endpoint and check its authorisation.
- Test object-level access with another user's IDs.
- Centralise checks in policies or middleware.
- Add tests for each boundary.
check: Every endpoint has an explicit check; IDOR tests exist
out: Permission matrix and fixes.

## encryption-setup
desc: Apply encryption correctly: TLS everywhere, encryption at rest, key management and password hashing. Use when storing or transmitting sensitive data.
- Enforce TLS 1.2+ for all traffic.
- Enable at-rest encryption for databases, disks and backups.
- Use a KMS for keys; rotate them.
- Hash passwords with argon2id or bcrypt.
- Never write custom crypto.
check: No plaintext secrets at rest; keys in KMS
out: Encryption configuration and notes.

## security-incident-response
desc: Respond to a suspected security incident in your own systems: contain, preserve evidence, eradicate, recover and notify. Use when a breach or compromise is suspected.
- Contain: revoke credentials, isolate affected systems.
- Preserve logs and evidence before changes.
- Identify scope and entry point.
- Eradicate, patch and restore from clean state.
- Assess notification duties and involve legal counsel.
check: Credentials rotated; evidence preserved; legal review flagged
out: Incident report and action list.

# category: devops | DevOps & CI/CD
agents: devops-engineer, ci-cd-engineer, container-specialist, release-manager

## github-actions-ci
desc: Create a GitHub Actions CI pipeline with lint, test, build, caching and matrix builds. Use for any repo without CI.
- Detect language, package manager and test commands.
- Create workflow on pull_request and push to main.
- Add dependency caching and a version matrix if needed.
- Pin actions and set minimal permissions.
- Add a status badge to the README.
check: Pipeline green; permissions minimal; caching works
out: .github/workflows/ci.yml.

## dockerize-app
desc: Containerise an application with a small, secure multi-stage Dockerfile and docker-compose for local development. Use to run an app anywhere.
- Choose a slim, pinned base image.
- Use multi-stage build and copy only runtime artifacts.
- Run as non-root with a health check.
- Add .dockerignore and compose file with dependencies.
- Build, run and measure image size.
check: Non-root; image small; app runs via compose
out: Dockerfile, .dockerignore, docker-compose.yml.

## kubernetes-deploy
desc: Deploy to Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, probes and resource limits (or Helm). Use for k8s deployments.
- Write Deployment with probes, resources and security context.
- Add Service and Ingress with TLS.
- Externalise config and secrets.
- Add HPA if load varies.
- Validate with kubeval/kubeconform and a dry run.
check: Probes and limits set; secrets not in plain manifests
out: Manifests or Helm chart.

## deploy-pipeline
desc: Build a continuous deployment pipeline with environments, approvals, migrations and rollback. Use to automate releases.
- Define environments (preview, staging, production).
- Deploy automatically to staging; require approval for production.
- Run database migrations safely as a step.
- Add smoke tests after deploy.
- Implement one-click rollback.
check: Rollback tested; production gated; smoke tests run
out: Deployment workflow and runbook.

## preview-environments
desc: Set up per-pull-request preview deployments (Vercel, Netlify, Render, Fly, k8s namespaces). Use to review changes live before merge.
- Choose a platform that fits the stack.
- Deploy on each PR with a unique URL.
- Use isolated or seeded data.
- Post the URL on the PR.
- Tear down on merge/close.
check: Previews isolated; cleaned up automatically
out: Preview configuration.

## infrastructure-as-code
desc: Write Terraform, Pulumi or CDK code for infrastructure with modules, state management and plans. Use to stop clicking in cloud consoles.
- Inventory existing resources.
- Structure code into modules per component.
- Configure remote state with locking.
- Run plan in CI and apply with approval.
- Import existing resources rather than recreating.
check: Remote locked state; plan reviewed before apply
out: IaC code and CI workflow.

## dev-environment-setup
desc: Create a one-command developer setup (Makefile, scripts, devcontainer, mise/asdf) that works on Windows, Mac and Linux. Use when onboarding is slow.
- List every tool and version needed.
- Pin versions with a version manager or devcontainer.
- Provide setup, run, test and reset commands.
- Seed local data.
- Document in the README.
check: Fresh machine setup works with documented commands
out: Setup scripts and README section.

## release-automation
desc: Automate versioning, changelogs and releases (semantic-release, changesets, release-please). Use to stop manual release chores.
- Adopt conventional commits or changesets.
- Configure the release tool for the repo type.
- Generate changelogs and GitHub releases.
- Publish packages or artifacts automatically.
- Protect release workflow permissions.
check: Versions follow semver; changelog generated
out: Release configuration.

## pre-commit-hooks
desc: Set up pre-commit hooks for formatting, linting, tests and secret scanning (husky, lefthook, pre-commit). Use to catch problems before they reach CI.
- Choose the hook manager for the ecosystem.
- Run fast checks on staged files only.
- Add secret scanning.
- Keep hooks under a few seconds.
- Document how to bypass in emergencies.
check: Hooks fast; run on staged files
out: Hook configuration.

## monorepo-setup
desc: Organise a monorepo with workspaces, shared packages, task caching (Turborepo, Nx, pnpm) and CI filtering. Use when multiple apps share code.
- Choose workspace tool and task runner.
- Structure apps/ and packages/ with clear boundaries.
- Configure task pipelines and caching.
- Run CI only for affected packages.
- Share configs (tsconfig, eslint).
check: Affected-only CI; caching works
out: Monorepo configuration.

# category: cloud | Cloud & Infrastructure
agents: cloud-architect, cloud-security-engineer, cost-optimizer, devops-engineer

## aws-architecture
desc: Design AWS architectures using managed services (Lambda, ECS, RDS, S3, CloudFront, SQS) with IAM and networking. Use for building on AWS.
- Map requirements to AWS services, preferring managed options.
- Design VPC, subnets and security groups only as needed.
- Define least-privilege IAM roles.
- Plan monitoring, backups and multi-AZ.
- Estimate cost with the pricing calculator.
check: Least privilege IAM; multi-AZ where needed; cost estimated
out: AWS design with diagram and cost.

## gcp-architecture
desc: Design Google Cloud architectures (Cloud Run, GKE, Cloud SQL, Pub/Sub, BigQuery, Firebase). Use for building on GCP.
- Map requirements to GCP managed services.
- Design projects, service accounts and IAM.
- Plan networking and private connectivity.
- Configure logging, monitoring and budgets.
- Estimate monthly cost.
check: Service accounts least privilege; budgets set
out: GCP design and cost.

## azure-architecture
desc: Design Azure architectures (App Service, Functions, AKS, Cosmos DB, Azure SQL, Entra ID). Use for building on Azure.
- Map requirements to Azure services.
- Organise resource groups and subscriptions.
- Use managed identities instead of secrets.
- Plan monitoring with Azure Monitor.
- Estimate cost.
check: Managed identities used; cost estimated
out: Azure design and cost.

## serverless-app
desc: Build serverless applications with functions, managed queues, storage and API gateways, handling cold starts and limits. Use for event-driven or spiky workloads.
- Split work into small functions triggered by events.
- Choose runtime and memory for latency and cost.
- Handle cold starts, timeouts and concurrency limits.
- Use managed queues for retries.
- Deploy with a framework (SST, Serverless, SAM).
check: Timeouts and retries configured; IaC used
out: Serverless app code and deploy config.

## edge-deploy
desc: Deploy apps and functions to edge platforms (Cloudflare Workers, Vercel, Netlify) with caching, KV and CDN rules. Use for global low-latency sites.
- Check runtime limits and API compatibility.
- Configure caching and revalidation.
- Use edge storage (KV, D1, R2) where it fits.
- Set custom domains and TLS.
- Measure latency from several regions.
check: Runtime constraints respected; cache rules verified
out: Edge configuration and deploy steps.

## cloud-cost-review
desc: Review cloud bills and find savings: idle resources, rightsizing, commitments, storage tiers and data transfer. Use when costs grow unexpectedly.
- Export cost by service, tag and environment.
- Find idle, oversized and orphaned resources.
- Recommend rightsizing and commitments for steady load.
- Move cold data to cheaper tiers.
- Set budgets and anomaly alerts.
check: Savings quantified per action; risks noted
out: Savings plan table.

## iam-least-privilege
desc: Review and tighten IAM policies to least privilege, removing wildcards and unused permissions. Use for cloud security hardening.
- List roles, users and their attached policies.
- Use access analyser or last-used data to find unused permissions.
- Replace wildcards with specific actions and resources.
- Enforce MFA and remove long-lived keys.
- Test that workloads still function.
check: No unnecessary wildcards; workloads verified
out: Updated policies and change log.

## dns-domains
desc: Configure domains and DNS records (A, CNAME, MX, TXT, SPF, DKIM, DMARC) and TLS certificates. Use when connecting a domain to a site or email.
- List services that need records (web, email, verification).
- Create records with correct TTLs.
- Configure email authentication records.
- Issue TLS certificates (automatic where possible).
- Verify propagation with dig.
check: Email auth records valid; HTTPS works on apex and www
out: DNS record table and verification output.

## disaster-recovery
desc: Plan disaster recovery: RPO/RTO, backups, multi-region failover and recovery drills. Use for business-critical systems.
- Define RPO and RTO per system.
- Choose strategy: backup/restore, pilot light, warm standby, active-active.
- Automate backups and replication.
- Write the failover runbook.
- Schedule recovery drills.
check: Strategy matches RTO/RPO; drill scheduled
out: DR plan and runbook.

## vps-setup
desc: Set up a VPS (Hetzner, DigitalOcean, Lightsail) securely with SSH keys, firewall, updates, reverse proxy and TLS. Use for simple self-hosting.
- Create a non-root user with SSH key login; disable password login.
- Enable firewall allowing only needed ports.
- Enable automatic security updates.
- Install a reverse proxy (Caddy/Nginx) with automatic TLS.
- Set up backups and basic monitoring.
check: Root and password login disabled; firewall on; TLS working
out: Setup script and checklist.
