import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import colors from "../../utils/colors";

export default function CarouselCard({ data }) {
  const radius = 7;
  return (
    <View style={styles.categoryCard}>
      <View>
        <ImageBackground
          borderTopRightRadius={radius}
          borderTopLeftRadius={radius}
          style={styles.carouselImg}
          source={data.imgSource}
        />
      </View>
      <View style={styles.categoryText}>
        <Text style={styles.categoryTitle}>{data.categoryTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: colors.white,
    marginRight: 15,
    height: 140,
    borderWidth: 1,
    maxWidth: 240,
    minWidth: 240,
    borderColor: colors.white,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  carouselImg: {
    height: 100,
  },
  categoryText: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    alignItems: "center",
  },
});
