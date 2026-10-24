---
name: legion-debugging
description: "Debugging & Troubleshooting playbook with 10 ready procedures: root cause analysis, stack trace reader, git bisect, memory leak hunt, production incident, log analysis, network debugging, performance regression, environment issues, crash report triage. Use for any debugging & troubleshooting task."
---
# Debugging & Troubleshooting — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `root-cause-analysis` | Find the root cause of a bug systematically: reproduce, hypothesise, test, fix and prevent. Use for any bug whose cause is unclear. |
| `stack-trace-reader` | Read and explain stack traces and error messages, locate the failing code and propose fixes. Use when the user pastes an error. |
| `git-bisect` | Find the commit that introduced a bug using git bisect with an automated test. Use for regressions that "used to work". |
| `memory-leak-hunt` | Find and fix memory leaks using heap snapshots, profilers and growth analysis. Use when memory grows until crashes. |
| `production-incident` | Guide incident response: triage, mitigate, communicate, resolve and write a postmortem. Use when production is down or degraded. |
| `log-analysis` | Analyse logs to find errors, patterns and anomalies using grep, jq, or log query languages. Use when investigating behaviour from logs. |
| `network-debugging` | Debug network and HTTP problems: DNS, TLS, CORS, timeouts, proxies and status codes. Use when requests fail or hang. |
| `performance-regression` | Investigate why something became slower after a change, using profiling and comparison. Use after deploys that degrade performance. |
| `environment-issues` | Fix "works on my machine" problems: versions, env vars, paths, OS differences and dependency mismatches. Use when code behaves differently across machines or CI. |
| `crash-report-triage` | Triage crash and error reports (Sentry, Crashlytics) by frequency, impact and root cause. Use when there are many errors and limited time. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`debugger`, `observability-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
