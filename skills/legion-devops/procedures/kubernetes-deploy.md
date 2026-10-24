# Kubernetes Deploy

> Legion procedure `kubernetes-deploy` · pack **DevOps & CI/CD** (`legion-devops`)

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
