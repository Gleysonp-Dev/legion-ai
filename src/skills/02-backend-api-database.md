# category: backend | Backend Development
agents: backend-engineer, integration-engineer, auth-specialist

## crud-service
desc: Implement a complete CRUD feature: model, validation, service layer, endpoints, pagination and tests. Use for new resources in a backend.
- Define the entity, fields, constraints and ownership rules.
- Add a migration and model with database constraints.
- Implement service logic with input validation and authorisation checks.
- Expose endpoints with pagination, filtering and consistent errors.
- Write unit and integration tests for each operation.
check: Authorisation enforced per record; validation on all inputs; tests pass
out: Model, migration, service, routes and tests.

## background-jobs
desc: Add background jobs and queues (BullMQ, Celery, Sidekiq, cloud queues) with retries, idempotency and monitoring. Use for emails, reports, imports or slow work.
- Identify work that should leave the request path.
- Choose the queue technology that fits the stack.
- Make jobs idempotent and safe to retry; set retry policy with backoff.
- Send failed jobs to a dead-letter queue with alerts.
- Expose job status where users need it.
check: Jobs idempotent; retries bounded; failures visible
out: Job definitions, worker setup and monitoring notes.

## webhook-handler
desc: Build secure webhook receivers and senders: signature verification, idempotency, retries and replay. Use for Stripe, GitHub, payment or any event callbacks.
- Verify signatures with the provider's secret and reject stale timestamps.
- Respond 2xx fast and process asynchronously.
- Deduplicate by event ID.
- Log events with IDs for replay and debugging.
- For outgoing webhooks, sign payloads and retry with backoff.
check: Signature verified; duplicate events ignored; processing async
out: Webhook endpoint/sender code with tests.

## file-uploads
desc: Implement file uploads safely: presigned URLs, size/type limits, virus scanning, image processing and storage. Use for avatars, documents or media uploads.
- Upload directly to object storage with presigned URLs.
- Enforce size limits and validate content type by magic bytes, not extension.
- Store files with random keys; never trust user filenames.
- Process images (resize, strip metadata) asynchronously.
- Serve through a CDN with correct access control.
check: Limits enforced server-side; filenames sanitised; private files not public
out: Upload flow code and storage configuration.

## email-notifications
desc: Send transactional emails and notifications with templates, queues, providers (SES, Resend, SendGrid) and deliverability setup. Use for signup, password reset, receipts or alerts.
- Define each notification: trigger, recipient, content, channel.
- Build templates with plain-text fallback.
- Send via a queue with retries.
- Configure SPF, DKIM and DMARC for the sending domain.
- Respect unsubscribe preferences for non-essential mail.
check: Domain authenticated; sending async; unsubscribe honoured
out: Notification module, templates and DNS checklist.

## payments-integration
desc: Integrate payments (Stripe, Mercado Pago, PayPal): checkout, subscriptions, webhooks, refunds and reconciliation. Use when a product needs to charge money.
- Use the provider's hosted checkout or elements to avoid handling card data.
- Model customers, products, prices and subscriptions locally with provider IDs.
- Drive state changes from verified webhooks, not redirects.
- Handle failures, retries, refunds and proration.
- Test with the provider's test mode and test cards.
check: No raw card data touches the server; state driven by webhooks; test mode verified
out: Payment integration code and a test checklist.

## search-feature
desc: Add search: database full-text, Postgres trigram, Meilisearch/Typesense/Elasticsearch, with ranking, filters and typo tolerance. Use when users need to find content.
- Clarify what is searched, by whom, and expected volume.
- Start with database full-text if it is enough; move to a search engine when needed.
- Define indexed fields, ranking and filters.
- Keep the index in sync via events or scheduled jobs.
- Measure relevance with sample queries.
check: Results respect permissions; index stays in sync; relevance tested
out: Search implementation and a relevance test list.

## rate-limiting
desc: Add rate limiting and throttling to APIs (token bucket, sliding window) per user, IP or key. Use to protect endpoints from abuse and overload.
- Identify endpoints to protect and fair limits per tier.
- Choose algorithm and storage (in-memory, Redis).
- Return 429 with Retry-After and rate-limit headers.
- Apply stricter limits to auth and expensive endpoints.
- Monitor limit hits for tuning.
check: Limits distributed-safe; headers returned; auth endpoints protected
out: Rate-limit middleware and configuration.

## config-management
desc: Organise application configuration and environment variables with validation, defaults and per-environment overrides. Use when config is scattered or deployments fail from missing variables.
- Inventory all configuration values and where they are read.
- Centralise into one typed config module validated at startup.
- Provide a documented .env.example without secrets.
- Separate secrets from non-secret config.
- Fail fast with clear errors when required values are missing.
check: App fails fast on bad config; .env.example complete; no secrets committed
out: Config module and .env.example.

