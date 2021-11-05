import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "native-base";

export const WelcomeScreen = (props: any) => {
	const navigation = useNavigation();

	const handleSignUp = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	const handleLogin = () => {
		//@ts-ignore
		navigation.navigate("Login");
	};

	return (
		<View style={styles.screen}>
			<SafeAreaView style={styles.container}>
				<View style={styles.body} flexDirection='row' justifyContent='center'>
					<Text style={styles.title}>Job</Text>
					<Text style={styles.title2}>Ace</Text>
				</View>
				<View style={styles.footer}>
					<Button
						mb={2}
						p={3}
						style={{ borderRadius: 30, backgroundColor: "black", width: "90%" }}
						_text={{
							color: "black",
							fontWeight: "bold",
							fontSize: "lg",
						}}
						bg='transparent'
						colorScheme='teal'
						onPress={handleSignUp}>
						<Text style={styles.btnText}>I am a job seeker</Text>
					</Button>
					<Button
						p={3}
						style={{ borderRadius: 30, borderColor: "white", borderWidth: 2, width: "90%" }}
						_text={{
							color: "black",
							fontWeight: "bold",
							fontSize: "lg",
						}}
						bg='transparent'
						colorScheme='teal'
						onPress={handleLogin}>
						<Text style={styles.btnText}>I am an employer</Text>
					</Button>
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#14b8a6",
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
		fontSize: 54,
		textAlign: "center",
		fontWeight: "900",
		fontFamily: "Comfortaa",
		color: "#fff",
	},
	title2: {
		fontSize: 54,
		textAlign: "center",
		fontWeight: "900",
		fontFamily: "Comfortaa",
		color: "#283242",
	},

	footer: {
		alignItems: "center",
	},

	btnText: {
		textAlign: "center",
		color: "#fff",
		fontSize: 20,
		fontWeight: "700",
	},
});
