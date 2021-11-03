import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { AuthScreen } from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Auth' component={AuthScreen} />
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='SignUp' component={SignUpScreen} />
		</Stack.Navigator>
	);
};
