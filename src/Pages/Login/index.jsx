import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../Components/FormLogin/index.tsx";
import Logo from "../../Logo.png";
import { BoxLogin, Container } from "./style";

const Login = () => {
  const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  return (
    <Container>
      <img src={Logo} alt="" />
      <BoxLogin>
        <h2>Login</h2>
        <FormLogin />
      </BoxLogin>
    </Container>
  );
};

export default Login;
