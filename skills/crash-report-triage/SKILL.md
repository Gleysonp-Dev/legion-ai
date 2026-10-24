---
name: crash-report-triage
description: "Triage crash and error reports (Sentry, Crashlytics) by frequency, impact and root cause. Use when there are many errors and limited time."
---
# Crash Report Triage

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Triage crash and error reports (Sentry, Crashlytics) by frequency, impact and root cause. Use when there are many errors and limited time.

## Procedure
1. Group errors by signature.
2. Rank by affected users and frequency.
3. Identify the release where each began.
4. Investigate the top issues with stack traces and breadcrumbs.
5. Create tickets with reproduction info.

## Quality checklist
- [ ] Ranked by user impact
- [ ] top issues have repro info

## Output
Prioritised error list with next actions.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
