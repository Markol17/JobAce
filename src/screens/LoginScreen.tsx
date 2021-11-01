import React, { useState, useEffect} from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";


export const LoginScreen = (props: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  

  const emailChangeHandler = (text: string) => {
    setEmail(text);
  };

  const passwordChangeHandler = (text: string) => {
    setPassword(text);
  };

  const login = async (email: string, password: string) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user info: ", user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      setError(error.code)
    })

  }

  useEffect(() => {
    if (error) {
      Alert.alert("Login Failed", error, [{ text: "Okay" }]);
    }
    setError(null);
  }, [error]);
     

    return (
      <SafeAreaView style={styles.screen}>
          <StatusBar barStyle="dark-content" animated={true} />
            <ScrollView style={styles.container}>
            <View style={styles.innerHeader}>
              <Text style={styles.title}>Login</Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={styles.login}
                    onPress={() => navigation.navigate("SignUp")}
                  >
                  Sign Up
              </Text>
            </TouchableOpacity>
          </View>

        <FloatingLabelInput
          id="email"
          textContentType="emailAddress"
          label="Email address"
          value={emailText}
          ref={emailInput}
          required
          maxLength={35}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          errorText="Please enter a valid email address"
          onChangeText={emailChangeHandler}
          onSubmitEditing={() => {
            passwordInput.current.focus();
          }}
        />
        <FloatingLabelInput
          id="password"
          textContentType="password"
          label="Password (8+ characters)"
          value={passwordText}
          ref={passwordInput}
          isPassword
          togglePassword={show}
          required
          maxLength={30}
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          errorText="Please enter a valid password"
          customShowPasswordImage={showPassword}
          customHidePasswordImage={hidePassword}
          onChangeText={passwordChangeHandler}
          onSubmitEditing={() => {
            birthdayInput.current.focus();
          }}
        />
       


        {/* Display a loading animation when user account is being created */}
        <TouchableHighlight
          activeOpacity={1}
          underlayColor="rgba(0,0,0,0.7)"
          style={styles.btnBG}
          onPress={signUpHandler}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>Log in</Text>
          )}
        </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#665aad",
  },
  header: {
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 0.75,
    borderBottomColor: "#E8D7CC",
    backgroundColor: "#665aad",
  },
  innerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginTop: 20,
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    marginBottom: 15,
  },
  chevron: {
    paddingTop: 8,
    paddingRight: 10,
    alignItems: "center",
  },
  btnBG: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 30,
    minWidth: 300,
    marginBottom: 25,
    borderWidth: 2,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  login: {
    alignItems: "center",
    color: "#ffffff",
    fontWeight: "700",
    // marginHorizontal: 5,
    // marginVertical: 10,
    fontSize: 20,
  },
  disclaimerLink: {
    color: "#C83E6F",
    textDecorationLine: "underline",
  },
})