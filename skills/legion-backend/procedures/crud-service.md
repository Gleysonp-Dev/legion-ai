# CRUD Service

> Legion procedure `crud-service` · pack **Backend Development** (`legion-backend`)

## When to use
Implement a complete CRUD feature: model, validation, service layer, endpoints, pagination and tests. Use for new resources in a backend.

## Procedure
1. Define the entity, fields, constraints and ownership rules.
2. Add a migration and model with database constraints.
3. Implement service logic with input validation and authorisation checks.
4. Expose endpoints with pagination, filtering and consistent errors.
5. Write unit and integration tests for each operation.

## Quality checklist
- [ ] Authorisation enforced per record
- [ ] validation on all inputs
- [ ] tests pass

## Output
Model, migration, service, routes and tests.
