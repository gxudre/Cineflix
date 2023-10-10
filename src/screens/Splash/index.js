import React, { useEffect } from "react";
import Login from "../Login";
import { Container, ImageBackground, Load, Logo } from "./style";
import logo from "../../assets/logo.png";
import imageBackground from "../../assets/splash.png";

const Splash = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    setTimeout(() => {
      handleLogin();
    }, 1500);
  }, []);

  return (
    <Container>
      <Logo source={logo} />
      <Load size={"large"} color={"#E82F3E"} />
      <ImageBackground source={imageBackground} />
    </Container>
  );
};

export default Splash;
