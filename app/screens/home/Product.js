import React from "react";
import { View, Button } from "react-native";

export default function Product({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
