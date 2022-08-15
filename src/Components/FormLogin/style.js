import styled from "styled-components";

export const ContainerFormLogin = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 0 14px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #f8f9fa;
    }

    input {
      box-sizing: border-box;
      height: 38.5px;

      padding: 13px;
      margin-bottom: 21px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: #f8f9fa;

      background-color: #343b41;

      border: none;
      border-radius: 4px;

      &::placeholder {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #868e96;
      }

      &:focus {
        border: 0.9772px solid #f8f9fa;
        border-radius: 3.20867px;
      }
    }

    button {
      height: 38.5px;

      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 13px;
      color: #ffffff;

      border: 1.2182px solid #ff577f;
      border-radius: 4px;
      background-color: #ff577f;
    }
  }
`;

export const ContainerCadastrar = styled.div`
  box-sizing: border-box;
  width: 100%;

  margin-top: 18px;

  display: flex;
  flex-direction: column;

  span {
    text-align: center;

    margin: 10px 0 18px 0;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #868e96;
  }

  button {
    height: 38.5px;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #ffffff;

    border: 1.2182px solid #868e96;
    border-radius: 4px;
    background-color: #868e96;

    margin-bottom: 30px;
  }
`;
