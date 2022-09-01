import styled from "styled-components";

export const ContainerFormRegister = styled.div`
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

    p {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 13px;
      color: #ff0000bf;

      margin-top: -13px;
      margin-bottom: 18px;
    }

    select {
      height: 38.5px;
      background-color: #343b41;

      padding: 0 13px;
      margin-bottom: 21px;

      border: none;
      border-radius: 4px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: #868e96;

      &:focus {
        border: none;
        border-radius: 3.20867px;
      }
    }

    button {
      height: 38.5px;

      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 13px;
      color: #f8f9fa;

      border: 1.2182px solid #343b41;
      border-radius: 4px;
      background-color: #343b41;

      margin: 5px 0 30px 0;
    }
  }
`;
