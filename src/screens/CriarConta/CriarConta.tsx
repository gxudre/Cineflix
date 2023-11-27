import {
    ScrollView,View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    TextInput,
  } from "react-native";
  
  export function CriarConta() {
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
          />
          <TextInput
            style={Styles.input}
            placeholder="Confirmar Email"
            placeholderTextColor="#000"
            keyboardType="email-address"
          />
          <TextInput
            style={Styles.input}
            placeholder="Senha"
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
          <TextInput
            style={Styles.input}
            placeholder="Confirma Senha"
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
        </View>
        <Pressable style={Styles.sairButton} onPress={() => {}}>
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
      backgroundColor:"#FFF",
      paddingLeft:10,
      padding:5,
      marginBottom:20,
      borderRadius: 40
    },
    inputContainer:{
      justifyContent:"center",
      alignItems:"center",
      paddingBottom: 20
    },
    blueBtn:{
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#0296E5",
      textAlign: "center",
      paddingTop: 40
    }
  });
  