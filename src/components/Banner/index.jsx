
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  MainContainer,
  Container,
  LeftContainer,
  Proffesion,
  Paragraph,
  ButtonContainer,
  FButton,
  SocialSec,
  AnkerTag,
  RightContainer,
} from "styles/Banner";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer id="home">
      <Container>
        <LeftContainer>
          <Proffesion>
            <h3>Hello There!</h3>
            <h3>
              I'm a{" "}
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: [
                      "An AI/ML Engineer",
                      "An MLOps Engineer",
                      "A GenAI Engineer",
                      "A Problem Solver",
                    ],
                  }}
                />
              </span>
            </h3>
          </Proffesion>
          <Paragraph>
            <b>AI/ML & MLOps Engineer</b> with 4+ years of experience building
            scalable LLM pipelines, RAG systems, and Agentic AI solutions in
            production across diverse industries.
          </Paragraph>
          <SocialSec>
            {/* <AnkerTag href="#">
              <FaFacebookF />
            </AnkerTag> */}
            <AnkerTag href="https://www.linkedin.com/in/sailokesh-datascience-aiml/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </AnkerTag>
            <AnkerTag href="https://github.com/devathisailokesh" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub />
            </AnkerTag>
            {/* <AnkerTag href="#">
              <RiGitlabFill />
            </AnkerTag> */}
          </SocialSec>

          <ButtonContainer>
            <FButton
              target="_blank"
              rel="noopener noreferrer"
              href={`${process.env.PUBLIC_URL}/sai_lokesh_resume.pdf`}
            >
              Resume
            </FButton>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          {/* <BoxContainer></BoxContainer>
          <SecondBoxContainer></SecondBoxContainer>
          
          <Image src={portimage} /> */}
          {isMobile ? (
            ""
          ) : (
            <DotLottieReact
              src="https://assets-v2.lottiefiles.com/a/431279d2-118a-11ee-afa8-f7fbc4c05a63/bsM1mDTFOD.lottie"
              loop
              autoplay
              style={{ width: "unset", height: "unset" }}
            />
          )}
        </RightContainer>
      </Container>
    </MainContainer>
  );
};

export default Banner;
