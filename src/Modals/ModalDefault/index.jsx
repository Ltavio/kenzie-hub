import { Container, DivModal } from "./style";

const Modal = ({ children }) => {
  return (
    <Container>
      <DivModal>{children}</DivModal>
    </Container>
  );
};

export default Modal;
