import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../../utils/colors";
// import Products from "../../../utils/Products";
import Categories from "../../../utils/Categories";
import CarouselCard from "../../../components/home/CarouselCard";
import ProductCard from "../../../components/home/ProductCard";
import AppButton from "../../../components/reusable/AppButton";
import Screen from "../../../components/reusable/Screen";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../../components/reusable/AppText";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([
    {
      title: "Apple iWatch 4 Mate Black",
      amount: "NGN 350,000",
      location: "Lagos, Nigeria",
      imgSource: require("../../../assets/brad-pouncey-unsplash.jpg"),
    },
    {
      title: "Brown Winter Jacket",
      amount: "NGN 15,000",
      location: "Oshodi-Isolo, Lagos",
      imgSource: require("../../../assets/dami-adebayo-unsplash.jpg"),
    },
    {
      title: "Men Denim Pants",
      amount: "NGN 12,000",
      location: "Lagos, Nigeria",
      imgSource: require("../../../assets/alexandra.jpg"),
    },
    {
      title: "Gucci jumpsuit",
      amount: "NGN 25,000",
      location: "Lagos, Nigeria",
      imgSource: require("../../../assets/judeus-samson-unsplash.jpg"),
    },
    {
      title: "Apple iWatch 4 Black",
      amount: "NGN 180,000",
      location: "Ikeja, Lagos",
      imgSource: require("../../../assets/daniel-korpai-unsplash.jpg"),
    },
    {
      title: "Yellow joggers pair",
      amount: "NGN 180,000",
      location: "Lagos, Nigeria",
      imgSource: require("../../../assets/dom-hill-unsplash.jpg"),
    },
    {
      title: "Wool Winter Jackets (Wine)",
      amount: "NGN 18,000",
      location: "Lagos-Mainland, Lagos",
      imgSource: require("../../../assets/freestocks-unsplash.jpg"),
    },
  ]);
  const [categories, setCategories] = useState(Categories);

  return (
    <View style={styles.container}>
      <Screen>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View style={styles.headerSection}>
            <AppText style={styles.textHeader}>Categories</AppText>
            <TouchableWithoutFeedback onPress={() => alert("It works")}>
              <AppText style={[styles.smallLink, { marginLeft: "auto" }]}>
                See All
              </AppText>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.categorySection}>
            <ScrollView
              horizontal={true}
              style={{ marginBottom: 25 }}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
            >
              {categories.map((data) => (
                <CarouselCard key={data.categoryTitle} data={data} />
              ))}
            </ScrollView>
          </View>

          <View>
            <View style={styles.newProductsHeader}>
              <AppText style={styles.textHeader}>New Products</AppText>
            </View>
            <SafeAreaView style={styles.productView}>
              <FlatList
                data={products}
                renderItem={({ item, index, separators }) => (
                  <ProductCard
                    goToDetails={() =>
                      navigation.navigate("Product", {
                        productTitle: item.title,
                      })
                    }
                    product={item}
                  />
                )}
                horizontal={false}
                numColumns={2}
                keyExtractor={(product) => product.title.toString()}
              />
            </SafeAreaView>

            {/* start selling area */}
            <View style={styles.sellingContainer}>
              <AppText
                style={{
                  fontSize: 23,
                  color: colors.dark,
                  marginBottom: 20,
                  fontWeight: "700",
                }}
              >
                Start Selling Today
              </AppText>
              <AppButton
                title="Find out how"
                onPress={() => alert("I'm good")}
              />
            </View>
          </View>
        </ScrollView>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  categorySection: {
    paddingLeft: 18,
  },
  newProductsHeader: {
    marginLeft: 20,
    marginTop: 15,
  },
  productView: {
    flex: 1,
    marginHorizontal: 14,
  },
  sellingContainer: {
    borderRadius: 5,
    height: 160,
    marginHorizontal: 20,
    marginBottom: 40,
    marginTop: 20,
    backgroundColor: colors.primaryTint,
    padding: 30,
  },
  smallLink: {
    fontSize: 18,
    color: colors.primary,
  },
  headerSection: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 15,
    alignItems: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.dark,
  },
});

export default HomeScreen;
