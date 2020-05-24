import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ListItem from "../../../components/ListItem.js";
import colors from "../../../utils/colors.js";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateProductScreen = ({ navigation }) => {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Fish" },
    { id: 3, text: "Rice" },
    { id: 4, text: "Beans" },
    { id: 5, text: "Egg" },
    { id: 6, text: "Egusi Soup" },
    { id: 7, text: "Amala and Gbegiri" },
  ]);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log({ text });
  }, []);

  const addProduct = () => {
    setItems([...items, { id: Math.random(), text }]);
    setText("");
  };

  const handleNewText = (text) => {
    if (!text) {
      alert("Please enter an item");
    } else {
      setText(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.formBody}>
        {/* <View style={styles.horizontal}></View> */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter a product name"
          value={text}
          returnKeyType="done"
          onChangeText={(text) => handleNewText(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#00bdaa",
            height: 48,
            borderRadius: 3,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onPress={() => addProduct()}
            title="Add Product"
            color="#ffffff"
            accessibilityLabel="Learn more about this purple button"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.appBody}>
        <FlatList
          data={items}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    // marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 15,
  },
  appBody: {
    flex: 1,
    paddingBottom: 20,
  },
  formBody: {
    paddingLeft: 18,
    paddingRight: 18,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
