import { useForm } from "react-hook-form";
import { ContainerCadastrar, ContainerFormLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../Validacoes";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const FormLogin = () => {
  const [loginLoading, setLoginLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const registerLogin = (data) => {
    setLoginLoading(true);

    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((resp) => {
        setLoginLoading(false);

        const { token } = resp.data;
        const { id } = resp.data.user;

        localStorage.setItem("@TOKEN", JSON.stringify(token));
        localStorage.setItem("@USERID", JSON.stringify(id));

        toast.success("Login efetuado com sucesso");

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2000);
      })
      .catch((err) => {
        setLoginLoading(false);
        toast.error("Ops! Algo deu errado");
      });
  };

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
