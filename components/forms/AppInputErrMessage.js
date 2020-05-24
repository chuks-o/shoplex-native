import React from "react";
import AppText from "../reusable/AppText";
import { StyleSheet } from "react-native";

export default function AppInputErrMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red", fontSize: 14, fontWeight: "bold" },
});
