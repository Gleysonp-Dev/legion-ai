---
name: input-validation
description: "Add strict input validation and sanitisation at every trust boundary (schemas, allowlists, encoding). Use to prevent injection and bad data."
---
# Input Validation

> Legion skill · category **Security (defensive)**

## When to use
Add strict input validation and sanitisation at every trust boundary (schemas, allowlists, encoding). Use to prevent injection and bad data.

## Procedure
1. List every input: params, bodies, headers, files, webhooks.
2. Define schemas with types, lengths, formats and allowlists.
3. Validate at the boundary and reject invalid input.
4. Use parameterised queries and context-aware output encoding.
5. Add tests with malicious inputs.

## Quality checklist
- [ ] All boundaries validated
- [ ] queries parameterised

## Output
Validation code and tests.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
