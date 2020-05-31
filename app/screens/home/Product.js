import React from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar } from "react-native";
import Screen from "../../../components/reusable/Screen";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../../../components/reusable/AppText";
import { Feather } from "@expo/vector-icons";
import colors from "../../../utils/colors";
import AppBadge from "../../../components/reusable/AppBadge";
import AppProfileCard from "../../../components/reusable/AppProfileCard";
import AppButton from "../../../components/reusable/AppButton";
import AppProductReviews from "../../../components/reusable/AppProductReviews";

export default function Product({ navigation, route }) {
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require("../../../assets/judeus-samson-unsplash.jpg")}
        ></Image>
      </View>
      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetails}>
          <View>
            <AppText
              style={{ fontSize: 18, marginBottom: 5, fontWeight: "600" }}
            >
              {route.params.productTitle}
            </AppText>
            <AppText style={styles.productDescription}>
              Gucci coat for the winter season, made of cotton and it wraps
              around the body very well.
            </AppText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AppText style={styles.amount}>NGN 35,000</AppText>
              <AppBadge
                style={{ marginLeft: "auto" }}
                title="Brand New"
                type="primary"
              />
            </View>
          </View>
        </View>

        <View style={styles.vendorDetailsContainer}>
          {/* <AppText style={styles.vendorDetailsHeader}>Vendor's Details</AppText> */}
          <View>
            <View style={styles.vendorProfileCard}>
              <AppProfileCard name="Ciroma Gold Stores" size={15} />
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Feather name="map-pin" size={13} color="grey" />
                <AppText style={{ color: colors.darkGrey, marginLeft: 7 }}>
                  Lagos Island, Lagos.
                </AppText>
              </View>
              <View style={{ marginLeft: "auto", flexDirection: "row" }}>
                <Feather name="clock" size={13} color="grey" />
                <AppText style={{ color: colors.darkGrey, marginLeft: 7 }}>
                  12 Sept 2020.
                </AppText>
              </View>
            </View>
          </View>
          <View style={styles.vendorPhoneSection}>
            <AppButton
              title="Call Ciroma"
              background="secondary"
              onPress={() => alert("Calling Ciroma")}
            >
              <Feather name="phone-call" size={16} color="white" />
            </AppButton>
          </View>
        </View>

        <View
          style={{
            paddingVertical: 10,
            marginTop: 25,
            paddingHorizontal: 20,
          }}
        >
          <AppText
            style={{
              fontSize: 18,
              marginRight: 5,
              fontWeight: "600",
              marginBottom: 15,
            }}
          >
            Reviews
          </AppText>

          {/* Reviews here */}
          {[0, 1, 2, 3, 4].map((review) => (
            <AppProductReviews key={review} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  amount: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 18,
    paddingVertical: 5,
  },
  image: {
    height: Dimensions.get("window").height * 0.46,
    width: Dimensions.get("window").width,
  },
  imageContainer: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  productDetailsContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.48,
  },
  productDetails: {
    paddingHorizontal: 18,
    borderBottomColor: colors.lightGrey,
    marginBottom: 15,
  },
  productDescription: { color: "grey" },
  sellersContainer: {
    paddingVertical: 3,
    backgroundColor: "#fafafa",
  },
  vendorDetailsContainer: {
    backgroundColor: "#fafafa",
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  vendorDetailsHeader: {
    paddingVertical: 5,
    fontWeight: "600",
    fontSize: 16,
    paddingHorizontal: 18,
  },
  vendorProfileCard: {
    width: Dimensions.get("window").width / 2.5,
  },
  vendorPhoneSection: {
    paddingTop: 20,
  },
});
