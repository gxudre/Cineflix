import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A32'
  },
  
  header:{padding: 25},

  headerText: {
    marginTop: 30,
    fontSize: 24,
    lineHeight: 45,
    color: '#fff'
  },

  containerInput:{
    backgroundColor: '#fff',
    height: 42,
    padding: 10,
    borderRadius:16,
    marginTop: 24,
    marginBottom: 10,
    justifyContent:'space-between',
    alignItems: 'center', 
    flexDirection: 'row'
  },

  input: {
    width: "60%",
    paddingLeft: 15,
  }
  });
  