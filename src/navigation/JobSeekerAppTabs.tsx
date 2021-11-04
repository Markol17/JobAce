import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, ProfileScreen } from "../screens";
import { BottomTab } from "../components";

const Tab = createBottomTabNavigator();

export const JobSeekerAppTabs = () => {
	return (
		<Tab.Navigator
			tabBar={(props) => <BottomTab {...props} />}
			screenOptions={{
				tabBarStyle: {},
				headerShown: false,
			}}>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};
