import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../reusable/AppText";
import colors from "../../utils/colors";
import Screen from "../reusable/Screen";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DrawerLinks from "./DrawerLinks";
import AppButton from "../reusable/AppButton";

const drawerData = [
  { name: "Home", icon: "home" },
  { name: "Profile", icon: "user" },
  { name: "Settings", icon: "settings" },
  { name: "Wishlists", icon: "star" },
  { name: "FAQ's", icon: "info" },
];

export default function DrawerArea({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <View style={styles.imageSection}>
            <Image
              borderRadius={100}
              borderColor={colors.lightGrey}
              source={require("../../assets/avatar.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.profileNameSection}>
            <AppText style={styles.username}>Okpala Chukwualasu</AppText>
            <AppText style={styles.viewProfileText}>View Profile</AppText>
          </View>
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
  image: {
    height: 60,
    width: 60,
    borderWidth: 1,
  },
  imageSection: {
    marginRight: 13,
  },

  profileNameSection: {
    width: "70%",
  },
  profileSection: {
    padding: 18,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 5,
    lineHeight: 24,
  },
  viewProfileText: {
    color: "grey",
    fontSize: 16,
  },
});
