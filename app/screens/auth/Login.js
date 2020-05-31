import React, { useContext, Fragment } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import colors from "../../../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../../utils/AuthProvider";
import AppText from "../../../components/reusable/AppText";
import * as Yup from "yup";
import {
  AppForm,
  AppSubmitButton,
  AppFormField,
} from "../../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Login({ navigation }) {
  const { login, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.loginBody}>
        <View>
          <AppText style={styles.loginHeader}>Login</AppText>
          <AppForm
            initialValues={{ email: "", password: "" }}
            handleSubmit={(values) => login(values)}
            validationSchema={validationSchema}
          >
            <Fragment>
              <View style={styles.inputContainer}>
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Email Address"
                  keyboardType="email-address"
                  name="email"
                  textContentType="emailAddress"
                />
              </View>

              <View style={styles.inputContainer}>
                <AppFormField
                  autoCapitalize="none"
                  placeholder="Password"
                  name="password"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
              </View>

              <View style={styles.touchIDSect}>
                <AppText style={styles.smallText}>Remember me</AppText>
                <AppText style={{ ...styles.smallText, marginLeft: "auto" }}>
                  Login with touch ID
                </AppText>
              </View>

              <AppSubmitButton
                title="Log in"
                onSubmit={(values) => console.log(values)}
              />
              <TouchableOpacity
                onPress={() => alert("Forgot password")}
                style={styles.forgotPasswordSection}
              >
                <AppText style={styles.forgotPassword}>
                  Forgot Password?
                </AppText>
              </TouchableOpacity>
            </Fragment>
          </AppForm>
        </View>

        <View style={[styles.bottomContainer, { marginTop: "auto" }]}>
          <View style={styles.directionRow}>
            <AppText style={styles.smallText}>Don't have an account? </AppText>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <AppText
                style={[
                  styles.smallText,
                  { color: colors.secondary, fontWeight: "bold" },
                ]}
              >
                Signup
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
  directionRow: {
    flexDirection: "row",
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 16,
  },
  forgotPasswordSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  loginHeader: {
    fontSize: 38,
    color: colors.dark,
    fontWeight: "bold",
    marginBottom: 50,
  },
  loginBody: {
    flex: 1,
    paddingTop: 80,
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
    paddingBottom: 24,
    paddingTop: 18,
  },
});
