import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens";
import { JobSeekerAuthStack } from "./jobSeeker/JobSeekerAuthStack";
import { EmployerAuthStack } from "./employer/EmployerAuthStack";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "fade",
			}}>
			<Stack.Screen name='Welcome' component={WelcomeScreen} />
			<Stack.Screen name='Employer' component={EmployerAuthStack} />
			<Stack.Screen name='JobSeeker' component={JobSeekerAuthStack} />
		</Stack.Navigator>
	);
};
