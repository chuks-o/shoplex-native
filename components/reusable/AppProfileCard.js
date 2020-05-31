import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../../utils/colors";

export default function AppProfileCard({ name, imageSource = "", size = 18 }) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.imageSection}>
        <Image
          borderRadius={100}
          borderColor={colors.lightGrey}
          source={require("../../assets/avatar-colored.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.profileNameSection}>
        <AppText style={[styles.username, { fontSize: size }]}>{name}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderWidth: 1,
  },
  imageSection: {
    marginRight: 13,
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    maxWidth: "70%",
  },
  username: {
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 5,
    lineHeight: 24,
  },
});
