import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppColors from "../../../utils/colors.js";
import { View } from "react-native";
import CreateProductScreen from "../product/CreateProductScreen.js";

const CreateNewProductStack = createStackNavigator();

const CreateNewProduct = () => {
  return (
    <CreateNewProductStack.Navigator>
      <CreateNewProductStack.Screen
        name="Create Product"
        component={CreateProductScreen}
      ></CreateNewProductStack.Screen>
    </CreateNewProductStack.Navigator>
  );
};

export default CreateNewProduct;
