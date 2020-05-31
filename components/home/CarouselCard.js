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
    marginRight: 10,
    height: 190,
    borderWidth: 1,
    width: 145,
    borderColor: colors.white,
  },
  carouselImg: {
    height: 150,
  },
  categoryText: {
    flex: 1,
    alignItems: "center",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    alignItems: "center",
  },
});
