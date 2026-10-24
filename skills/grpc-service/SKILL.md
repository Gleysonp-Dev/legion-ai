---
name: grpc-service
description: "Design and implement gRPC services with protobuf schemas, streaming, deadlines and error codes. Use for high-performance internal service communication."
---
# gRPC Service

> Legion skill · category **API Design & Integration**

## When to use
Design and implement gRPC services with protobuf schemas, streaming, deadlines and error codes. Use for high-performance internal service communication.

## Procedure
1. Define messages and services in .proto with field numbering discipline.
2. Choose unary vs streaming per method.
3. Set deadlines and handle cancellation.
4. Map errors to gRPC status codes.
5. Generate code and add reflection/health checks.

## Quality checklist
- [ ] Field numbers never reused
- [ ] deadlines set
- [ ] health check present

## Output
.proto files and service implementation.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
