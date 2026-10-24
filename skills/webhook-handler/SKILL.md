---
name: webhook-handler
description: "Build secure webhook receivers and senders: signature verification, idempotency, retries and replay. Use for Stripe, GitHub, payment or any event callbacks."
---
# Webhook Handler

> Legion skill · category **Backend Development**

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

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
