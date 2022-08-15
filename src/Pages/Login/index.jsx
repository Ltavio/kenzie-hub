import FormLogin from "../../Components/FormLogin";
import Logo from "../../Logo.png";
import { BoxLogin, Container } from "./style";

const Login = () => {
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
