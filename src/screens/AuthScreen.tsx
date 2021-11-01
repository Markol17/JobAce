import React from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const AuthScreen = (props) => {
     const navigation = useNavigation();

    return (
      <View style={styles.screen}>
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.title}>JobTok</Text>
            <Text style={styles.subtitle}>slogan</Text>
          </View>
           <View style={styles.footer}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgba(0,0,0,0.7)"
            style={styles.signupBG}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgba(255,255,255,0.2)"
            style={styles.loginBG}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#665aad",
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
  },
  body: {
    top: "20%",
  },
  title: {
    fontSize: 50,
    textAlign: 'center', 
    fontWeight: "700",
    fontFamily: "Cocogoose",
    color: "#fff",
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center', 
    fontWeight: "300",
    color: "#fff",
    fontFamily: "Cocogoose",
    marginTop: 15,
    marginBottom: 15,
    lineHeight: 35,
  },
  footer: {
    alignItems: "center",
  },
  signupBG: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 30,
    minWidth: 300,
    marginBottom: 10,
    borderWidth: 2,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  loginBG: {
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 30,
    minWidth: 300,
  },
});
