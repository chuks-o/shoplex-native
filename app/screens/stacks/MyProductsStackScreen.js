import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../DetailsScreen.js";
import SettingsScreen from "../settings/SettingsScreen.js";

const MyProductsStack = createStackNavigator();

export default function MyProductsStackScreen() {
  return (
    <MyProductsStack.Navigator>
      <MyProductsStack.Screen name="Settings" component={SettingsScreen} />
      <MyProductsStack.Screen name="Details" component={DetailsScreen} />
    </MyProductsStack.Navigator>
  );
}
