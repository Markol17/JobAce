import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, JobSeekerCreateScreen, ProfileScreen } from "../screens";
import { BottomTab } from "../components";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const JobSeekerAppTabs = () => {
	return (
		<Tab.Navigator
			tabBar={(props) => (
				<BlurView
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
					}}
					tint='dark'
					intensity={40}>
					<BottomTab {...props} />
				</BlurView>
			)}
			sceneContainerStyle={{ backgroundColor: "transparent" }}
			screenOptions={{
				headerShown: false,
			}}>
			<Tab.Screen
				options={{
					tabBarIcon: (props) => {
						return <AntDesign name='home' size={24} color='black' />;
					},
				}}
				name='Home'
				component={HomeScreen}
			/>
			<Tab.Screen name='Create' component={JobSeekerCreateScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};
