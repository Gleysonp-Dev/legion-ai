---
name: rag-pipeline
description: "Build a retrieval-augmented generation pipeline: ingestion, chunking, embeddings, vector store, retrieval, reranking and cited answers. Use for document Q&A."
---
# RAG Pipeline

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Build a retrieval-augmented generation pipeline: ingestion, chunking, embeddings, vector store, retrieval, reranking and cited answers. Use for document Q&A.

## Procedure
1. Ingest and clean documents with metadata.
2. Chunk by structure with overlap.
3. Embed and index in a vector store.
4. Retrieve with hybrid search and rerank.
5. Generate answers with citations; refuse when unsupported.

## Quality checklist
- [ ] Citations present
- [ ] retrieval evaluated

## Output
RAG pipeline code.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
