import React from "react";
import {
  AboutInfo,
  AboutInfoP,
} from "styles/About";

import { Container, H1Skills } from "styles/index";

const About = () => {
  return (
    <Container id="about">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}>
        <H1Skills>About Me</H1Skills>
        <AboutInfo>
          <AboutInfoP>
          I am Sai Lokesh Devathi, an AI/ML and MLOps Engineer currently working at Chubb in Bengaluru, India.
          I hold an MBA in Data Science from KL University and a B.Tech in Computer Science & IT from REVA University.
          With 4+ years of experience, I specialize in building and deploying production-grade LLM pipelines, RAG systems, and Agentic AI workflows.
          </AboutInfoP>
          <AboutInfoP>
          I have hands-on expertise with LangChain, LangGraph, FastAPI, Docker, Kubernetes (AKS), Databricks, Azure ML, and Snowflake.
          My work spans the full ML lifecycle — from building and deploying models to monitoring performance, scaling infrastructure,
          and ensuring reliability in production environments, delivering scalable AI solutions that make a real-world impact.
          </AboutInfoP>
        </AboutInfo>
      </div>
    </Container>
  );
};

export default About;
