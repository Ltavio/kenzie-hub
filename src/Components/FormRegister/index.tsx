import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";

import { ContainerFormRegister } from "./style";

import { registerSchema } from "../../Validacoes/index";
import { AuthContextRegister } from "../../providers/authContextRegister";
import { IUserRegister } from "../../Types/contextRegisterTyps";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(registerSchema),
  });

  const { btnRegis } = useContext(AuthContextRegister);

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

        <label htmlFor="course_module">Selecionar Módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="">Selecionar módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>

        <p>{errors.course_module?.message}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </ContainerFormRegister>
  );
};

export default FormRegister;
