import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const AppBarTab = ({ state, descriptors, navigation }: { state: any; descriptors: any; navigation: any }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			{state.routes.map((route: { key: string | number; name: any }, index: number) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						accessibilityRole='button'
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}>
						<Text style={{ color: isFocused ? "black" : "#222" }}>{label}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
