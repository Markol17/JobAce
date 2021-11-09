import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, JobSeekerBasicSignUpScreen, WelcomeScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export const JobSeekerAuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='SignUp' component={JobSeekerBasicSignUpScreen} />
		</Stack.Navigator>
	);
};
