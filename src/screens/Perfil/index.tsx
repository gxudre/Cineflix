import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
  } from "react-native";
  
  export function Perfil() {
    return (
      <View style={Styles.container}>
        <View style={Styles.imgContainer}>
          <Image
            style={Styles.imgPerfil}
            source={require("../../../assets/adaptive-icon.png")}
          />
          <Text style={Styles.textEmail}>Fulaninho@hotmail.com</Text>
        </View>
        <View>
        
        </View>
        <Pressable style={Styles.sairButton} onPress={() => {}}>
          <Text style={Styles.textBtn}>Sair</Text>
        </Pressable>
      </View>
    );
  }
  
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: "#1E1E1E",
    },
    imgContainer: {
      paddingTop: 90,
      paddingBottom: 100,
      alignItems:"center"
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
      paddingHorizontal: 32,
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
  
    textEmail:{
      fontSize: 24,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
      paddingTop: 20,
      textAlign:"center"
      
    }
  });
