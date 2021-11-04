import { Button } from "native-base";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import { DeckSwiper } from "../components";
import { auth } from "../config";

export const HomeScreen = () => {
	const handleSignOut = () => {
		auth.signOut();
	};
	return (
		<View style={styles.container}>
			<DeckSwiper />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "blue",
	},
	card: {
		flex: 1,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		justifyContent: "center",
		backgroundColor: "white",
	},
	text: {
		textAlign: "center",
		fontSize: 50,
		backgroundColor: "transparent",
	},
});
