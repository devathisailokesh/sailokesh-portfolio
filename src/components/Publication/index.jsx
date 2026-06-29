import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceListIcon,
  ServiceText,
  MainWrapper,
  BlogGrid,
} from "styles/Publication/index";
import { A, ViewPublication } from "styles/Banner";
import { Container, H1 } from "styles/index";

const blogs = [
  {
    title: "AI Agents in Production — What Actually Breaks",
    points: [
      "The most common agent failures in production — hallucinated tool calls, infinite loops, and lost context.",
      "How to build reliable fallbacks, escalation paths, and deterministic guardrails.",
      "Production patterns for safe and observable agent deployment.",
    ],
    url: "https://sailokeshdevathi.hashnode.dev/ai-agents-in-production-what-actually-breaks",
  },
  {
    title: "Production RAG Pipeline",
    points: [
      "7-stage production RAG system — Ingest, Chunk, Embed, Hybrid Retrieval, Rerank, Score, Generate.",
      "Hybrid BM25 + Vector search with ANN + Cross-Encoder reranking across 10M+ documents.",
      "Zero hallucination via confidence scoring, constrained generation, and citation-backed responses.",
    ],
    url: "https://sailokeshdevathi.hashnode.dev/production-rag-pipeline",
  },
  {
    title: "Context Engineering is Not Prompt Engineering",
    points: [
      "5 components that determine LLM output — system prompt design, memory injection, retrieval quality, context ordering, and compression.",
      "The Lost in the Middle problem — why LLMs ignore content buried in context and how to fix it with ordering.",
      "Python code for each component with real production examples.",
    ],
    url: "https://sailokeshdevathi.hashnode.dev/context-engineering-is-not-prompt-engineering",
  },
  {
    title: "The 5 Layers of Agent Memory",
    points: [
      "Working, Episodic, Semantic, Procedural, and Meta Memory — each layer explained with real analogies.",
      "Runtime pipeline — what is read at planning time and what is written after the turn.",
      "Python code for all 5 layers using LangChain with production-grade patterns.",
    ],
    url: "https://sailokeshdevathi.hashnode.dev/the-5-layers-of-agent-memory-what-every-production-agent-needs",
  },
  {
    title: "Not Every RAG System Needs a Vector Database",
    points: [
      "Vectorless RAG — 4 levels of structural navigation that retrieve exact answers without embeddings.",
      "When to use Vector RAG vs Vectorless RAG and when to combine both.",
      "The combined production pipeline — metadata filters, structural navigation, vector search, and reranking.",
    ],
    url: "https://sailokeshdevathi.hashnode.dev/not-every-rag-system-needs-a-vector-database",
  },
  {
    title: "RAG is Not Just Chunking + Embedding + Retrieval",
    points: [
      "Why naive chunking destroys retrieval quality and what to do instead.",
      "Hybrid retrieval, cross-encoder reranking, and confidence scoring explained.",
      "Production-grade RAG pipeline patterns that actually work at scale.",
    ],
    url: "https://sailokeshdevathi.hashnode.dev/rag-is-not-just-chunking-embedding-retrieval",
  },
];

const Publication = () => {
  return (
    <Container id="blog">
      <MainWrapper>
        <H1>Blog</H1>
        <BlogGrid>
        {blogs.map((blog) => (
          <QuoteContainer key={blog.url}>
            <QuoteContent>{blog.title}</QuoteContent>
            <ServiceList>
              {blog.points.map((point) => (
                <ServiceListItem key={point}>
                  <ServiceListIcon />
                  <ServiceText>{point}</ServiceText>
                </ServiceListItem>
              ))}
              <ViewPublication>
                <button>
                  <A target="_blank" rel="noopener noreferrer" href={blog.url}>
                    Read Blog
                  </A>
                </button>
              </ViewPublication>
            </ServiceList>
          </QuoteContainer>
        ))}
        </BlogGrid>
      </MainWrapper>
    </Container>
  );
};

export default Publication;
