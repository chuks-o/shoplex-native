import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar barStyle="dark-content" />
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
}
