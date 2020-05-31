import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../reusable/AppText";
import colors from "../../utils/colors";
import Screen from "../reusable/Screen";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DrawerLinks from "./DrawerLinks";
import AppButton from "../reusable/AppButton";
import AppProfileCard from "../reusable/AppProfileCard";

const drawerData = [
  { name: "Home", icon: "home" },
  { name: "Profile", icon: "user" },
  { name: "Settings", icon: "settings" },
  { name: "Wishlists", icon: "star" },
  { name: "FAQ's", icon: "info" },
];

export default function DrawerArea(props) {
  console.log(props);
  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 1,
            padding: 18,
            borderColor: colors.lightGrey,
          }}
        >
          <AppProfileCard name="Ciroma Adekunle Gold" />
        </View>
      </View>
      <ScrollView
        style={{
          paddingTop: 25,
        }}
      >
        {drawerData.map(({ name, icon }) => (
          <DrawerLinks key={icon} name={name} icon={icon} />
        ))}
      </ScrollView>

      <View style={styles.bottomSection}>
        <AppText style={{ marginBottom: 7, color: "grey" }}>
          You too can have your products listed. Find out how.
        </AppText>
        <AppButton
          title="Start Selling"
          onPress={() => alert("Navigate to faq section")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  viewProfileText: {
    color: "grey",
    fontSize: 16,
  },
});
