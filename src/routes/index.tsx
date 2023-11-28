import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabs.routes";
import { ExternalAccess } from './externalAcesses'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function Routes() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <NavigationContainer>
       {!user.logado ? (
        <ExternalAccess />
      ) : (
        <TabRoutes />
      )}
    </NavigationContainer>
  );
}
