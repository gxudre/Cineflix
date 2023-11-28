import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [error, setError] = useState();
  const [user, setUser] = useState({ email: "", logado: false, senha: "", nome: "" });

  const login = (email, senha) => {


    // FAZ O LOGIN DO USUARIO
    setUser({
      email: email,
      logado: true,
    });

    const errorMessage = "E-mail ou senha inválidos.";

    if (!email || !senha) {
      setError(errorMessage);
      return;
    }

    // Validar formato de e-mail usando uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(errorMessage);
      return;
    }

    const isPasswordValid = senha === user.senha;
    const isEmailValid = email === user.email;

    if (isPasswordValid && isEmailValid) {
      setUser({
        email: email,
        logado: true,
      });
      setError(null);
    } else {
      setError(errorMessage);
    }
  };



  const contexto = {
    user,
    login
  };

  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };