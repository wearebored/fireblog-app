import styled from "styled-components";

export const UpdateCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img {
    /* border: solid 2px red; */
    margin-top: 2rem;
    height: 15rem;
    width: 30rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px;
  }
  input {
    font-size: 1.2rem;
    height: 2rem;
    width: 20rem;
  }
  textarea {
    height: 10rem;
    width: 20rem;
    resize: none;
  }
  button {
    height: 2rem;
    width: 20rem;
    background-color: #01bbbb;
    border: solid 0;
    border-radius: 5px;
    color: white;
    &:disabled {
      background-color: gray;
      opacity: 0.5;
      &:hover {
        background-color: gray;
      }
    }
    &:hover {
      background-color: #ff2d2d;
    }
  }
`;
