import {
  Container,
  ContainerTecnologias,
  Header,
  LinhaSeparacao,
  Main,
  NavBar,
} from "./style";
import Logo from "../../Logo.png";
import React, { useContext } from "react";
import { MdOutlineAdd, MdDelete } from "react-icons/md";
import CadastrarTecnologia from "../../Modals/AdicionarTecnologias/index";
import RemoverTecnologia from "../../Modals/RemoverTecnologia";
import EditarTecnologia, { handleEdit } from "../../Modals/EditarTecnologia";
import { AuthContextDashboard } from "../../providers/authContextDashboard";
import { AuthContextLogin } from "../../providers/authContextLogin";

const Dashboard = () => {
  const { user, techs, setEditTech } = useContext(AuthContextLogin);

  const {
    removeItem,
    handleEditTech,
    handleLogout,
    setModalCreateTec,
    setModalRemoveTec,
    setModalEditTec,
    modalCreateTec,
    modalRemoveTec,
    modalEditTec,
  } = useContext(AuthContextDashboard);

  return (
    <Container>
      {modalCreateTec && (
        <CadastrarTecnologia setModalCreateTec={setModalCreateTec} />
      )}

      {modalRemoveTec && (
        <RemoverTecnologia setModalRemoveTec={setModalRemoveTec} />
      )}

      {modalEditTec && <EditarTecnologia setModalEditTec={setModalEditTec} />}

      <NavBar>
        <img src={Logo} alt="logo-kenziehub" />
        <button onClick={handleLogout}>Sair</button>
      </NavBar>
      <LinhaSeparacao></LinhaSeparacao>

      <Header>
        <h2>Olá, {user.name}</h2>
        <span>{user.course_module}</span>
      </Header>
      <LinhaSeparacao></LinhaSeparacao>
      <Main>
        <div className="headerMain">
          <h2>Tecnologias</h2>
          <button onClick={() => setModalCreateTec(true)}>
            <MdOutlineAdd style={{ color: "white", fontSize: 20 }} />
          </button>
        </div>
        <ContainerTecnologias>
          {techs.map((tech) => (
            <div className="tecnologias" key={tech.id}>
              <div onClick={() => handleEditTech(tech)}>
                <h4>{tech.title}</h4>
                <p>{tech.status}</p>
              </div>
              <button onClick={() => removeItem(tech.id)}>
                <MdDelete style={{ fontSize: 17, color: "white" }} />
              </button>
            </div>
          ))}
        </ContainerTecnologias>
      </Main>
    </Container>
  );
};

export default Dashboard;
