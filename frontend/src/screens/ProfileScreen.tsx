import { Button } from "native-base";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth } from "../config";

export const ProfileScreen = () => {
	const handleSignOut = () => {
		auth.signOut();
	};
	return (
		<View style={styles.container}>
			<Button colorScheme='teal' onPress={handleSignOut}>
				Sign out
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
	},
});
