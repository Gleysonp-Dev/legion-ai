---
name: push-notifications
description: "Implement push notifications (APNs, FCM, Expo) with permissions, tokens, deep links and preferences. Use to re-engage users."
---
# Push Notifications

> Legion skill · category **Mobile Development**

## When to use
Implement push notifications (APNs, FCM, Expo) with permissions, tokens, deep links and preferences. Use to re-engage users.

## Procedure
1. Ask permission at a meaningful moment.
2. Register and store device tokens per user.
3. Send from server with retries and token cleanup.
4. Deep link into the right screen.
5. Let users control notification types.

## Quality checklist
- [ ] Permission requested in context
- [ ] invalid tokens cleaned

## Output
Notification code and server sender.

## Works well with
Legion agents: `mobile-engineer`, `ui-designer`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
