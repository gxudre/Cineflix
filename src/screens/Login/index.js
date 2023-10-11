import React, { useEffect } from "react";
import {
  Container,
  ImageBackground,
  Input,
  Logo,
  ContainerInput,
  Buttom,
  Text,
  TextContainer,
  Form,
} from "./style";
import logo from "../../assets/logo.png";
import imageBackground from "../../assets/login.jpg";
import { Home } from "../Home";

const Login = ({navigation}) => {

const handleLogin = () => {
    navigation.navigate('Home')
}

const handleEsqueceuSenha = () => {
    alert('Esqueceu nada, só tem um login na aplicação!');
}

const handleCriarConta = () => {
    alert('criar conta');
}

  return (
    <ImageBackground source={imageBackground}>
      <Container>
        <Logo source={logo} />

        <Form>
          <ContainerInput>
            <Input placeholder="E-mail" placeholderTextColor={"#000"} />
          </ContainerInput>
          <ContainerInput>
            <Input placeholder="Senha" placeholderTextColor={"#000"} secureTextEntry={true}/>
          </ContainerInput>
          <Buttom onPress={handleLogin}>
            <Text>Entrar</Text>
          </Buttom>

          <TextContainer>
            <Text onPress={handleEsqueceuSenha}>Esqueceu a Senha?</Text>
          </TextContainer>
          <TextContainer>
            <Text onPress={handleCriarConta}>Criar Conta</Text>
          </TextContainer>
        </Form>
      </Container>
    </ImageBackground>
  );
};

export default Login;
