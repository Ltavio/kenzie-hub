import styled from "styled-components";

export const BoxRemove = styled.div`
  width: 100%;
  height: 84.5%;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;

    text-align: center;
  }

  .boxBts {
    width: 100%;

    margin-top: 25px;

    display: flex;
    justify-content: center;

    button {
      width: 130px;
      height: 48px;

      background-color: #69312d;
      border: none;

      border-radius: 8px;

      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: #f8f9fa;

      &:hover {
        background-color: #7d413c;
      }
    }

    button + button {
      margin-left: 15px;

      background-color: #59323f;
      border: none;

      &:hover {
        background-color: #6a414e;
      }
    }
  }
`;
