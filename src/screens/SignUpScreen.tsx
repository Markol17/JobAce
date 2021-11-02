import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config";
import { Box, Button, FormControl, Heading, Input, VStack } from "native-base";

export const SignUpScreen = (props: any) => {
	const [email, setEmail] = useState("");
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [error, setError] = useState("");
	const navigation = useNavigation();
	const [show, setShow] = useState(false);

	const emailChangeHandler = (text: string) => {
		console.log(text);
		if (text.length === 0) {
			setEmailIsValid(false);
		} else {
			setEmailIsValid(true);
		}
		setEmail(text);
	};

	const passwordChangeHandler = (text: string) => {
		console.log(text);
		if (text.length < 6) {
			setPasswordIsValid(false);
		} else {
			setPasswordIsValid(true);
		}
		setPassword(text);
	};

	const signup = async () => {
		console.log("email:", email);
		console.log("password:", password);
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("user info: ", user);
				navigation.navigate("Login");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				setError(error);
			});
	};
	const signUpHandler = async () => {
		if (emailIsValid === false || passwordIsValid === false) {
			setError("The email is invalid or the password is less than 6 characters");
		} else {
			signup();
		}
	};

	useEffect(() => {
		if (error) {
			// Alert.alert("Sign Up Failed", error, [{ text: "Okay" }]);
		}
		setError("");
	}, [error]);

	return (
		<Box safeArea flex={1} p='2' w='90%' mx='auto' py='8'>
			<Heading size='lg' color='coolGray.800' fontWeight='600'>
				Welcome
			</Heading>
			<Heading mt='1' color='coolGray.600' fontWeight='medium' size='xs'>
				Sign up to continue!
			</Heading>

			<VStack space={3} mt='5'>
				<FormControl>
					<FormControl.Label _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}>Email</FormControl.Label>
					<Input />
				</FormControl>
				<FormControl>
					<FormControl.Label _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}>
						Password
					</FormControl.Label>
					<Input type='password' />
				</FormControl>
				<FormControl>
					<FormControl.Label _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}>
						Confirm Password
					</FormControl.Label>
					<Input type='password' />
				</FormControl>
				<Button mt='2' colorScheme='indigo' _text={{ color: "white" }}>
					Sign up
				</Button>
			</VStack>
		</Box>
		// <SafeAreaView style={styles.screen}>
		//   <StatusBar barStyle="dark-content" animated={true} />
		//     <ScrollView style={styles.container}>
		//       <View style={styles.innerHeader}>
		//         <Text style={styles.title}>Sign Up</Text>
		//         <TouchableOpacity activeOpacity={0.5}>
		//           <Text
		//             style={styles.login}
		//             onPress={() => navigation.navigate("Login")}
		//           >
		//             Log in
		//           </Text>
		//         </TouchableOpacity>
		//       </View>
		//       <View style={styles.inputContainer}>
		//     <TextInput
		//       placeholder="Email"
		//       value={email}
		//       onChangeText={text => emailChangeHandler(text)}
		//       style={styles.input}
		//     />
		//       <TextInput
		//       placeholder="Password"
		//       onChangeText={text => passwordChangeHandler(text)}
		//       value={password}
		//       secureTextEntry={true}
		//       style={styles.input}
		//     />
		//   </View>

		//        <TouchableHighlight
		//         activeOpacity={1}
		//         underlayColor="rgba(0,0,0,0.7)"
		//         style={styles.btnBG}
		//         onPress={signUpHandler}
		//       >
		//           <Text style={styles.btnText}>Create Account</Text>
		//       </TouchableHighlight>

		//   </ScrollView>
		// </SafeAreaView>
	);
};

// const styles = StyleSheet.create({
// 	screen: {
// 		flex: 1,
// 		backgroundColor: "#665aad",
// 	},
// 	header: {
// 		flexDirection: "row",
// 		paddingRight: 10,
// 		alignItems: "center",
// 		justifyContent: "flex-end",
// 		borderBottomWidth: 0.75,
// 		borderBottomColor: "#E8D7CC",
// 		backgroundColor: "#665aad",
// 	},
// 	input: {
// 		backgroundColor: "white",
// 		paddingHorizontal: 15,
// 		paddingVertical: 10,
// 		borderRadius: 10,
// 		marginTop: 5,
// 		marginBottom: 5,
// 	},
// 	inputContainer: {
// 		width: "80%",
// 		justifyContent: "center",
// 	},

// 	innerHeader: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 		marginVertical: 5,
// 		marginTop: 20,
// 		justifyContent: "space-between",
// 	},
// 	container: {
// 		paddingHorizontal: 15,
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: "700",
// 	},
// 	subtitle: {
// 		marginBottom: 15,
// 	},
// 	chevron: {
// 		paddingTop: 8,
// 		paddingRight: 10,
// 		alignItems: "center",
// 	},
// 	btnBG: {
// 		backgroundColor: "rgba(0,0,0,0.9)",
// 		padding: 10,
// 		paddingLeft: 60,
// 		paddingRight: 60,
// 		borderRadius: 30,
// 		minWidth: 300,
// 		marginBottom: 25,
// 		borderWidth: 2,
// 	},
// 	btnText: {
// 		textAlign: "center",
// 		color: "#fff",
// 		fontSize: 20,
// 		fontWeight: "700",
// 	},
// 	login: {
// 		alignItems: "center",
// 		color: "#ffffff",
// 		fontWeight: "700",
// 		// marginHorizontal: 5,
// 		// marginVertical: 10,
// 		fontSize: 20,
// 	},
// 	disclaimerLink: {
// 		color: "#C83E6F",
// 		textDecorationLine: "underline",
// 	},
// });
