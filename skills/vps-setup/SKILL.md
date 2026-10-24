---
name: vps-setup
description: "Set up a VPS (Hetzner, DigitalOcean, Lightsail) securely with SSH keys, firewall, updates, reverse proxy and TLS. Use for simple self-hosting."
---
# VPS Setup

> Legion skill · category **Cloud & Infrastructure**

## When to use
Set up a VPS (Hetzner, DigitalOcean, Lightsail) securely with SSH keys, firewall, updates, reverse proxy and TLS. Use for simple self-hosting.

## Procedure
1. Create a non-root user with SSH key login; disable password login.
2. Enable firewall allowing only needed ports.
3. Enable automatic security updates.
4. Install a reverse proxy (Caddy/Nginx) with automatic TLS.
5. Set up backups and basic monitoring.

## Quality checklist
- [ ] Root and password login disabled
- [ ] firewall on
- [ ] TLS working

## Output
Setup script and checklist.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
