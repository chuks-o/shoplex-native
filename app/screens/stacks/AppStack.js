import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "../../../navigation/DrawerNavigation";

const AppsStack = createStackNavigator();

export default function AppStack() {
  return (
    <AppsStack.Navigator headerMode="none">
      <AppsStack.Screen
        name="Drawer"
        component={DrawerNavigation}
      ></AppsStack.Screen>
    </AppsStack.Navigator>
  );
}
