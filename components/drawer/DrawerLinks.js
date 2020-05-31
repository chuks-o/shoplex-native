import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../../utils/colors";
import AppText from "../reusable/AppText";

export default function DrawerLinks({ name, icon }) {
  return (
    <TouchableHighlight
      underlayColor={colors.lightGrey}
      onPress={() => alert("Good")}
      style={{ borderRadius: 5 }}
    >
      <View style={styles.drawerContentBody}>
        <View style={styles.drawerContentText}>
          <Feather name={icon} size={25} color={colors.primary} />
        </View>
        <AppText style={styles.drawerLink}>{name}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  drawerLink: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.dark,
  },
  drawerContentBody: {
    flexDirection: "row",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  drawerContentText: { marginRight: 20 },
});
