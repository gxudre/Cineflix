import { StatusBar } from "expo-status-bar";
import { MovieProvider } from "./src/context/MoviesContext";
import AuthProvider from "./src/context/AuthContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <AuthProvider>
        <MovieProvider>
          <Routes />
          <StatusBar style="light" translucent backgroundColor="#242A32" />
        </MovieProvider>
      </AuthProvider>
    </>
  );
}
