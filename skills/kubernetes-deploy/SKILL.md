---
name: kubernetes-deploy
description: "Deploy to Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, probes and resource limits (or Helm). Use for k8s deployments."
---
# Kubernetes Deploy

> Legion skill · category **DevOps & CI/CD**

## When to use
Deploy to Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, probes and resource limits (or Helm). Use for k8s deployments.

## Procedure
1. Write Deployment with probes, resources and security context.
2. Add Service and Ingress with TLS.
3. Externalise config and secrets.
4. Add HPA if load varies.
5. Validate with kubeval/kubeconform and a dry run.

## Quality checklist
- [ ] Probes and limits set
- [ ] secrets not in plain manifests

## Output
Manifests or Helm chart.

## Works well with
Legion agents: `devops-engineer`, `ci-cd-engineer`, `container-specialist`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
