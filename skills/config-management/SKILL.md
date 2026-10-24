---
name: config-management
description: "Organise application configuration and environment variables with validation, defaults and per-environment overrides. Use when config is scattered or deployments fail from missing variables."
---
# Config Management

> Legion skill · category **Backend Development**

## When to use
Organise application configuration and environment variables with validation, defaults and per-environment overrides. Use when config is scattered or deployments fail from missing variables.

## Procedure
1. Inventory all configuration values and where they are read.
2. Centralise into one typed config module validated at startup.
3. Provide a documented .env.example without secrets.
4. Separate secrets from non-secret config.
5. Fail fast with clear errors when required values are missing.

## Quality checklist
- [ ] App fails fast on bad config
- [ ] .env.example complete
- [ ] no secrets committed

## Output
Config module and .env.example.

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
