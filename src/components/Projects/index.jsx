import React from "react";
import FraudDetection from "../../assets/images/fraud-detection.png";
import AgenticAI from "../../assets/images/agentic-ai.png";
import RAGKnowledge from "../../assets/images/rag-knowledge.png";
import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioItem,
  PortfolioImage,
  ServiceBoxHeader,
  ServiceBoxP,
} from "styles/Project";
import { A, ProjectLinks } from "styles/Banner";
import { Container, H1 } from "styles/index";

const data = [
  {
    id: 1,
    image: RAGKnowledge,
    project_name: "RAG-Driven Knowledge Retrieval System",
    title: "LangChain, OpenAI, FAISS, Vector Database — Production-grade RAG pipeline with multi-source ingestion, intelligent summarization, and delivery into ADLS and Snowflake.",
    github: "https://github.com/devathisailokesh/RAG-Driven-Knowledge-Retrieval-with-Generative-AI",
  },
  {
    id: 2,
    image: AgenticAI,
    project_name: "Agentic AI Email Automation Pipeline",
    title: "LangGraph, LangChain, LLMs, Streamlit, SMTP, Python — End-to-end multi-agent pipeline that processes Excel inputs and sends personalized emails via LLM workflows.",
    github: "https://github.com/devathisailokesh/Agentic-AI-Email-Project/tree/dev",
  },
  {
    id: 3,
    image: FraudDetection,
    project_name: "ML-Powered Credit Card Fraud Detection",
    title: "Gradient Boosting, RandomizedSearchCV — 94.42% accuracy, 95.79% precision, 99.15% ROC-AUC with class imbalance handling and optimized hyperparameter tuning.",
    github: "https://github.com/devathisailokesh/credit-card-fraud-detection",
  },
];

const Projects = () => {
  return (
    <Container id="project">
      <PortfolioSection>
        <H1>Projects</H1>
        <PortfolioContainer>
          {data.map(({ id, image, project_name, title, github }) => (
            <PortfolioItem key={id}>
              <PortfolioImage>
                <img src={image} alt={project_name} />
              </PortfolioImage>
              <ServiceBoxHeader style={{ textAlign: "center" }}>
                {project_name}
              </ServiceBoxHeader>
              <ServiceBoxP>{title}</ServiceBoxP>
              <ProjectLinks>
                <button>
                  <A
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </A>
                </button>
              </ProjectLinks>
            </PortfolioItem>
          ))}
        </PortfolioContainer>
      </PortfolioSection>
    </Container>
  );
};

export default Projects;
