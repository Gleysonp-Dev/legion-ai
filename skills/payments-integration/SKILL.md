---
name: payments-integration
description: "Integrate payments (Stripe, Mercado Pago, PayPal): checkout, subscriptions, webhooks, refunds and reconciliation. Use when a product needs to charge money."
---
# Payments Integration

> Legion skill · category **Backend Development**

## When to use
Integrate payments (Stripe, Mercado Pago, PayPal): checkout, subscriptions, webhooks, refunds and reconciliation. Use when a product needs to charge money.

## Procedure
1. Use the provider's hosted checkout or elements to avoid handling card data.
2. Model customers, products, prices and subscriptions locally with provider IDs.
3. Drive state changes from verified webhooks, not redirects.
4. Handle failures, retries, refunds and proration.
5. Test with the provider's test mode and test cards.

## Quality checklist
- [ ] No raw card data touches the server
- [ ] state driven by webhooks
- [ ] test mode verified

## Output
Payment integration code and a test checklist.

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
