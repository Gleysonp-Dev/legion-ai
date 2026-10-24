---
name: legion-cloud
description: "Cloud & Infrastructure playbook with 10 ready procedures: aws architecture, gcp architecture, azure architecture, serverless app, edge deploy, cloud cost review, iam least privilege, dns domains, disaster recovery, vps setup. Use for any cloud & infrastructure task."
---
# Cloud & Infrastructure — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `aws-architecture` | Design AWS architectures using managed services (Lambda, ECS, RDS, S3, CloudFront, SQS) with IAM and networking. Use for building on AWS. |
| `gcp-architecture` | Design Google Cloud architectures (Cloud Run, GKE, Cloud SQL, Pub/Sub, BigQuery, Firebase). Use for building on GCP. |
| `azure-architecture` | Design Azure architectures (App Service, Functions, AKS, Cosmos DB, Azure SQL, Entra ID). Use for building on Azure. |
| `serverless-app` | Build serverless applications with functions, managed queues, storage and API gateways, handling cold starts and limits. Use for event-driven or spiky workloads. |
| `edge-deploy` | Deploy apps and functions to edge platforms (Cloudflare Workers, Vercel, Netlify) with caching, KV and CDN rules. Use for global low-latency sites. |
| `cloud-cost-review` | Review cloud bills and find savings: idle resources, rightsizing, commitments, storage tiers and data transfer. Use when costs grow unexpectedly. |
| `iam-least-privilege` | Review and tighten IAM policies to least privilege, removing wildcards and unused permissions. Use for cloud security hardening. |
| `dns-domains` | Configure domains and DNS records (A, CNAME, MX, TXT, SPF, DKIM, DMARC) and TLS certificates. Use when connecting a domain to a site or email. |
| `disaster-recovery` | Plan disaster recovery: RPO/RTO, backups, multi-region failover and recovery drills. Use for business-critical systems. |
| `vps-setup` | Set up a VPS (Hetzner, DigitalOcean, Lightsail) securely with SSH keys, firewall, updates, reverse proxy and TLS. Use for simple self-hosting. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
