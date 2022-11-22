import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


export const NavbarCon = styled.div`
  background-color: #017a8f;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 3rem;
    margin-left: 3rem;
  }
  h1 {
    color: white;
  }
`;
export const IconDiv = styled(FaUserCircle)`
  font-size: 1.8rem;
  margin: 1rem;
  color: white;
`;
export const IconList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  ul {
    transform: translateY(3rem);
    position: absolute;
    visibility: hidden;
    background-color: #ffe590;
    list-style-type: none;
    padding: 0.5rem;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    z-index: 2;
    gap: 10px;
    li {
      width: 4.2rem;
      &:hover {
        color: red;
      }
    }
  }
  &:hover {
    ul {
      visibility: visible;
    }
  }
`;
export const Weare = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
`;
