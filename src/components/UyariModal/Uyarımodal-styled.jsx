import styled from "styled-components";

export const UyarıConteiner = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 5rem;
  position: fixed;
  z-index: 10;
  top: 10vh;
  visibility: ${(s) => s.uyari};

  div {
    background-color: #f0d436;
    width: 20rem;
    height: 5rem;
    margin: auto;
    border-radius: 10px;
    display: flex;
    align-items: justify;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 0 0 20px;
    p {
      text-align: center;
      margin: 2vh;
      font-size: 1.2rem;
    }
    main {
      background-color: #ff0000;
      width: ${(s) => s.state};
      height: 0.5rem;
      margin-bottom: 5px;
      border-radius: 5px;
    }
  }
`;
