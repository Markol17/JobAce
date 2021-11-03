import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const AppTabs = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} />
		</Stack.Navigator>
	);
};
