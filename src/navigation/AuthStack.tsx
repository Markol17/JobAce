import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, JobSeekerSignUpScreen, WelcomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Welcome' component={WelcomeScreen} />
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='SignUp' component={JobSeekerSignUpScreen} />
		</Stack.Navigator>
	);
};
