import styled from "styled-components";

export const ProfileCon = styled.div`
  background-color: #ccdf65;
  width: 40rem;
  min-height: 30rem;
  margin: auto;
  margin-top: 10rem;
  border-radius: 10px;
  border: solid 2px black;
`;
export const PhotoDiv = styled.div`
  background-color: #ffffff;
  width: 12rem;
  height: 12rem;
  margin: auto;
  border-radius: 50%;
  transform: translateY(-6rem);
  border: solid 5px white;
  outline-style: dotted;
  outline-color: #000000;
  background-size: cover;
  background-position: center;

  background-image: url(${(s) => s.store});
`;
export const ProfileInfo = styled.div`
  margin: auto;
  /* padding-left: 5rem; */
  display: flex;
  justify-content: space-evenly;
`;
export const InfoList = styled.ul`
  li {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    list-style-type: none;
    /* box-shadow: 4px 4px 5px #000000a0; */
    div {
      color: #5c5c5c;
      font-size: 1.3rem;
      padding: 0.1rem;
    }
    input {
      font-size: 1.3rem;
      padding-left: 5px;
    }
    select {
      font-size: 1.3rem;
      padding-left: 5px;
      width: 100%;
    }
  }
`;
export const UpdataProf = styled.div`
  /* background-color: red; */
  text-align: center;
  button {
    padding: 0.5rem 1rem;
    background-color: #31c2c2;
    border: solid 1px;
    border-radius: 5px;
    margin: 2rem;
    &:disabled {
      background-color: gray;
      color: white;
    }
  }
`;
export const ImageUrl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  input {
    position: absolute;
    font-size: 1.3rem;
    transform: translateY(-4rem);
  }
`;

