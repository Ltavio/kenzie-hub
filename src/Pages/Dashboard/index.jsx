import {
  Container,
  ContainerTecnologias,
  Header,
  LinhaSeparacao,
  Main,
  NavBar,
} from "./style";
import Logo from "../../Logo.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineAdd, MdDelete } from "react-icons/md";
import Modal from "../../Modals/ModalDefault";
import CadastrarTecnologia from "../../Modals/AdicionarTecnologias";
import RemoverTecnologia from "../../Modals/RemoverTecnologia";
import EditarTecnologia, { handleEdit } from "../../Modals/EditarTecnologia";
import AuthProviter, { AuthContext } from "../../contexts/authContext";

const Dashboard = () => {
  const autenticacao = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));
  const idAutenticacao = JSON.parse(localStorage.getItem("@KENZIEHUB:USERID"));
  const navigate = useNavigate();

  //modais
  const [modalCreateTec, setModalCreateTec] = useState(false);
  const [modalRemoveTec, setModalRemoveTec] = useState(false);
  const [modalEditTec, setModalEditTec] = useState(false);

  const { user, techs, removeItem, setIdTech } = useContext(AuthContext);

  const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));

  useEffect(() => {
    if (!autenticacao) {
      return navigate("/login", { replace: true });
    }
  }, [autenticacao]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  /* handleEdit */
  const handleEditTech = (id) => {
    setModalEditTec(true);
    setIdTech(id);
  };

  return (
    <Container>
      {modalCreateTec ? (
        <CadastrarTecnologia setModalCreateTec={setModalCreateTec} />
      ) : null}

      {modalRemoveTec ? (
        <RemoverTecnologia setModalRemoveTec={setModalRemoveTec} />
      ) : null}

      {modalEditTec ? (
        <EditarTecnologia setModalEditTec={setModalEditTec} />
      ) : null}

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
              <div onClick={() => handleEditTech(tech.id)}>
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
