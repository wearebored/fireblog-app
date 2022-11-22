import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #00000075;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
`;
export const Modals = styled.div`
  background-color: #fdff91;
  width: 50rem;
  height: max-content;
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
  border-radius: 10px;
  position: relative;
`;
export const Yorumlar = styled.div`
  width: 100%;
  /* height: max-content; */
  /* background-color: red; */
  margin: 2rem;
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;
export const ModalClose = styled.button`
  background-color: red;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 5px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px gray;
`;
export const YorumYaz = styled.div`
  background-color: #bbbbbbb0;
  height: 10rem;
  width: 80%;
  margin-top: 1rem;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  textarea {
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    resize: none;
  }
  button {
    text-align: center;
    height: 2rem;
    padding: 0 1rem;
    background-color: #fd632b;
    color: white;
    border-radius: 5px;
    border: solid 1px;
    &:disabled{
      background-color: #7c7c7c;
    }
  }
`;