## login-flow
desc: Implement signup, login, logout, password reset and email verification with secure sessions or a managed auth provider. Use when an app needs user accounts.
- Prefer a managed provider or well-maintained library.
- Hash passwords with argon2 or bcrypt; never store plaintext.
- Use secure, httpOnly, sameSite cookies or short-lived tokens with refresh rotation.
- Implement reset and verification with single-use, expiring tokens.
- Rate-limit and log auth events.
check: Passwords hashed; tokens expire; generic error messages avoid user enumeration
out: Auth flow code and tests.

# category: api | API Design & Integration
agents: api-designer, backend-engineer, integration-engineer

## rest-api-design
desc: Design a RESTful API with resources, methods, status codes, errors, pagination and filtering. Use before building endpoints.
- Model resources and relationships from use cases.
- Assign HTTP methods and status codes consistently.
- Standardise error responses (e.g. RFC 9457 problem details).
- Define pagination (cursor preferred), filtering and sorting.
- Provide request/response examples per endpoint.
check: Consistent naming; errors standardised; pagination defined
out: An API design table and examples.

## openapi-spec
desc: Write or generate an OpenAPI 3 specification with schemas, examples, security schemes and validation. Use to document an API or generate clients.
- Describe every path, parameter, request body and response.
- Define reusable component schemas with required fields and formats.
- Add security schemes and per-operation requirements.
- Include realistic examples.
- Validate the spec with a linter (Spectral or Redocly).
check: Spec validates; every response documented; examples realistic
out: openapi.yaml validated.

## graphql-schema
desc: Design a GraphQL schema with types, queries, mutations, pagination, errors and resolver performance (DataLoader). Use for GraphQL APIs.
- Model types around client needs, not database tables.
- Use connection-style pagination for lists.
- Design mutations with input types and payloads including errors.
- Prevent N+1 queries with DataLoader.
- Add depth/complexity limits.
check: No N+1 in resolvers; complexity limited; nullability deliberate
out: SDL schema and resolver notes.

## api-versioning
desc: Plan API versioning, deprecation and backward-compatible changes. Use before making breaking changes to a public API.
- Classify the change as additive or breaking.
- Choose a versioning scheme (URL, header, date-based).
- Keep old behaviour working during a deprecation window.
- Announce deprecation with headers, docs and changelog.
- Track usage of old versions before removal.
check: Breaking changes identified; deprecation window defined; usage tracked
out: A versioning and deprecation plan.

## api-client-sdk
desc: Build a typed API client or SDK with auth, retries, pagination helpers and error types. Use to make an API easy to consume.
- Generate types from the OpenAPI spec when possible.
- Wrap auth, base URL and timeouts in a client constructor.
- Add retries with backoff for idempotent requests.
- Provide pagination iterators and typed errors.
- Write README examples and tests against a mock server.
check: Types match spec; retries only on idempotent calls; examples run
out: SDK code, tests and README.

## third-party-api-integration
desc: Integrate any external API safely: read docs, auth, rate limits, error handling, adapters and mocks. Use when connecting to a new service.
- Read the official docs and note auth, limits, pagination and error codes.
- Create an adapter interface so the rest of the code does not depend on the provider.
- Handle timeouts, retries and rate limits.
- Store credentials in secrets, never in code.
- Write tests against recorded or mocked responses.
check: Provider isolated behind adapter; credentials in secrets; failures handled
out: Adapter module with tests and setup notes.

## api-error-handling
desc: Standardise API error handling: error codes, messages, logging, client guidance and mapping from exceptions. Use when errors are inconsistent or leak internals.
- Define an error format with code, message, details and request ID.
- Map domain and validation exceptions to status codes centrally.
- Hide stack traces and internals from clients.
- Log errors with context and correlation IDs.
- Document error codes for clients.
check: No internals leaked; every error has a request ID; codes documented
out: Error middleware and error catalogue.

## api-testing
desc: Test APIs with integration and contract tests (Supertest, pytest, Postman/Newman, Pact). Use to verify endpoints and prevent breaking clients.
- List endpoints and their success and failure cases.
- Write integration tests against a test database.
- Add contract tests for consumers where multiple teams depend on the API.
- Test auth and permission boundaries explicitly.
- Run in CI with seeded data.
check: Auth boundaries tested; failures tested, not just happy paths
out: API test suite and CI wiring.

## api-docs-portal
desc: Produce developer-friendly API documentation: quickstart, auth guide, reference and code samples. Use when external developers will use the API.
- Write a 5-minute quickstart that ends with a successful call.
- Explain authentication with a working example.
- Generate reference docs from the spec.
- Add samples in curl and the top 2 languages of the audience.
- Document rate limits, errors and changelog.
check: Quickstart works copy-paste; samples tested
out: API docs pages.

## grpc-service
desc: Design and implement gRPC services with protobuf schemas, streaming, deadlines and error codes. Use for high-performance internal service communication.
- Define messages and services in .proto with field numbering discipline.
- Choose unary vs streaming per method.
- Set deadlines and handle cancellation.
- Map errors to gRPC status codes.
- Generate code and add reflection/health checks.
check: Field numbers never reused; deadlines set; health check present
out: .proto files and service implementation.

