import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../components/drawer/ProfileScreen";
import BottomTabNavigator from "../navigation/BottomTabNavigator";
import DrawerArea from "../components/drawer/DrawerArea";

const DrawerStack = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <DrawerStack.Navigator
      drawerType="slide"
      drawerStyle={{
        width: 260,
      }}
      // drawerContent={(props) => <DrawerArea {...props} />}
      hideStatusBar={true}
    >
      <DrawerStack.Screen name="Home" component={BottomTabNavigator} />
      <DrawerStack.Screen name="Profile" component={ProfileScreen} />
    </DrawerStack.Navigator>
  );
}
