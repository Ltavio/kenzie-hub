import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContainerCadastrar, ContainerFormLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../Validacoes";

import { AuthContext } from "../../contexts/authContext";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const { registerLogin, loginLoading } = useContext(AuthContext);

  const handleRegis = () => {
    navigate("/register", { replace: true });
  };

  return (
    <ContainerFormLogin>
      <form onSubmit={handleSubmit(registerLogin)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="username@kenzie.com"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Entrar</button>
      </form>
      <ContainerCadastrar>
        <span>Ainda não possui uma conta?</span>
        <button onClick={handleRegis}>Cadastre-se</button>
      </ContainerCadastrar>
    </ContainerFormLogin>
  );
};

export default FormLogin;
