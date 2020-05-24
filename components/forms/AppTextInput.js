import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import colors from "../../utils/colors";

export default function AppTextInput(props) {
  return (
    <View>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#dadde1",
    borderTopColor: "#dadde1",
    borderLeftColor: "#dadde1",
    borderRightColor: "#dadde1",
    borderRadius: 5,
    borderWidth: 1,
    height: 48,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "500",
    color: colors.dark,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
    marginBottom: 2,
  },
});
