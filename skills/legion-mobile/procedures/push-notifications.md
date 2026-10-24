# Push Notifications

> Legion procedure `push-notifications` · pack **Mobile Development** (`legion-mobile`)

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
