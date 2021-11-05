import React from "react";
import { StyleSheet, View } from "react-native";
import { DeckSwiper } from "../components";

export const HomeScreen = () => {
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
});
