import { useForm } from "react-hook-form";
import Modal from "../ModalDefault";
import { BoxFormularioEdit } from "./style";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import api from "../../services/Api.ts";
import { AuthContextLogin } from "../../providers/authContextLogin.tsx";

const EditarTecnologia = ({ setModalEditTec }) => {
  const { register, handleSubmit } = useForm();

  const { editTech } = useContext(AuthContextLogin);

  const handleEdit = async (data) => {
    const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));

    setModalEditTec(false);

    await api.put(
      `/users/techs/${editTech.id}`,
      { status: data.status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
            placeholder={editTech.title}
            disabled
          />

          <label htmlFor="editStatusTecnologia">Selecione status</label>
          <select type="text" id="editStatusTecnologia" {...register("status")}>
            <option value="" disabled selected>
              {editTech.status}
            </option>
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
