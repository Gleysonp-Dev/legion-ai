---
name: email-notifications
description: "Send transactional emails and notifications with templates, queues, providers (SES, Resend, SendGrid) and deliverability setup. Use for signup, password reset, receipts or alerts."
---
# Email Notifications

> Legion skill · category **Backend Development**

## When to use
Send transactional emails and notifications with templates, queues, providers (SES, Resend, SendGrid) and deliverability setup. Use for signup, password reset, receipts or alerts.

## Procedure
1. Define each notification: trigger, recipient, content, channel.
2. Build templates with plain-text fallback.
3. Send via a queue with retries.
4. Configure SPF, DKIM and DMARC for the sending domain.
5. Respect unsubscribe preferences for non-essential mail.

## Quality checklist
- [ ] Domain authenticated
- [ ] sending async
- [ ] unsubscribe honoured

## Output
Notification module, templates and DNS checklist.

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
