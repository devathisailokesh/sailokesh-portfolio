import React from "react";
import Marquee from "react-fast-marquee";
import { AiFillOpenAI } from "react-icons/ai";
import { BsDatabase, BsCloudFill } from "react-icons/bs";
import { FaGithub, FaDocker } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow, SiLangchain, SiStreamlit, SiSnowflake, SiFastapi, SiKubernetes, SiHuggingface, SiDatabricks, SiApachekafka } from "react-icons/si";
import MachineLearning from "assets/svg/MachineLearning";
import GenerativeAi from "assets/images/chip.png";
import {
  SkillsContainer,
  Col,
  BoxDiv,
  SkillBox,
  SkillBoxText,
  Common,
} from "styles/Skills";
import { Container, H1 } from "styles/index";

import("./skills.css");

const Skills = () => {
  const row1 = [
    {
      id: 0,
      project_name: "Python",
      project_desc: (
        <img
          alt="Python"
          className="commonIcons"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik0yNC4wNDcsNWMtMS41NTUsMC4wMDUtMi42MzMsMC4xNDItMy45MzYsMC4zNjdjLTMuODQ4LDAuNjctNC41NDksMi4wNzctNC41NDksNC42N1YxNGg5djJIMTUuMjJoLTQuMzVjLTIuNjM2LDAtNC45NDMsMS4yNDItNS42NzQsNC4yMTljLTAuODI2LDMuNDE3LTAuODYzLDUuNTU3LDAsOS4xMjVDNS44NTEsMzIuMDA1LDcuMjk0LDM0LDkuOTMxLDM0aDMuNjMydi01LjEwNGMwLTIuOTY2LDIuNjg2LTUuODk2LDUuNzY0LTUuODk2aDcuMjM2YzIuNTIzLDAsNS0xLjg2Miw1LTQuMzc3di04LjU4NmMwLTIuNDM5LTEuNzU5LTQuMjYzLTQuMjE4LTQuNjcyQzI3LjQwNiw1LjM1OSwyNS41ODksNC45OTQsMjQuMDQ3LDV6IE0xOS4wNjMsOWMwLjgyMSwwLDEuNSwwLjY3NywxLjUsMS41MDJjMCwwLjgzMy0wLjY3OSwxLjQ5OC0xLjUsMS40OThjLTAuODM3LDAtMS41LTAuNjY0LTEuNS0xLjQ5OEMxNy41NjMsOS42OCwxOC4yMjYsOSwxOS4wNjMsOXoiLz48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNMjMuMDc4LDQzYzEuNTU1LTAuMDA1LDIuNjMzLTAuMTQyLDMuOTM2LTAuMzY3YzMuODQ4LTAuNjcsNC41NDktMi4wNzcsNC41NDktNC42N1YzNGgtOXYtMmg5LjM0M2g0LjM1YzIuNjM2LDAsNC45NDMtMS4yNDIsNS42NzQtNC4yMTljMC44MjYtMy40MTcsMC44NjMtNS41NTcsMC05LjEyNUM0MS4yNzQsMTUuOTk1LDM5LjgzMSwxNCwzNy4xOTQsMTRoLTMuNjMydjUuMTA0YzAsMi45NjYtMi42ODYsNS44OTYtNS43NjQsNS44OTZoLTcuMjM2Yy0yLjUyMywwLTUsMS44NjItNSw0LjM3N3Y4LjU4NmMwLDIuNDM5LDEuNzU5LDQuMjYzLDQuMjE4LDQuNjcyQzE5LjcxOSw0Mi42NDEsMjEuNTM2LDQzLjAwNiwyMy4wNzgsNDN6IE0yOC4wNjMsMzljLTAuODIxLDAtMS41LTAuNjc3LTEuNS0xLjUwMmMwLTAuODMzLDAuNjc5LTEuNDk4LDEuNS0xLjQ5OGMwLjgzNywwLDEuNSwwLjY2NCwxLjUsMS40OThDMjkuNTYzLDM4LjMyLDI4Ljg5OSwzOSwyOC4wNjMsMzl6Ii8+PC9zdmc+"
        />
      ),
      color: "yellow",
    },
    {
      id: 1,
      project_name: "LangChain",
      project_desc: <SiLangchain className="commonIcons" />,
      color: "#a58f9f",
    },
    {
      id: 2,
      project_name: "LangGraph",
      project_desc: <SiLangchain className="commonIcons" />,
      color: "#7ec8e3",
    },
    {
      id: 3,
      project_name: "TensorFlow",
      project_desc: <SiTensorflow className="commonIcons" />,
      color: "#ff6f00",
    },
    {
      id: 4,
      project_name: "Scikit-Learn",
      project_desc: <SiScikitlearn className="commonIcons" />,
      color: "#ff8f73",
    },
    {
      id: 5,
      project_name: "OpenAI",
      project_desc: <AiFillOpenAI className="commonIcons" />,
      color: "#0fe891",
    },
    {
      id: 6,
      project_name: "FastAPI",
      project_desc: <SiFastapi className="commonIcons" />,
      color: "#05998b",
    },
    {
      id: 7,
      project_name: "Hugging Face",
      project_desc: <SiHuggingface className="commonIcons" />,
      color: "#ffd21e",
    },
    {
      id: 8,
      project_name: "SQL",
      project_desc: <BsDatabase className="commonIcons" />,
      color: "#00d8ff",
    },
  ];

  const row2 = [
    {
      id: 0,
      project_name: "Docker",
      project_desc: <FaDocker className="commonIcons" />,
      color: "#2496ed",
    },
    {
      id: 1,
      project_name: "Kubernetes",
      project_desc: <SiKubernetes className="commonIcons" />,
      color: "#326ce5",
    },
    {
      id: 2,
      project_name: "Azure ML",
      project_desc: <BsCloudFill className="commonIcons" />,
      color: "#0078d4",
    },
    {
      id: 3,
      project_name: "Snowflake",
      project_desc: <SiSnowflake className="commonIcons" />,
      color: "#29b5e8",
    },
    {
      id: 4,
      project_name: "Streamlit",
      project_desc: <SiStreamlit className="commonIcons" />,
      color: "#f93c5f",
    },
    {
      id: 5,
      project_name: "Databricks",
      project_desc: <SiDatabricks className="commonIcons" />,
      color: "#ff3621",
    },
    {
      id: 6,
      project_name: "Kafka",
      project_desc: <SiApachekafka className="commonIcons" />,
      color: "#e91e63",
    },
    {
      id: 7,
      project_name: "Cloud",
      project_desc: <BsCloudFill className="commonIcons" />,
      color: "#60a5fa",
    },
    {
      id: 8,
      project_name: "Git",
      project_desc: <FaGithub className="commonIcons" />,
      color: "#fff",
    },
  ];

  const proficiencies = [
    {
      id: 0,
      project_name: "Generative AI",
      project_desc: <img src={GenerativeAi} style={{ width: "76px", height: "76px", marginBottom: "26px" }} alt="Generative AI" className="commonIcons" />,
      color: "#ad78ee",
    },
    {
      id: 1,
      project_name: "Agentic AI",
      project_desc: <AiFillOpenAI className="commonIcons" />,
      color: "#0fe891",
    },
    {
      id: 2,
      project_name: "RAG Systems",
      project_desc: <SiLangchain className="commonIcons" />,
      color: "#a58f9f",
    },
    {
      id: 3,
      project_name: "MLOps",
      project_desc: <MachineLearning className="commonIcons" />,
      color: "#66b5ff",
    },
  ];

  const skillBoxStyle = { backgroundColor: "#212129" };

  return (
    <Container id="skills">
      <SkillsContainer>
        <Common>
          <H1>Skills & Tools</H1>
        </Common>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
              {row1.map((item) => (
                <BoxDiv className="skill--box" key={item.id} style={skillBoxStyle}>
                  <SkillBox>
                    <div style={{ color: item.color }}>{item.project_desc}</div>
                    <SkillBoxText style={{ color: item.color }}>{item.project_name}</SkillBoxText>
                  </SkillBox>
                </BoxDiv>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
              {row2.map((item) => (
                <BoxDiv className="skill--box" key={item.id} style={skillBoxStyle}>
                  <SkillBox>
                    <div style={{ color: item.color }}>{item.project_desc}</div>
                    <SkillBoxText style={{ color: item.color }}>{item.project_name}</SkillBoxText>
                  </SkillBox>
                </BoxDiv>
              ))}
            </Marquee>
          </div>
        </div>
        <Common style={{ marginTop: "45px" }}>
          <H1>Proficiencies</H1>
        </Common>
        <Col className="colorProficiencies">
          {proficiencies.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                <div style={{ color: item.color }}>{item.project_desc}</div>
                <SkillBoxText style={{ color: item.color }}>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
