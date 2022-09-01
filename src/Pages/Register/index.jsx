import React from "react";
import { BoxRegister, Cabecalho, Container } from "./style.ts";
import Logo from "../../Logo.png";
import FormRegister from "../../Components/FormRegister/index.tsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login", { replace: true });
  };
  return (
    <Container>
      <Cabecalho>
        <img src={Logo} alt="logo-kenziehub" />
        <button onClick={handleLogin}>Voltar</button>
      </Cabecalho>
      <BoxRegister>
        <h3>Crie sua conta</h3>
        <span>Rapido e grátis, vamos nessa</span>
        <FormRegister />
      </BoxRegister>
    </Container>
  );
};

export default Register;
