import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #121214;
`;

export const Cabecalho = styled.div`
  width: 92.5%;
  max-width: 369px;
  box-sizing: border-box;

  margin: 4rem 0 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    /* width: 97px; */
    width: 33%;
    max-width: 122px;
  }

  button {
    width: 72px;
    height: 32px;

    border: none;
    border-radius: 4px;
    background-color: #212529;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-style: 12px;
    color: #f8f9fa;

    &:hover {
      background-color: #343b41;
    }
  }
`;

export const BoxRegister = styled.div`
  /* width: 296px; */
  width: 92.5%;
  max-width: 369px;
  /* max-height: 432px; */
  box-sizing: border-box;

  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: 16px;
    color: #f8f9fa;

    margin: 30px 0 17px 0;
  }
  span {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-style: 10px;
    color: #868e96;

    margin-bottom: 22px;
  }
`;
