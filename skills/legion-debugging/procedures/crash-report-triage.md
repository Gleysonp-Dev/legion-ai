# Crash Report Triage

> Legion procedure `crash-report-triage` · pack **Debugging & Troubleshooting** (`legion-debugging`)

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
