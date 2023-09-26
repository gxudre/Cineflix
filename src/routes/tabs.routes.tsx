import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BookmarkSimple, House, User } from "phosphor-react-native";

import { Home } from "../screens/Home";
import { Favoritos } from "../screens/Favoritos";
import { Details } from "../screens/Details";
import { Perfil } from "../screens/Perfil";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#242a32",
          height: 78,
          alignItems: "center",
          borderTopWidth: 3,
          borderTopColor: "#0296e5",
        },
        headerShown: false,
        tabBarActiveTintColor: "#0296e5",
        tabBarInactiveTintColor: "#fff",
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={30} weight="light" />
          ),
        }}
      />

      <Screen
        name="Details"
        component={Details}
        options={{
          tabBarButton: () => null,
        }}
      />

      <Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color }) => (
            <BookmarkSimple color={color} size={30} weight="light" />
          ),
        }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => (
            <User color={color} size={30} weight="light" />
          ),
        }}
      />
    </Navigator>
  );
}
