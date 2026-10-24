# Multi Tenancy Design

> Legion procedure `multi-tenancy-design` · pack **Architecture & System Design** (`legion-architecture`)

## When to use
Design multi-tenant SaaS architecture: isolation model, tenant routing, data partitioning, limits and billing hooks. Use when building B2B SaaS.

## Procedure
1. Choose isolation: shared schema with tenant_id, schema-per-tenant, or database-per-tenant.
2. Enforce tenant scoping at the data-access layer (row-level security or middleware).
3. Plan per-tenant limits, quotas and noisy-neighbour protection.
4. Design tenant onboarding, offboarding and data export.
5. Add tenant context to logs and metrics.

## Quality checklist
- [ ] Cross-tenant leakage impossible by default
- [ ] tests prove isolation

## Output
A multi-tenancy design and enforcement checklist.
