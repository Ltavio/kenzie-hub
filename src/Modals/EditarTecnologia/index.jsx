import { useForm } from "react-hook-form";
import Modal from "../ModalDefault";
import { BoxFormularioEdit } from "./style";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import axios from "axios";

const EditarTecnologia = ({ setModalEditTec }) => {
  const { register, handleSubmit } = useForm();

  const { idTech } = useContext(AuthContext);

  const handleEdit = async (data) => {
    /* console.log(data.status);

    const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));

    await axios.put(
      `https://kenziehub.herokuapp.com/users/techs/${idTech}`,
      data.status,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ); */

    setModalEditTec(false);
  };

  return (
    <Modal>
      <div className="modalHeader">
        <h3>Tecnologia Detalhes</h3>
        <button onClick={() => setModalEditTec(false)}>
          <IoClose style={{ fontSize: 16, color: "#868E96" }} />
        </button>
      </div>
      <BoxFormularioEdit>
        <form onSubmit={handleSubmit(handleEdit)}>
          <label htmlFor="editNomeTecnologia">Nome da tecnologia</label>
          <input
            type="text"
            id="editNomeTecnologia"
            placeholder="Digite a tecnologia"
            {...register("title")}
          />

          <label htmlFor="editStatusTecnologia">Selecione status</label>
          <select type="text" id="editStatusTecnologia" {...register("status")}>
            <option value="">Selecione aqui</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="boxBts">
            <button type="submit">Salvar alterações</button>
            <button onClick={() => setModalEditTec(false)}>Cancelar</button>
          </div>
        </form>
      </BoxFormularioEdit>
    </Modal>
  );
};

export default EditarTecnologia;
