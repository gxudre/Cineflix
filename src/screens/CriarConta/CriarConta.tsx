import React, { useState, useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

import { AuthContext } from "../../context/AuthContext";

export function CriarConta({ navigation }) {
  const [email, setEmail] = useState("");
  const [confirmaEmail, setConfirmaEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const { register} = useContext(AuthContext);

  const validarEmail = (email: string) => {
    // Expressão regular para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha: string) => {
    // Verifica se a senha tem pelo menos 6 caracteres
    return senha.length >= 6;
  };

  const onSubmit = () => {
    if (!validarEmail(email)) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
      return;
    }

    if (email !== confirmaEmail) {
      Alert.alert("Emails não coincidem", "Os emails não correspondem.");
      return;
    }

    if (!validarSenha(senha)) {
      Alert.alert(
        "Senha inválida",
        "A senha deve ter pelo menos 6 caracteres."
      );
      return;
    }

    if (senha !== confirmaSenha) {
      Alert.alert(
        "Senhas não coincidem",
        "As senhas digitadas não coincidem."
      );
      return;
    }

    // Implementar lógica para criar a conta aqui
    register(email);
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.imgContainer}>
        <Image
          style={Styles.imgPerfil}
          source={require("../../../assets/adaptive-icon.png")}
        />
        <Text style={Styles.textEmail}>Criar Conta</Text>
      </View>
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Confirmar Email"
          placeholderTextColor="#000"
          keyboardType="email-address"
          onChangeText={(text) => setConfirmaEmail(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Senha"
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Confirma Senha"
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmaSenha(text)}
        />
      </View>
      <Pressable style={Styles.sairButton} onPress={() => onSubmit()}>
        <Text style={Styles.textBtn}>Criar Conta</Text>
      </Pressable>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#1E1E1E",
  },
  imgContainer: {
    paddingTop: 50,
    paddingBottom: 40,
    justifyContent: "center",
    alignSelf: "center",
  },
  imgPerfil: {
    borderRadius: 500,
    height: 200,
    width: 200,
  },
  sairButton: {
    backgroundColor: "#E82F3E",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 50,
    elevation: 3,
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textEmail: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingTop: 30,
    textAlign: "center",
  },
  input: {
    color: "#000",
    width: "80%",
    backgroundColor: "#FFF",
    paddingLeft: 10,
    padding: 5,
    marginBottom: 20,
    borderRadius: 40,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  errorContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  errorText: {
    color: "red",
  },
});
