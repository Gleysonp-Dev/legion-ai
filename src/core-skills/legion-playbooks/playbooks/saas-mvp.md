# Playbook: SaaS MVP

**Goal:** a paying-ready web product — sign-up, the one core feature, billing, deployed with monitoring.
**Mode:** full · **Council:** after wave 1 (plan) and before launch (review)

## Ask first
- Who is the customer and what painful job does the core feature do?
- Pricing idea (free trial? plans?) and payment provider (Stripe, Mercado Pago…)
- Preferred stack and hosting (or let Legion choose); domain name if any
- Deadline and what "launched" means to them

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | product-manager | `legion-product` → mvp-scoping, prd-writer | 1-page PRD with MVP scope and non-goals | user confirms scope |
| 1 | software-architect | `legion-architecture` → tech-stack-selection, system-design | stack + architecture note + ADR | diagram and ADR in `docs/` |
| — | council | `legion-council` plan | plan critique | findings resolved |
| 2 | database-architect | `legion-database` → schema-design, migration-writer | schema + migrations | migrations run clean |
| 2 | auth-specialist | `legion-backend` → login-flow | sign-up, login, reset | auth tests pass |
| 2 | ui-designer | `legion-ux-design` → design-tokens, wireframe | tokens + key screens | screens reviewed by user |
| 3 | backend-engineer | `legion-backend` → crud-service | core feature API | API tests pass |
| 3 | ui-engineer | `legion-frontend` → component-builder, form-builder | core feature UI | E2E happy path passes |
| 3 | integration-engineer | `legion-backend` → payments-integration | checkout + webhooks (test mode) | test payment completes |
| 4 | ci-cd-engineer | `legion-devops` → github-actions-ci, deploy-pipeline | CI + deploy | preview URL returns 200 |
| 4 | observability-engineer | `legion-reliability` → logging-setup, uptime-monitoring | logs, errors, uptime | test alert received |
| 4 | security-auditor | `legion-security` → security-review | security pass | no open blocker |
| 5 | qa-gatekeeper | `legion-testing` → e2e-playwright | evidence table | all criteria proven |
| — | council | `legion-council` review --base main | independent review | blockers fixed |

## Definition of done
User can sign up, use the core feature, pay in test mode; app deployed with CI, error tracking and uptime check; privacy policy draft (`legion-legal-privacy` → privacy-policy) linked.
