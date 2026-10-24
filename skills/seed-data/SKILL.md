---
name: seed-data
description: "Create realistic seed and test data with factories, fixtures and anonymised production samples. Use for local development, demos and tests."
---
# Seed Data

> Legion skill · category **Databases & Data Modelling**

## When to use
Create realistic seed and test data with factories, fixtures and anonymised production samples. Use for local development, demos and tests.

## Procedure
1. Define the minimum dataset that exercises main flows.
2. Build factories with realistic fake values.
3. Include edge cases: long text, unicode, empty optional fields.
4. Never copy raw production personal data; anonymise.
5. Make seeding idempotent and one command.

## Quality checklist
- [ ] No real personal data
- [ ] seeding idempotent
- [ ] edge cases present

## Output
Seed scripts and factories.

## Works well with
Legion agents: `database-architect`, `backend-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
