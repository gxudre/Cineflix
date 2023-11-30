import React, { createContext, useState, useContext } from "react";

interface User {
  email: string;
  logado: boolean;
  senha: string;
}

interface AuthContextType {
  user: User ;
  login: (email: string, senha: string) => void;
  register: (email: string) => void;
  logout: () => void;
  error: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: { email: "", logado: false, senha: "" },
  login: () => {},
  register: () => {},
  logout: () => {},
  error: null,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [ error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User>({ email: "gxudre@gmail.com", logado: false, senha: "123426" });

  const login = (email: string, senha: string) => {
    const errorMessage = "E-mail ou senha inválidos.";

    if (!email || !senha) {
      setError(errorMessage);
      return;
    }

  
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
        senha: user.senha, 
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
      senha: "", 
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
    error,
  };

  return <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };