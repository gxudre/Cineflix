import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabs.routes";
import Splash from "../screens/Splash";
import Login from "../screens/Login";

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
