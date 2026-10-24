---
name: network-debugging
description: "Debug network and HTTP problems: DNS, TLS, CORS, timeouts, proxies and status codes. Use when requests fail or hang."
---
# Network Debugging

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Debug network and HTTP problems: DNS, TLS, CORS, timeouts, proxies and status codes. Use when requests fail or hang.

## Procedure
1. Reproduce with curl -v and record full output.
2. Check DNS resolution, TLS certificate and ports.
3. For browsers, inspect CORS preflight and headers.
4. Check timeouts and proxies along the path.
5. Fix configuration and verify.

## Quality checklist
- [ ] Failure reproduced outside the app
- [ ] fix verified with same command

## Output
Diagnosis and fix.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
