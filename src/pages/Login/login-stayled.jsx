import styled from "styled-components";

export const LoginCon = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-position: center;
  background-size: cover;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 2rem;
  }
`;
export const LoginBloc = styled.div`
  background-color: #ececec;
  width: 27rem;
  min-height: 33rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ImgDiv = styled.div`
  background-color: #00cfcf;
  margin: 1rem;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 8rem;
  }
`;
export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem;
  input {
    font-size: 1rem;
    height: 2rem;
    width: 20rem;
    padding-left: 0.5rem;
  }
  button {
    height: 2rem;
    border-radius: 5px;
    border: solid 1px;
    img {
      height: 1rem;
      transform: translateY(4px);
      margin-left: 5px;
    }
  }
  select {
    font-size: 1rem;
    height: 2rem;
    width: 20rem;
    padding-left: 0.5rem;
  }
  #google {
    background-color: aqua;
    border: solid 0px;
    border-radius: 5px;
    color: white;
    &:disabled {
      opacity: 0.5;
      background-color: gray;
    }
  }
`;
