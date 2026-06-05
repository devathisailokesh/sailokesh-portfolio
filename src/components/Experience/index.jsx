import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceText,
  MainWrapper,
  Location,
  DataWrapper,
  TimePeriod,
  RoleText,
  Circle,
} from "styles/Experience";
import { Container, H1 } from "styles/index";

const serviceData = [
  {
    Role: "MLOps Engineer (AI / ML)",
    location: "Chubb, Bengaluru, India",
    TimePeriod: "04/ 2025 - Present",
    icon: null,
    services: [
      "Built and deployed ML models across SIT, UAT, and Production on Databricks with a config-driven approach, integrating MLflow experiment tracking to log metrics and artifacts across runs.",
      "Developed and deployed FastAPI services for AI/ML using Docker and Kubernetes (AKS) with Kustomize-based manifests, Cosmos DB, DNS certificates, and NSGs for secure deployments.",
      "Designed and productionized RAG pipelines using a config-driven architecture, enabling multi-source data ingestion, intelligent summarization, and seamless delivery into ADLS and Snowflake.",
      "Built an LLM-powered Invoice Fraud Detection pipeline with multi-step prompting and structured outputs, improving accuracy and significantly reducing false positives.",
      "Developed a Kafka service to publish real event payloads to Kafka topics, enabling end-to-end validation of the production pipeline.",
      "Automated CI/CD pipelines for APIs and models, reducing manual effort and accelerating release cycles for critical applications.",
    ],
  },
  {
    Role: "Software Engineer (Intern & Full-time)",
    location: "Evertz, Bengaluru, India",
    TimePeriod: "10/ 2022 - 04/ 2025",
    icon: null,
    services: [
      "Implemented Machine Learning models for forecasting and recommendation systems using Python, SQL, and advanced statistical methods, improving decision-making accuracy.",
      "Developed responsive, high-performance Angular UIs and integrated REST APIs for scalable, real-time application features.",
      "Automated critical data and model workflows, reducing manual effort by 40% and improving deployment efficiency.",
      "Developed Deep Learning solutions using TensorFlow/Keras (CNNs, RNNs) and implemented OpenCV-based computer vision pipelines. Experimented with LLMs for advanced predictive and generative applications.",
    ],
  },
];

const Experience = () => {
  return (
    <Container id="experience">
      <DataWrapper>
        <H1>Work Experience</H1>
        <MainWrapper>
          {serviceData.map((service, index) => (
            <QuoteContainer key={index}>
              <p className="quote">
                <QuoteContent>
                  <Circle icon={service.icon}></Circle>
                  <RoleText>{service.location}</RoleText>
                </QuoteContent>
                <ServiceList>
                  <Location>{service.Role}</Location>
                  <TimePeriod>{service.TimePeriod}</TimePeriod>
                  {service.services.map((text, idx) => (
                    <ServiceListItem key={idx}>
                      •<ServiceText>{text}</ServiceText>
                    </ServiceListItem>
                  ))}
                </ServiceList>
              </p>
            </QuoteContainer>
          ))}
        </MainWrapper>
      </DataWrapper>
    </Container>
  );
};

export default Experience;