# category: database | Databases & Data Modelling
agents: database-architect, backend-engineer

## schema-design
desc: Design a relational schema with tables, keys, constraints, relationships and indexes from requirements. Use when starting a data model.
- List entities, attributes and relationships from use cases.
- Normalise to 3NF; denormalise only with a measured reason.
- Add primary keys, foreign keys, unique and check constraints.
- Add indexes for known query patterns.
- Draw an ER diagram in Mermaid.
check: Constraints enforce business rules; indexes match queries; ER diagram included
out: SQL DDL and ER diagram.

## migration-writer
desc: Write safe database migrations, including zero-downtime changes (expand/contract) and rollback scripts. Use for any schema change in production.
- Classify the change: additive, destructive or data migration.
- For risky changes, use expand → backfill → switch → contract.
- Avoid long locks: add indexes concurrently, batch backfills.
- Write down and test the rollback.
- Run on a copy of production-sized data if possible.
check: No long table locks; rollback tested; backfill batched
out: Migration files with rollback and run notes.

## query-optimization
desc: Speed up slow SQL queries using EXPLAIN plans, indexes, query rewrites and statistics. Use when a query or page is slow because of the database.
- Capture the exact slow query and its parameters.
- Run EXPLAIN (ANALYZE) and identify scans, sorts and row estimates.
- Add or adjust indexes; rewrite subqueries or OR conditions.
- Remove N+1 patterns in application code.
- Measure before and after.
check: Plan improved and verified; no regression on writes
out: Optimised query/indexes with timing evidence.

## sql-writer
desc: Write correct, readable SQL for reporting and analysis: joins, CTEs, window functions and aggregations. Use when someone needs a query written or explained.
- Clarify the question, grain and filters.
- Build the query in CTE steps that can be checked individually.
- Use window functions for rankings, running totals and period comparisons.
- Check joins for row multiplication.
- Validate results against a known number.
check: Grain correct; no duplicate rows from joins; result sanity-checked
out: SQL query with explanation.

## nosql-modeling
desc: Model data for MongoDB, DynamoDB, Firestore or Redis based on access patterns. Use when using a document or key-value database.
- List access patterns first.
- Design documents or keys to serve the main patterns in one read.
- Choose embedding vs referencing deliberately.
- Plan secondary indexes and their cost.
- Handle consistency and transactions where required.
check: Every access pattern served; hot partitions avoided
out: Data model with access-pattern table.

## orm-usage
desc: Use ORMs (Prisma, Drizzle, SQLAlchemy, TypeORM, Django ORM) efficiently: relations, eager loading, transactions and raw SQL escapes. Use when ORM code is slow or confusing.
- Review generated SQL for hot paths.
- Fix N+1 with eager loading or batched queries.
- Wrap multi-step writes in transactions.
- Select only needed columns.
- Drop to raw SQL for complex reports.
check: Generated SQL inspected; transactions used for multi-writes
out: Improved ORM code and SQL logs.

## backup-restore
desc: Set up database backups, point-in-time recovery and tested restore procedures. Use for any production database.
- Define RPO and RTO with the user.
- Configure automated backups and PITR.
- Store backups encrypted in a separate account or region.
- Write and test the restore runbook.
- Schedule periodic restore drills.
check: Restore actually tested; backups encrypted and off-site
out: Backup configuration and restore runbook.

## seed-data
desc: Create realistic seed and test data with factories, fixtures and anonymised production samples. Use for local development, demos and tests.
- Define the minimum dataset that exercises main flows.
- Build factories with realistic fake values.
- Include edge cases: long text, unicode, empty optional fields.
- Never copy raw production personal data; anonymise.
- Make seeding idempotent and one command.
check: No real personal data; seeding idempotent; edge cases present
out: Seed scripts and factories.

## postgres-tuning
desc: Tune PostgreSQL: configuration, connection pooling, vacuum, indexes, partitioning and monitoring. Use when Postgres is slow or overloaded.
- Check connection counts and add pooling (PgBouncer) if needed.
- Review memory settings against available RAM.
- Inspect bloat and autovacuum behaviour.
- Use pg_stat_statements to find top queries.
- Consider partitioning for very large time-series tables.
check: Changes measured; pooling in place; top queries reviewed
out: Tuning report with applied settings.

## data-integrity-audit
desc: Audit a database for integrity problems: orphans, duplicates, invalid values and missing constraints. Use before migrations or when data looks wrong.
- Query for orphaned foreign keys and duplicates on natural keys.
- Check value ranges, formats and nulls in required fields.
- Compare counts against source systems.
- Propose constraints to prevent recurrence.
- Write cleanup scripts with dry-run mode.
check: Findings quantified; cleanup reversible; constraints proposed
out: Integrity report and cleanup scripts.
