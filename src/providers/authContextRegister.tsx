import React from "react";
import { createContext, ReactNode, useContext } from "react";
import api from "../services/Api.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContextLogin } from "./authContextLogin.tsx";

import { IChildrenRegister, IUserRegister } from "../Types/contextRegisterTyps";

export const AuthContextRegister = createContext({});

const AuthProviderRegister = ({ children }: IChildrenRegister) => {
  const { setLoginLoading } = useContext(AuthContextLogin);

  const navigate = useNavigate();

  const btnRegis = (data: IUserRegister) => {
    setLoginLoading(true);

    api
      .post("/users/", data)
      .then((_) => {
        setLoginLoading(false);

        toast.success("Conta criada com sucesso!");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
      })
      .catch((_) => {
        setLoginLoading(false);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <AuthContextRegister.Provider
      value={{
        btnRegis,
      }}
    >
      {children}
    </AuthContextRegister.Provider>
  );
};

export default AuthProviderRegister;
