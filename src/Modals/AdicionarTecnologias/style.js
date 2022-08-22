import styled from "styled-components";

export const BoxFormulario = styled.div`
  width: 100%;
  height: 84.5%;

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 24px 22px;

    label {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: #f8f9fa;

      margin-bottom: 15px;
    }

    input {
      height: 40px;
      min-height: 40px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #f8f9fa;

      padding: 0px 16px 0px 16px;
      margin-bottom: 20px;

      border: 2px solid #343b41;
      border-radius: 4px;

      background-color: #343b41;

      &::placeholder {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #868e96;
      }

      &:focus {
        border: 2px solid #f8f9fa;
        color: #f8f9fa;

        &::placeholder {
          color: #f8f9fa;
        }
      }
    }

    select {
      height: 40px;
      min-height: 40px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #868e96;

      padding: 0px 16px 0px 16px;
      margin-bottom: 20px;

      border: 2px solid #343b41;
      border-radius: 4px;

      background-color: #343b41;

      &::placeholder {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #868e96;
      }

      &:focus {
        border: 2px solid #f8f9fa;
        color: #f8f9fa;

        &::placeholder {
          color: #f8f9fa;
        }
      }
    }

    button {
      height: 40px;
      min-height: 40px;

      border: 2px solid #ff577f;
      border-radius: 4px;

      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;

      background-color: #ff577f;
    }
  }
`;
