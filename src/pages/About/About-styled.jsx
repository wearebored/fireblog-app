import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export const AboutCon = styled.div`
  margin: 1rem 10rem;
  border: solid 2px;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  img {
    width: 40rem;
  }
`;
export const AboutDiv = styled.div`
  padding: 2rem 5rem;
  background-color: #019aa5;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  p {
    text-align: center;
  }
  div {
    display: flex;
    gap: 5rem;
  }
`;
export const LinkIcon = styled(AiFillLinkedin)`
  font-size: 3rem;
  color: #ffffff;
  box-shadow: 2px 2px 5px;
`;
export const GitIcon = styled(AiFillGithub)`
  font-size: 3rem;
  color: #ffffff;
  box-shadow: 2px 2px 5px;
`;
