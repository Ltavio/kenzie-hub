import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import api from "../../services/Api";
import Modal from "../ModalDefault";
import { BoxFormulario } from "./style";

interface ICadTecnologia {
  setModalCreateTec: (setModalCreateTec: boolean) => void;
}

const CadastrarTecnologia = ({ setModalCreateTec }: ICadTecnologia) => {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));

  const cadastrandoTec = async (data) => {
    setModalCreateTec(false);
    await api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <Modal>
      <div className="modalHeader">
        <h3>Cadastrar tecnologia</h3>
        <button onClick={() => setModalCreateTec(false)}>
          <IoClose style={{ fontSize: 16, color: "#868E96" }} />
        </button>
      </div>
      <BoxFormulario>
        <form onSubmit={handleSubmit(cadastrandoTec)}>
          <label htmlFor="nomeTecnologia">Nome</label>
          <input
            type="text"
            id="nomeTecnologia"
            placeholder="Digite a tecnologia"
            {...register("title")}
          />

          <label htmlFor="nomeTecnologia">Selecione status</label>
          <select type="text" id="statusTecnologia" {...register("status")}>
            <option value="" disabled selected>
              Selecione aqui
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </BoxFormulario>
    </Modal>
  );
};

export default CadastrarTecnologia;
