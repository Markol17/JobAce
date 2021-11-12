import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	LoginScreen,
	JobSeekerBasicSignUpScreen,
	WelcomeScreen,
	JobSeekerResumeUploadScreen,
	JobSeekerSkillsScreen,
} from "../../screens";

const Stack = createNativeStackNavigator();

export const JobSeekerAuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='SignUp' component={JobSeekerBasicSignUpScreen} />
			<Stack.Screen name='ResumeUpload' component={JobSeekerResumeUploadScreen} />
			<Stack.Screen name='Skills' component={JobSeekerSkillsScreen} />
		</Stack.Navigator>
	);
};
