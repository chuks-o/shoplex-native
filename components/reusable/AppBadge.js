import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import AppText from "./AppText";

export default function AppBadge({ title, type, size = "small", style = {} }) {
  const config = {
    secondary: {
      backgroundColor: colors["secondaryTint"],
      color: colors.secondary,
    },
    primary: {
      backgroundColor: colors["primaryTint"],
      color: colors.primary,
    },
  };
  return (
    <View
      style={[
        styles.badgeContainer,
        { backgroundColor: config[type]["backgroundColor"] },
        { ...style },
      ]}
    >
      <AppText style={{ color: config[type]["color"], fontWeight: "600" }}>
        {title}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 22,
    paddingHorizontal: 7,
    borderRadius: 3,
  },
});
