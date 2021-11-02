import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

export const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Swiper
				cards={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
				renderCard={(card) => {
					return (
						<View style={styles.card}>
							<Text style={styles.text}>{card}</Text>
						</View>
					);
				}}
				onSwiped={(cardIndex) => {
					console.log(cardIndex);
				}}
				onSwipedAll={() => {
					console.log("onSwipedAll");
				}}
				cardIndex={0}
				backgroundColor={"#F5FCFF"}
				cardVerticalMargin={2}
				cardHorizontalMargin={2}
				infinite
				stackSeparation={2}
				stackSize={3}></Swiper>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
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
