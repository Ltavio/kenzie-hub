import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

const AuthProviter = ({ children }) => {
  const [loginLoading, setLoginLoading] = useState(true);
  const [user, setUser] = useState({});
  const [techs, setTechs] = useState([]);
  const [idTech, setIdTech] = useState("");

  const token = JSON.parse(localStorage.getItem("@KENZIEHUB:TOKEN"));
  const idUser = JSON.parse(localStorage.getItem("@KENZIEHUB:USERID"));

  const navigate = useNavigate();

  //vitrine das tecnologias
  useEffect(() => {
    async function loginUserConstant() {
      if (token) {
        /* axios.defaults.headers.authorization = `Bearer ${token}`; */
        const { data } = await axios.get(
          `https://kenziehub.herokuapp.com/users/${idUser}`
        );
        setUser(data);
        setTechs(data.techs);
      }
    }
    loginUserConstant();
  }, [token, techs]);

  //registro
  const btnRegis = (data) => {
    console.log(data);
    setLoginLoading(true);

    axios
      .post("https://kenziehub.herokuapp.com/users/", data)
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

  //login
  const registerLogin = async (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((resp) => {
        setLoginLoading(false);

        const { token } = resp.data;
        const { id } = resp.data.user;

        localStorage.setItem("@KENZIEHUB:TOKEN", JSON.stringify(token));
        localStorage.setItem("@KENZIEHUB:USERID", JSON.stringify(id));

        axios.defaults.headers.authorization = `Bearer ${token}`;

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

  //remover tecnologia
  const removeItem = (id) => {
    /* setModalRemoveTec(true); */
    axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        registerLogin,
        btnRegis,
        removeItem,
        setIdTech,
        idTech,
        loginLoading,
        user,
        techs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviter;
