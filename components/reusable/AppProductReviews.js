import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import { Feather, FontAwesome } from "@expo/vector-icons";
import colors from "../../utils/colors";

export default function AppProductReviews({ name = "", review = "" }) {
  return (
    <View style={styles.reviewSection}>
      <View style={styles.reviewUserContainer}>
        <AppText style={styles.username}>Ciroma Simi</AppText>
        <View style={styles.reviewStars}>
          {[
            "star-o",
            "star-o",
            "star-o",
            "star-half-full",
            "star-half-full",
          ].map((name, index) => (
            <FontAwesome
              key={index}
              name={name}
              size={14}
              color={colors.secondary}
            />
          ))}
        </View>
      </View>
      <AppText style={styles.reviewText}>
        This product is a good one, the material os 100% cotton. I love it!
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewSection: { paddingVertical: 10 },
  reviewText: { color: "grey" },
  reviewUserContainer: {
    flexDirection: "row",
  },
  reviewStars: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  username: { fontWeight: "500", marginBottom: 5, fontSize: 16 },
});
