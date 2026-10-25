---
name: legion-backend
description: "Backend Development pack with 10 ready procedures: crud service, background jobs, webhook handler, file uploads, email notifications, payments integration, search feature, rate limiting, config management, login flow. Use for any backend development task."
---
# Backend Development — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `crud-service` | Implement a complete CRUD feature: model, validation, service layer, endpoints, pagination and tests. Use for new resources in a backend. |
| `background-jobs` | Add background jobs and queues (BullMQ, Celery, Sidekiq, cloud queues) with retries, idempotency and monitoring. Use for emails, reports, imports or slow work. |
| `webhook-handler` | Build secure webhook receivers and senders: signature verification, idempotency, retries and replay. Use for Stripe, GitHub, payment or any event callbacks. |
| `file-uploads` | Implement file uploads safely: presigned URLs, size/type limits, virus scanning, image processing and storage. Use for avatars, documents or media uploads. |
| `email-notifications` | Send transactional emails and notifications with templates, queues, providers (SES, Resend, SendGrid) and deliverability setup. Use for signup, password reset, receipts or alerts. |
| `payments-integration` | Integrate payments (Stripe, Mercado Pago, PayPal): checkout, subscriptions, webhooks, refunds and reconciliation. Use when a product needs to charge money. |
| `search-feature` | Add search: database full-text, Postgres trigram, Meilisearch/Typesense/Elasticsearch, with ranking, filters and typo tolerance. Use when users need to find content. |
| `rate-limiting` | Add rate limiting and throttling to APIs (token bucket, sliding window) per user, IP or key. Use to protect endpoints from abuse and overload. |
| `config-management` | Organise application configuration and environment variables with validation, defaults and per-environment overrides. Use when config is scattered or deployments fail from missing variables. |
| `login-flow` | Implement signup, login, logout, password reset and email verification with secure sessions or a managed auth provider. Use when an app needs user accounts. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
