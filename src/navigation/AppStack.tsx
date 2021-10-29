import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "../screens";
import { AppBarTab } from ".";

const Tab = createBottomTabNavigator();

export const AppStack = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={(props) => <AppBarTab {...props} />}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='md-checkmark-circle' size={size} color={color} />,
					tabBarBadge: 3,
				}}
			/>
		</Tab.Navigator>
	);
};
