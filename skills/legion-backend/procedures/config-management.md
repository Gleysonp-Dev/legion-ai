# Config Management

> Legion procedure `config-management` · pack **Backend Development** (`legion-backend`)

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
