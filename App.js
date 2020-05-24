import "react-native-gesture-handler";
import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthenticationStack from "./app/screens/stacks/AuthenticationStack.js";
import { AuthContext, AuthProvider } from "./utils/AuthProvider.js";
import { AsyncStorage } from "react-native";
import SplashScreen from "./app/screens/SplashScreen.js";
import AppStack from "./app/screens/stacks/AppStack.js";
// import Swipeable from "react-native-gesture-handler/Swipeable";

const RootStack = createStackNavigator();

export default function App() {
  const { user, login } = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if user is logged or not
    const authSync = async () => {
      try {
        const response = await AsyncStorage.getItem("user");
        if (response) {
          setToken(response);
          console.log(response);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    authSync();
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          {token ? (
            <RootStack.Screen name="App" component={AppStack} />
          ) : (
            <RootStack.Screen name="Auth" component={AuthenticationStack} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
