import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<AppStack />
		</NavigationContainer>
	);
};
