import styled from "styled-components";

export const HomeCon = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 1rem 7rem;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;
export const Cards = styled.div`
  /* background-color: aqua; */
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
