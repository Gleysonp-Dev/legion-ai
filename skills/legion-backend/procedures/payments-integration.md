# Payments Integration

> Legion procedure `payments-integration` · pack **Backend Development** (`legion-backend`)

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
