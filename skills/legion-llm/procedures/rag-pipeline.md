# RAG Pipeline

> Legion procedure `rag-pipeline` · pack **LLMs, Agents & Prompting** (`legion-llm`)

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
