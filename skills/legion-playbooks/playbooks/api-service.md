# Playbook: API service

**Goal:** a documented, tested, secured API deployed with monitoring.
**Mode:** lite → full for public APIs · **Council:** review of spec (plan) and final diff

## Ask first
- Consumers (own front-end, partners, public), main resources and operations
- Auth model (API keys, OAuth), expected load, data store preference

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | api-designer | `legion-api` → rest-api-design, openapi-spec | OpenAPI spec | spec lints clean |
| — | council | `legion-council` plan openapi.yaml | spec critique | findings resolved |
| 2 | database-architect | `legion-database` → schema-design | schema + migrations | migrations run |
| 2 | backend-engineer | `legion-backend` → crud-service, rate-limiting | endpoints | tests pass |
| 2 | auth-specialist | `legion-security` → access-control-review | auth + permission matrix | permission tests pass |
| 3 | unit-tester | `legion-api` → api-testing | integration + contract tests | CI green |
| 3 | technical-writer | `legion-api` → api-docs-portal | quickstart + reference | quickstart works copy-paste |
| 3 | devops-engineer | `legion-devops` → dockerize-app, deploy-pipeline | deploy | health endpoint 200 |
| 4 | qa-gatekeeper | `legion-testing` → load-testing | load test vs target | p95 under target |

## Definition of done
Spec matches implementation, tests and docs pass, deployed with health check and rate limits.
