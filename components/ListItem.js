import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = ({ text }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 30,
    // backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    marginBottom: 10,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    color: "#000",
    fontSize: 20,
  },
});
