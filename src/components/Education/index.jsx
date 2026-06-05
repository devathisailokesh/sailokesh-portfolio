import React, { useState, useEffect } from "react";
import {
  MainContainer,
  Box,
  BoxContainer,
  DateWrapper,
  Degree,
  BoxWrapper,
  EducationWrapper,
  SecondEduWrapper,
  IconWrap,
  CollegeHeading,
} from "styles/Education";
import { Container, H1 } from "styles/index";
import { FaUserGraduate } from "react-icons/fa";

const Educations = () => {
const [screenType, setScreenType] = useState("desktop");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 767) {
          setScreenType("mobile");
        } else if (window.innerWidth > 767 && window.innerWidth <= 1124) {
          setScreenType("tab");
        } else {
          setScreenType("desktop");
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <Container id="education">
      <MainContainer>
        <EducationWrapper>
          <H1>Education</H1>
          <BoxContainer>
            <Box>
              {screenType === "mobile" || screenType === "tab" ? (
                ""
              ) : (
                <IconWrap>
                  <FaUserGraduate />
                </IconWrap>
              )}
              <div>
                <CollegeHeading>KL University</CollegeHeading>
                <Degree>MBA in Data Science</Degree>
                <DateWrapper>2023 – 2025</DateWrapper>
              </div>
            </Box>
            <BoxWrapper>
              <SecondEduWrapper>
                {window.innerWidth <= 767 ? (
                  ""
                ) : (
                  <IconWrap>
                    <FaUserGraduate />
                  </IconWrap>
                )}
                <div>
                  <CollegeHeading>REVA University</CollegeHeading>
                  <Degree>B.Tech in Computer Science & Information Technology</Degree>
                  <DateWrapper>2019 – 2023</DateWrapper>
                </div>
              </SecondEduWrapper>
            </BoxWrapper>
          </BoxContainer>
        </EducationWrapper>
      </MainContainer>
    </Container>
  );
};

export default Educations;
