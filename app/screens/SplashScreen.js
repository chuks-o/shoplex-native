import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../../utils/colors";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 60 }}
        source={require("../../assets/Logo.png")}
      ></Image>
      {/* <StatusBar barStyle="dark-content" /> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryTint,
    paddingHorizontal: 20,
  },
});
