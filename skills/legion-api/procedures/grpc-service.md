# gRPC Service

> Legion procedure `grpc-service` · pack **API Design & Integration** (`legion-api`)

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
