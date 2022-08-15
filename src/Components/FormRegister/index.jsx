import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ContainerFormRegister } from "./style";
import { toast } from "react-toastify";

import { registerSchema } from "../../Validacoes";

const FormRegister = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const btnRegis = (data) => {
    console.log(data);
    setLoading(true);

    axios
      .post("https://kenziehub.herokuapp.com/users/", data)
      .then((_) => {
        setLoading(false);

        toast.success("Conta criada com sucesso!");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
      })
      .catch((_) => {
        setLoading(false);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <ContainerFormRegister>
      <form onSubmit={handleSubmit(btnRegis)}>
        <label htmlFor="nome">Nome</label>
        <input
          autoComplete="off"
          type="text"
          id="nome"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          type="text"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="senha">Senha</label>
        <input
          autoComplete="off"
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <label htmlFor="confir-senha">Confirmar senha</label>
        <input
          autoComplete="off"
          type="password"
          id="confirmedPassword"
          placeholder="Confirme sua senha"
          {...register("confirmedPassword")}
        />
        <p>{errors.confirmedPassword?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input
          autoComplete="off"
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contato">Contato</label>
        <input
          autoComplete="off"
          type="text"
          id="contato"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

        <label htmlFor="modulos">Selecionar Módulo</label>
        <select id="modulo" {...register("course_module")}>
          <option value="modulo1">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="modulo2">Segundo módulo (Frontend Avançado)</option>
          <option value="modulo3">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="modulo4">Quarto módulo (Backend Avançado)</option>
        </select>

        <p>{errors.course_module?.message}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </ContainerFormRegister>
  );
};

export default FormRegister;
