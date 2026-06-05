import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceListIcon,
  ServiceText,
  MainWrapper,
} from "styles/Publication/index";
import { A, ViewPublication } from "styles/Banner";
import { Container, H1 } from "styles/index";

const Publication = () => {
  return (
    <Container id="blog">
      <MainWrapper>
        <H1>Blog</H1>
        <QuoteContainer>
          <p className="quote">
            <QuoteContent>
              Production RAG Pipeline
            </QuoteContent>
            <ServiceList>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>7-stage production RAG system — Ingest, Chunk, Embed, Hybrid Retrieval, Rerank, Score, Generate.</ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>Hybrid BM25 + Vector search with ANN + Cross-Encoder reranking across 10M+ documents.</ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>Zero hallucination via confidence scoring, constrained generation, and citation-backed responses.</ServiceText>
              </ServiceListItem>
              <ViewPublication>
                <button>
                  <A
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sailokeshdevathi.hashnode.dev/production-rag-pipeline"
                  >
                    Read Blog
                  </A>
                </button>
              </ViewPublication>
            </ServiceList>
          </p>
        </QuoteContainer>
      </MainWrapper>
    </Container>
  );
};

export default Publication;
