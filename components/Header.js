import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 65,
    paddingTop: 32,
    backgroundColor: colors.primary,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default Header;
