import styled from "styled-components";
export const NewBlogCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 3rem;
  }
  img {
    /* border: solid 2px red; */
    height: 15rem;
    /* width: 30rem; */
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
    &:disabled{
      opacity: 0.5;
      background-color: #686868;
    }
  }
`;
