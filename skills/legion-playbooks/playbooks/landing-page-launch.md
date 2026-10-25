# Playbook: Landing page launch

**Goal:** a fast page that explains the offer, captures leads or sales, and measures results.
**Mode:** lite (≤3 agents per wave) · **Council:** optional review of copy + page

## Ask first
- Product, audience, the single action visitors should take
- Brand colours/logo, testimonials or proof they can share (real ones only)
- Where leads go (email tool, spreadsheet, CRM) and the domain

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | copywriter | `legion-marketing` → landing-page-copy | headline variants, sections, CTA | user picks headline |
| 1 | seo-specialist | `legion-marketing` → keyword-research | target keywords + meta | keyword map |
| 2 | ui-engineer | `legion-frontend` → build-landing-page | responsive page | Lighthouse ≥ 90 (perf, a11y) at 360 and 1440 px |
| 2 | integration-engineer | `legion-api` → third-party-api-integration | form → lead destination | test lead arrives |
| 3 | growth-strategist | `legion-marketing` → analytics-tracking-plan | events + UTMs | events visible in analytics debug |
| 3 | ci-cd-engineer | `legion-cloud` → edge-deploy, dns-domains | live on domain with HTTPS | URL returns 200 over HTTPS |

## Definition of done
Live page on the domain, form delivering leads, analytics recording CTA clicks, cookie consent if analytics/ads are used.
