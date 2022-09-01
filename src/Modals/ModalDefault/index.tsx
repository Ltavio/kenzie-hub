import React, { ReactNode } from "react";
import { Container, DivModal } from "./style";

const Modal = ({ children }: any) => {
  return (
    <Container>
      <DivModal>{children}</DivModal>
    </Container>
  );
};

export default Modal;
