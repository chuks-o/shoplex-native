import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import AppColors from "../utils/colors.js";
import HomeStackScreen from "../app/screens/stacks/HomeStackScreen";
import MyProductsStackScreen from "../app/screens/stacks/MyProductsStackScreen";
import CreateNewProduct from "../app/screens/stacks/CreateNewProduct";
import SettingsScreen from "../app/screens/settings/SettingsScreen.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getRouteIcon(route.name);
          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: AppColors.primary,
        inactiveTintColor: "#808080",
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Create New" component={CreateNewProduct} />
      <Tab.Screen name="My Products" component={MyProductsStackScreen} />
      <Tab.Screen name="Shops" component={SettingsScreen} />
      {/* Add Screen for shop */}
    </Tab.Navigator>
  );
};

const getRouteIcon = (routeName) => {
  const icons = {
    Home: "home",
    "My Products": "shopping-bag",
    "Create New": "plus-circle",
    Shops: "layers",
  };
  return icons[routeName];
};

export default BottomTabNavigator;
