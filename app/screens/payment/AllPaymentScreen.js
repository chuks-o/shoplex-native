import React from "react";
import { View, StatusBar, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllPaymentsScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar barStyle="dark-content" />
      <Text>All Payment screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
};

export default AllPaymentsScreen;
