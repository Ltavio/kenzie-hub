import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(18, 18, 20, 0.5);
`;

export const DivModal = styled.div`
  width: 95%;
  max-width: 369px;
  height: 58.3%;
  max-height: 342px;

  background-color: #212529;

  border-radius: 8px;

  .modalHeader {
    width: 100%;
    height: 15%;
    max-height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 16px;

    border-radius: 8px 8px 0 0;

    background-color: #343b41;

    h3 {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: #f8f9fa;
    }

    button {
      width: fit-content;
      height: fit-content;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: transparent;
      border: none;
    }
  }
`;
