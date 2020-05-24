import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../home/HomeScreen.js";
import Product from "../home/Product.js";
import { Feather } from "@expo/vector-icons";
import colors from "../../../utils/colors.js";
import AllCategories from "../home/AllCategories.js";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerTitleStyle: {
          color: colors.dark,
          fontWeight: "bold",
        },
        headerBackTitleStyle: {
          fontSize: 16,
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <Feather name="menu" size={25} color={colors.primary} />
            </TouchableWithoutFeedback>
          ),
          headerLeftContainerStyle: {
            marginLeft: 20,
            marginTop: 7,
          },
          headerRightContainerStyle: {
            marginRight: 20,
            marginTop: 5,
          },
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => alert("more")}>
              <Feather
                name="more-horizontal"
                size={25}
                color={colors.primary}
              />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <HomeStack.Screen name="Product" component={Product} />
      <HomeStack.Screen name="Categories" component={AllCategories} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
