import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #121214;

  img {
    margin-bottom: 1.3rem;
    width: 33%;
    max-width: 122px;
  }
`;

export const BoxLogin = styled.div`
  /* width: 296px; */
  width: 92.5%;
  max-width: 369px;
  height: 79.8%;
  max-height: 432px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: 16px;
    color: #f8f9fa;

    margin: 30px 0 23px 0;
  }
`;
