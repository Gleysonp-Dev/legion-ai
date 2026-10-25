# Playbook: Mobile app

**Goal:** an iOS/Android app published to the stores with analytics and crash reporting.
**Mode:** full · **Council:** review before store submission

## Ask first
- Core user journey (the 3 screens that matter), offline needs, push notifications?
- Cross-platform (React Native/Expo, Flutter) or native; existing backend?
- Apple/Google developer accounts ready?

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | ux-designer | `legion-ux-design` → user-flow, wireframe | flows + wireframes | user approves |
| 1 | mobile-engineer | `legion-mobile` → react-native-app or flutter-app | project scaffold + navigation | runs on simulator |
| 2 | ui-designer | `legion-ux-design` → design-tokens, ui-polish | visual design | screenshots |
| 2 | backend-engineer | `legion-api` → rest-api-design | API for the app | API tests pass |
| 3 | mobile-engineer | `legion-mobile` → offline-sync, push-notifications, deep-linking | features | device test video/screens |
| 3 | accessibility-expert | `legion-ux-design` → accessibility-audit | a11y fixes | screen-reader pass |
| 4 | mobile-engineer | `legion-mobile` → mobile-analytics, mobile-performance | analytics + crash reporting | events in debug view; cold start measured |
| 4 | release-manager | `legion-mobile` → app-store-release | store listing, privacy forms, staged rollout | build accepted for review |

## Definition of done
App approved (or submitted) on both stores, crash reporting live, privacy forms match real data use.
