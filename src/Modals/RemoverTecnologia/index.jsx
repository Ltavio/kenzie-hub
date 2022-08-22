import Modal from "../ModalDefault";
import { BoxRemove } from "./style";
import { IoClose } from "react-icons/io5";

const RemoverTecnologia = ({ setModalRemoveTec }) => {
  return (
    <Modal>
      <div className="modalHeader">
        <h3>Excluir tecnologia</h3>
        <button onClick={() => setModalRemoveTec(false)}>
          <IoClose style={{ fontSize: 16, color: "#868E96" }} />
        </button>
      </div>
      <BoxRemove>
        <h3>Você tem certeza que deseja excluir?</h3>
        <div className="boxBts">
          <button onClick={() => setModalRemoveTec(false)}>Excluir</button>
          <button onClick={() => setModalRemoveTec(false)}>Cancelar</button>
        </div>
      </BoxRemove>
    </Modal>
  );
};

export default RemoverTecnologia;
