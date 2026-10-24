---
name: aws-architecture
description: "Design AWS architectures using managed services (Lambda, ECS, RDS, S3, CloudFront, SQS) with IAM and networking. Use for building on AWS."
---
# AWS Architecture

> Legion skill · category **Cloud & Infrastructure**

## When to use
Design AWS architectures using managed services (Lambda, ECS, RDS, S3, CloudFront, SQS) with IAM and networking. Use for building on AWS.

## Procedure
1. Map requirements to AWS services, preferring managed options.
2. Design VPC, subnets and security groups only as needed.
3. Define least-privilege IAM roles.
4. Plan monitoring, backups and multi-AZ.
5. Estimate cost with the pricing calculator.

## Quality checklist
- [ ] Least privilege IAM
- [ ] multi-AZ where needed
- [ ] cost estimated

## Output
AWS design with diagram and cost.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
