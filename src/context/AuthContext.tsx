import React, { createContext, useState, useContext } from "react";

interface User {
  email: string;
  logado: boolean;
  senha: string;
}

interface AuthContextType {
  user: User;
  login: (email: string, senha: string) => void;
  register: (email: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: { email: "", logado: false, senha: "" },
  login: () => {},
  register: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User>({ email: "", logado: false, senha: "" });

  const login = (email: string, senha: string) => {
    setUser({
      email: email,
      senha: senha,
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
        senha: user.senha, // Manter a senha anterior, se necessário
      });
      setError(null);
    } else {
      setError(errorMessage);
    }
  };

  const register = (email: string) => {
    setUser({
      email: email,
      logado: true,
      senha: "", // Definir a senha vazia para um novo registro
    });
  };

  const logout = () => {
    setUser({ email: "", logado: false, senha: "" });
  };

  const contexto: AuthContextType = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };