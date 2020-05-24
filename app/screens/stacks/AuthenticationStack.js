import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const AuthStack = createStackNavigator();

export default function AuthenticationStack() {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Signup" component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
