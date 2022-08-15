import { Container, Header, LinhaSeparacao, NavBar } from "./style";
import Logo from "../../Logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const autenticacao = JSON.parse(localStorage.getItem("@TOKEN"));
  const idAutenticacao = JSON.parse(localStorage.getItem("@USERID"));
  const navigate = useNavigate();

  const [nameUser, setNameUser] = useState("");
  const [moduloUser, setModuloUser] = useState("");

  axios
    .get(`https://kenziehub.herokuapp.com/users/${idAutenticacao}`)
    .then((resp) => {
      setNameUser(resp.data.name);
      setModuloUser(resp.data.course_module);
    })
    .catch((err) => console.log(err));

  useEffect(() => {
    if (!autenticacao) {
      return navigate("/login", { replace: true });
    }
  }, [autenticacao]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <Container>
      <NavBar>
        <img src={Logo} alt="logo-kenziehub" />
        <button onClick={handleLogout}>Sair</button>
      </NavBar>
      <LinhaSeparacao></LinhaSeparacao>

      <Header>
        <h2>Olá, {nameUser}</h2>
        <span>{moduloUser}</span>
      </Header>
      <LinhaSeparacao></LinhaSeparacao>
    </Container>
  );
};

export default Dashboard;
