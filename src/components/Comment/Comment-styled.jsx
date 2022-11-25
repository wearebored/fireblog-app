import styled from "styled-components";
import { SlOptions } from "react-icons/sl";
export const YorumCon = styled.div`
  min-height: 7rem;
  width: 65%;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
`;
export const YorumEmail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export const OptionIcon = styled(SlOptions)`
  &:hover {
    color: red;
  }
`;
export const OptionListe = styled.ul`
  position: absolute;
  right: -10px;
  top: 18px;
  background-color: #b4b4b4;
  padding: 4px;
  border-radius: 5px;
  visibility: ${(s)=>s.state};
 
  li {
    text-align: center;
    list-style-type: none;
    padding: 2px;
    &:hover {
      color: red;
    }
  }
`;
export const OptionContainer = styled.div`
  position: relative;
  padding: 3px;
`;
export const MeDiv = styled.div`
  min-height: 3rem;
  padding: 1rem;
  /* text-align: center; */
  textarea {
    resize: none;
    width: 100%;
    height: 5rem;

    font-size: 1rem;
  }
  button {
    height: 2rem;
    padding: 0 1rem;
    background-color: #fd632b;
    color: white;
    border-radius: 5px;
    border: solid 1px;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    .cancel {
      background-color: #312e2c;
    }
  }
  p {
    overflow: hidden;
  }
`;
