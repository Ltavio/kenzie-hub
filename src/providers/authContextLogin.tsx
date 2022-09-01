import React from "react";
import { createContext, useEffect, useState } from "react";
import api from "../services/Api.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  ITechs,
  IUser,
  IUserLogin,
  IStatesLoading,
  IChildren,
  IEditTechs,
} from "../Types/contextLoginTyps";

export const AuthContextLogin = createContext<any>({});

const AuthProviderLogin = ({ children }: IChildren) => {
  const [loginLoading, setLoginLoading] = useState<IStatesLoading | boolean>(
    true
  );
  const [techs, setTechs] = useState<ITechs[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const [editTech, setEditTech] = useState<IEditTechs>({} as IEditTechs);

  //ITEM ARMAZENADOS NO -----LOCALSTORAGE------
  const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));
  const idUser = JSON.parse(localStorage.getItem("@KENZIEHUB:USERID"));

  const navigate = useNavigate();

  //login

  //VITRINE DAS TECNOLOGIAS
  useEffect(() => {
    async function loginUserConstant() {
      if (token) {
        const { data } = await api.get(`/users/${idUser}`);

        setUser(data);
        setTechs(data.techs);
      }
    }
    loginUserConstant();
  }, [token, techs, editTech]);

  const registerLogin = async (data: IUserLogin) => {
    api
      .post("/sessions", data)
      .then((resp: any) => {
        setLoginLoading(false);

        const { token } = resp.data;
        const { id } = resp.data.user;

        localStorage.setItem("@KENZIEHUB:TOKEN", JSON.stringify(token));
        localStorage.setItem("@KENZIEHUB:USERID", JSON.stringify(id));

        api.defaults.headers.Authorization = ` ${token}`;

        toast.success("Login efetuado com sucesso");

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2000);
      })
      .catch((err: any) => {
        setLoginLoading(false);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <AuthContextLogin.Provider
      value={{
        registerLogin,
        setLoginLoading,
        setEditTech,
        user,
        techs,
        editTech,
      }}
    >
      {children}
    </AuthContextLogin.Provider>
  );
};

export default AuthProviderLogin;
