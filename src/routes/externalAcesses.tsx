import { createStackNavigator } from "@react-navigation/stack";
import { Login }  from "../screens/Login/Login";
import { CriarConta } from "../screens/CriarConta/CriarConta";

const Stack = createStackNavigator();

export function ExternalAccess() {
  
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CriarConta" component={CriarConta} />
    </Stack.Navigator>
  );
};
