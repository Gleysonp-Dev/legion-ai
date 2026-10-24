# Webhook Handler

> Legion procedure `webhook-handler` · pack **Backend Development** (`legion-backend`)

## When to use
Build secure webhook receivers and senders: signature verification, idempotency, retries and replay. Use for Stripe, GitHub, payment or any event callbacks.

## Procedure
1. Verify signatures with the provider's secret and reject stale timestamps.
2. Respond 2xx fast and process asynchronously.
3. Deduplicate by event ID.
4. Log events with IDs for replay and debugging.
5. For outgoing webhooks, sign payloads and retry with backoff.

## Quality checklist
- [ ] Signature verified
- [ ] duplicate events ignored
- [ ] processing async

## Output
Webhook endpoint/sender code with tests.
