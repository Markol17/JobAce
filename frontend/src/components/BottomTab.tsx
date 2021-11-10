import { Button, View, Text } from "native-base";
import React from "react";

export function BottomTab({ state, descriptors, navigation }: any) {
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
				// const icon = options.tabBarIcon;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
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
					<Button
						accessibilityRole='button'
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						backgroundColor='transparent'
						p={4}
						style={{
							flex: 1,
						}}>
						<Text color={isFocused ? "teal.500" : "white"} fontSize='md' fontWeight='bold'>
							{label}
						</Text>
					</Button>
				);
			})}
		</View>
	);
}
