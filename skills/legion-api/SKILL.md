---
name: legion-api
description: "API Design & Integration pack with 10 ready procedures: rest api design, openapi spec, graphql schema, api versioning, api client sdk, third party api integration, api error handling, api testing, api docs portal, grpc service. Use for any api design & integration task."
---
# API Design & Integration — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `rest-api-design` | Design a RESTful API with resources, methods, status codes, errors, pagination and filtering. Use before building endpoints. |
| `openapi-spec` | Write or generate an OpenAPI 3 specification with schemas, examples, security schemes and validation. Use to document an API or generate clients. |
| `graphql-schema` | Design a GraphQL schema with types, queries, mutations, pagination, errors and resolver performance (DataLoader). Use for GraphQL APIs. |
| `api-versioning` | Plan API versioning, deprecation and backward-compatible changes. Use before making breaking changes to a public API. |
| `api-client-sdk` | Build a typed API client or SDK with auth, retries, pagination helpers and error types. Use to make an API easy to consume. |
| `third-party-api-integration` | Integrate any external API safely: read docs, auth, rate limits, error handling, adapters and mocks. Use when connecting to a new service. |
| `api-error-handling` | Standardise API error handling: error codes, messages, logging, client guidance and mapping from exceptions. Use when errors are inconsistent or leak internals. |
| `api-testing` | Test APIs with integration and contract tests (Supertest, pytest, Postman/Newman, Pact). Use to verify endpoints and prevent breaking clients. |
| `api-docs-portal` | Produce developer-friendly API documentation: quickstart, auth guide, reference and code samples. Use when external developers will use the API. |
| `grpc-service` | Design and implement gRPC services with protobuf schemas, streaming, deadlines and error codes. Use for high-performance internal service communication. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
