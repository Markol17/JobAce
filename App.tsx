import React, { useState } from "react";
import { RootNavigator } from "./src/navigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NativeBaseProvider } from "native-base";
import { AuthContextProvider } from "./src/contexts";
import { config, theme } from "./src/config";

const fetchFonts = () => {
	return Font.loadAsync({
		Comfortaa: require("./assets/fonts/Comfortaa-VariableFont_wght.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		console.log("loading font");
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err: any) => console.log(err)}
			/>
		);
	}

	return (
		<NativeBaseProvider config={config} theme={theme}>
			<AuthContextProvider>
				<RootNavigator />
			</AuthContextProvider>
		</NativeBaseProvider>
	);
}
