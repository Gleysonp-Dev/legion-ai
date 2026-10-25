# Playbook: AI assistant over your documents (RAG)

**Goal:** a chatbot that answers from the user's documents with citations and says "I don't know" when unsupported.
**Mode:** full · **Council:** review prompts + guardrails

## Ask first
- Which documents (formats, size, how often they change), who may see which documents
- Channel (web widget, WhatsApp, Slack, internal tool), language(s)
- Model/provider preference and monthly budget

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | rag-specialist | `legion-llm` → rag-pipeline | ingestion, chunking, embeddings, index | retrieval recall@5 on 20 test questions |
| 1 | prompt-engineer | `legion-llm` → system-prompt-writer | system prompt with citation + refusal rules | 20-question eval |
| 2 | llm-engineer | `legion-llm` → structured-output, llm-cost-control | answer service with caching | p95 latency + cost per answer measured |
| 2 | ui-engineer | `legion-frontend` → component-builder | chat UI with sources | E2E chat test |
| 3 | llm-engineer | `legion-llm` → llm-evals, ai-safety-guardrails | eval set + prompt-injection tests | eval score ≥ target; injection tests pass |
| 3 | privacy-engineer | `legion-legal-privacy` → data-retention | PII handling + access control per document | access tests pass |
| 4 | qa-gatekeeper | evidence table | — | all criteria proven |

## Definition of done
Answers cite sources, refuses when unsupported, respects document permissions, eval and cost numbers reported.
