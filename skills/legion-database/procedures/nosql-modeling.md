# NoSQL Modeling

> Legion procedure `nosql-modeling` · pack **Databases & Data Modelling** (`legion-database`)

## When to use
Model data for MongoDB, DynamoDB, Firestore or Redis based on access patterns. Use when using a document or key-value database.

## Procedure
1. List access patterns first.
2. Design documents or keys to serve the main patterns in one read.
3. Choose embedding vs referencing deliberately.
4. Plan secondary indexes and their cost.
5. Handle consistency and transactions where required.

## Quality checklist
- [ ] Every access pattern served
- [ ] hot partitions avoided

## Output
Data model with access-pattern table.
