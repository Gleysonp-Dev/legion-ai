# AWS Architecture

> Legion procedure `aws-architecture` · pack **Cloud & Infrastructure** (`legion-cloud`)

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
