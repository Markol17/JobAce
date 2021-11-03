import React, { useState } from "react";
import { RootNavigator } from "./src/navigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NativeBaseProvider } from "native-base";
import { AuthContextProvider } from "./src/contexts";

const fetchFonts = () => {
	return Font.loadAsync({
		Cocogoose: require("./assets/fonts/Cocogoose-Regular.ttf"),
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
		<NativeBaseProvider>
			<AuthContextProvider>
				<RootNavigator />
			</AuthContextProvider>
		</NativeBaseProvider>
	);
}
