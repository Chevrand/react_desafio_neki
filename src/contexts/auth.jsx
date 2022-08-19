import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.jsx";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ savedLogin, setSavedLogin ] = useState(null);
  const [ token, setToken ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const navigate = useNavigate();

  api.defaults.headers.Authorization = `Bearer ${token}`;

  useEffect(() => {
    const recoveredUser = localStorage.getItem("userLogin");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    const recoveredLogin = localStorage.getItem("savedLogin");
    if (recoveredLogin) {
      setSavedLogin(JSON.parse(recoveredLogin));
    }

    const recoveredToken = localStorage.getItem("token");
    if (recoveredToken) {
      setToken(recoveredToken);
    }

    setLoading(false);
  }, []);

  const login = async (userLogin, password, saveLogin) => {
    try {
      const { data } = await api.post(`/user/authenticate`,
        {
          username: userLogin,
          password: password
        }
      );

      localStorage.setItem("token", data);
      setToken(data);

      const loggedUser = {
        userLogin,
        password,
      };

      if (saveLogin) {
        localStorage.setItem("savedLogin", JSON.stringify(loggedUser));
        setSavedLogin(loggedUser);
      }else {
        localStorage.removeItem("savedLogin");
      }

      localStorage.setItem("userLogin", JSON.stringify(loggedUser));
      setUser(loggedUser);
      alert(`Seja bem vindo(a), ${userLogin}!`);
      navigate("/");

    } catch (error) {
      localStorage.setItem("userLogin", null);
      alert("Dados incorretos. Por favor, tente novamente!");
    }
  };

  const logout = () => {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, token, savedLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};