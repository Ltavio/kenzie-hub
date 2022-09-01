import React from "react";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/Api.ts";
import { AuthContextLogin } from "./authContextLogin.tsx";

import {
  IChildrenDashboard,
  IPropsModais,
} from "../Types/contextDashboardTyps";

export const AuthContextDashboard = createContext({});

const AuthProviderDashboard = ({ children }: IChildrenDashboard) => {
  const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));
  const autenticacao = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));

  //modais
  const [modalCreateTec, setModalCreateTec] = useState<boolean>(false);
  const [modalRemoveTec, setModalRemoveTec] = useState<boolean>(false);
  const [modalEditTec, setModalEditTec] = useState<boolean>(false);

  const { setEditTech } = useContext(AuthContextLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (!autenticacao) {
      return navigate("/login", { replace: true });
    }
  }, [autenticacao]);

  //voltar para a tela de login
  const handleLogout = () => {
    localStorage.clear();
    api.defaults.headers.Authorization = null;

    navigate("/login", { replace: true });
  };

  //remover tecnologia
  const removeItem = ({ id }: IPropsModais) => {
    /* setModalRemoveTec(true); */

    api.delete(`/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  //editar tecnologia
  const handleEditTech = ({ tecnologia }: IPropsModais) => {
    setModalEditTec(true);
    setEditTech(tecnologia);
  };

  return (
    <AuthContextDashboard.Provider
      value={{
        removeItem,
        handleEditTech,
        handleLogout,
        setModalCreateTec,
        setModalRemoveTec,
        setModalEditTec,
        modalCreateTec,
        modalRemoveTec,
        modalEditTec,
      }}
    >
      {children}
    </AuthContextDashboard.Provider>
  );
};

export default AuthProviderDashboard;
