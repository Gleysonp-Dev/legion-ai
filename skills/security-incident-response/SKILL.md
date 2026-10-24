---
name: security-incident-response
description: "Respond to a suspected security incident in your own systems: contain, preserve evidence, eradicate, recover and notify. Use when a breach or compromise is suspected."
---
# Security Incident Response

> Legion skill · category **Security (defensive)**

## When to use
Respond to a suspected security incident in your own systems: contain, preserve evidence, eradicate, recover and notify. Use when a breach or compromise is suspected.

## Procedure
1. Contain: revoke credentials, isolate affected systems.
2. Preserve logs and evidence before changes.
3. Identify scope and entry point.
4. Eradicate, patch and restore from clean state.
5. Assess notification duties and involve legal counsel.

## Quality checklist
- [ ] Credentials rotated
- [ ] evidence preserved
- [ ] legal review flagged

## Output
Incident report and action list.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
