import styled from "styled-components";

export const DetailsCom = styled.div`
  min-height: 90vh;
  width: 100%;
  /* background-color: aqua; */
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 2rem;

  h2 {
    font-size: 3rem;
    text-align: center;
  }
  img {
    /* background-color: red; */
    width: 100%;
    /* height: 30rem; */
  }
  .buttoncon {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      margin: 1.5rem 0;
      padding: 0.5rem 1rem;
      background-color: #dadada;
      border: solid 0;
      border-radius: 3px;
      box-shadow: 1px 1px 2px black;
    }
    .delete {
      background-color: #d81f91;
      border: solid 0;
      color: white;
    }
  }
`;
export const DetailsInfo = styled.div`
  min-height: 2rem;
  background-color: rgb(187, 255, 240);
  width: 100%;
  padding: 1.5rem;
  h5 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }
  span {
    text-align: center;
    display: block;
    font-size: 0.8rem;
  }
`;
export const Kapsayici = styled.div`
  border: solid 2px #bebebe73;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  border-radius: 5px;
`;
export const ModalKapsa = styled.div`
  position: relative;
`;
