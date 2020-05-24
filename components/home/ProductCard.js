import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableHighlight } from "react-native-gesture-handler";
import AppText from "../reusable/AppText";

export default function ProductCard({ product, goToDetails }) {
  return (
    <View style={styles.productCard}>
      <TouchableHighlight
        onPress={goToDetails}
        underlayColor={colors.lightGrey}
      >
        <>
          <ImageBackground
            style={styles.productImg}
            borderTopRightRadius={7}
            borderTopLeftRadius={7}
            source={product.imgSource}
          />
          {/* <View>
          </View> */}
          <View style={styles.productText}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productAmount}>{product.amount}</Text>
            <View style={{ flexDirection: "row" }}>
              <AppText style={styles.productLocation}>
                {product.location}
              </AppText>
              <View style={{ marginLeft: "auto" }}>
                <Ionicons name="md-star-outline" size={17} color="red" />
              </View>
            </View>
          </View>
        </>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    marginBottom: 20,
    marginHorizontal: 5,
    flex: 1,
  },
  productImg: {
    height: 110,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  productText: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: "500",
  },
  productAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 6,
  },
  productLocation: {
    fontSize: 14,
    color: "grey",
    flexGrow: 1,
  },
});
