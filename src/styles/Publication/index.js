import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212129;
  border-radius: 8px;
  padding: 25px;
  transition: box-shadow 0.3s ease-in-out;
  width: 100%;

  &:hover {
    box-shadow: #939090 0px 0px 10px;
  }
`;

export const QuoteContent = styled.span`
  display: block;
  font-size: 17px;
  color: #fec347;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const ServiceList = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
  flex: 1;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  gap: 20px;
  width: 100%;
`;

export const ServiceListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
`;

export const ServiceListIcon = styled(BiCheck)`
  color: #b3b9c5;
  margin-top: 3px;
  flex-shrink: 0;
`;

export const ServiceText = styled.p`
  font-size: 0.88rem;
  color: #b3b9c5;
  line-height: 1.5;
  margin: 0;
`;
