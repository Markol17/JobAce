import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, EmployerBasicSignUpScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export const EmployerAuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='SignUp' component={EmployerBasicSignUpScreen} />
		</Stack.Navigator>
	);
};
