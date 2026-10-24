# Background Jobs

> Legion procedure `background-jobs` · pack **Backend Development** (`legion-backend`)

## When to use
Add background jobs and queues (BullMQ, Celery, Sidekiq, cloud queues) with retries, idempotency and monitoring. Use for emails, reports, imports or slow work.

## Procedure
1. Identify work that should leave the request path.
2. Choose the queue technology that fits the stack.
3. Make jobs idempotent and safe to retry; set retry policy with backoff.
4. Send failed jobs to a dead-letter queue with alerts.
5. Expose job status where users need it.

## Quality checklist
- [ ] Jobs idempotent
- [ ] retries bounded
- [ ] failures visible

## Output
Job definitions, worker setup and monitoring notes.
