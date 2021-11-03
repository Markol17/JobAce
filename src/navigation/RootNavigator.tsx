import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AuthContext, SET_USER } from "../contexts";
import { auth } from "../config";
import { Text } from "react-native";
import { AppTabs } from "./AppTabs";

export const RootNavigator = () => {
	const { user, dispatch } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// onAuthStateChanged returns an unsubscriber
		const unsubscribeAuthStateChanged = auth.onAuthStateChanged((authenticatedUser: any) => {
			authenticatedUser
				? dispatch({ type: SET_USER, user: authenticatedUser })
				: dispatch({ type: SET_USER, user: undefined });
			setIsLoading(false);
		});

		// unsubscribe auth listener on unmount
		return unsubscribeAuthStateChanged;
	}, [user]);

	if (isLoading) {
		return <Text>loading...</Text>;
	}
	return <NavigationContainer>{user ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
