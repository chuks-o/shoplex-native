import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import AppButton from "../../../components/reusable/AppButton";
import colors from "../../../utils/colors";
import AppTextInput from "../../../components/forms/AppTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../../../components/reusable/AppText";
import { AuthContext } from "../../../utils/AuthProvider";

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.signupBody}>
        <View>
          <AppText style={styles.signupHeader}>Sign Up</AppText>
          <View>
            <AppTextInput placeholder="Email address" />
          </View>
          <View>
            <AppTextInput placeholder="Firstname" />
          </View>
          <View>
            <AppTextInput placeholder="Lastname" />
          </View>
          <View>
            <AppTextInput placeholder="Phone Number" />
          </View>
          <View>
            <AppTextInput placeholder="Password" />
          </View>

          <View style={styles.touchIDSect}>
            <AppText style={styles.smallText}>
              I agree to the terms and condition
            </AppText>
            {/* <AppText style={{ ...styles.smallText, marginLeft: "auto" }}>
              Login with touch ID
            </AppText> */}
          </View>

          <AppButton
            title="Register"
            onPress={() => alert("Signup complete")}
          ></AppButton>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            {/* <AppText style={styles.smallText}>Don't have an account? </AppText> */}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <AppText
                style={[
                  styles.smallText,
                  { color: colors.secondary, fontWeight: "bold" },
                ]}
              >
                Login
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryTint,
  },
  signupHeader: {
    fontSize: 36,
    color: colors.dark,
    fontWeight: "bold",
    marginBottom: 40,
  },
  signupBody: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.primaryTint,
  },
  smallText: {
    fontSize: 17,
    fontWeight: "400",
  },
  touchIDSect: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 27,
    paddingTop: 10,
  },
});
