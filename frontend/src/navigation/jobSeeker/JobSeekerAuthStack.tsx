import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	LoginScreen,
	JobSeekerBasicSignUpScreen,
	JobSeekerResumeUploadScreen,
	JobSeekerSkillsScreen,
	JobSeekerJobExperiencesScreen,
} from "../../screens";

const Stack = createNativeStackNavigator();

const config = {
	animation: "spring",
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

export const JobSeekerAuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "slide_from_right",
			}}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='SignUp' component={JobSeekerBasicSignUpScreen} />
			<Stack.Screen name='ResumeUpload' component={JobSeekerResumeUploadScreen} />
			<Stack.Screen name='Skills' component={JobSeekerSkillsScreen} />
			<Stack.Screen name='JobExperiences' component={JobSeekerJobExperiencesScreen} />
		</Stack.Navigator>
	);
};
