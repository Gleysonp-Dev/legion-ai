# GraphQL Schema

> Legion procedure `graphql-schema` · pack **API Design & Integration** (`legion-api`)

## When to use
Design a GraphQL schema with types, queries, mutations, pagination, errors and resolver performance (DataLoader). Use for GraphQL APIs.

## Procedure
1. Model types around client needs, not database tables.
2. Use connection-style pagination for lists.
3. Design mutations with input types and payloads including errors.
4. Prevent N+1 queries with DataLoader.
5. Add depth/complexity limits.

## Quality checklist
- [ ] No N+1 in resolvers
- [ ] complexity limited
- [ ] nullability deliberate

## Output
SDL schema and resolver notes.
