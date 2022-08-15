import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBar = styled.div`
  width: 95%;
  max-width: 780px;
  height: 72px;
  box-sizing: border-box;

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

export const Header = styled.div`
  width: 95%;
  max-width: 780px;
  height: 120px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: 16px;
    color: #f8f9fa;

    margin-bottom: 13px;
  }

  span {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-style: 12px;
    color: #868e96;
  }

  @media (min-width: 635px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LinhaSeparacao = styled.div`
  width: 100%;
  height: 1px;
  background-color: #212529;
`;
