import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from "../../utils/colors";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppButton({
  onPress,
  background = "primary",
  textColor = "white",
  title,
  children,
}) {
  const underlays = {
    secondary: "secondary",
    primary: "darkPrimary",
    white: "lightGrey",
    transparent: "",
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={colors[underlays[background]] || colors.white}
      style={[styles.button, { backgroundColor: colors[background] }]}
    >
      <Text style={[styles.buttonText, { color: colors[textColor] }]}>
        {title} {children}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    minWidth: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "700",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
    textTransform: "uppercase",
  },
});
