import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

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
    font-size: 18px;
    color: #f8f9fa;

    margin-bottom: 13px;
  }

  span {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
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

export const Main = styled.div`
  width: 95%;
  max-width: 780px;
  /* height: 120px; */

  box-sizing: border-box;

  margin: 18px 0;

  .headerMain {
    width: 100%;
    height: 34px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: #f8f9fa;
    }

    button {
      width: 32.49px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 2px solid #212529;
      border-radius: 4px;

      background-color: #212529;

      &:hover {
        background-color: #343b41;
        border: 2px solid #343b41;
      }
    }
  }
`;

export const ContainerTecnologias = styled.div`
  width: 100%;
  height: 416.37px;
  box-sizing: border-box;

  margin-top: 21px;
  padding: 22px 8.5px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  border-radius: 4px;

  background-color: #212529;

  .tecnologias {
    width: 100%;
    height: 49px;
    min-height: 49px;

    padding: 0 0.8em;

    margin-bottom: 11.5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;

    cursor: pointer;

    background-color: #121214;

    &:hover {
      background-color: #343b41;
    }

    &:visited {
      background-color: #343b41;
    }

    div {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        margin-right: 25px;

        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #868e96;
      }

      h4 {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #ffffff;

        @media (max-width: 365px) {
          width: 128px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    button {
      width: fit-content;
      height: fit-content;

      background-color: transparent;
      border: none;
    }
  }
`;
