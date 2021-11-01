import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { AuthScreen } from '../screens/AuthScreen';


const Stack = createNativeStackNavigator();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name='Auth' 
				component={AuthScreen} 
				options={({ route }) => ({
          			headerShown: false,
        		})}
			/>
			<Stack.Screen 
				name='Login' 
				component={LoginScreen}
				options={({ route }) => ({
          			headerShown: false,
        		})}
			/>
			<Stack.Screen 
				name='SignUp' 
				component={SignUpScreen} 
				options={({ route }) => ({
          			headerShown: false,
        		})}
			/>
			<Stack.Screen 
				name='Home' 
				component={HomeScreen} 
			/>

		</Stack.Navigator>
	);
};
