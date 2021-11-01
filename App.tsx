import React, { useState } from "react";
import { RootNavigator } from "./src/navigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";


const fetchFonts = () => {
  return Font.loadAsync({
    Cocogoose: require("./assets/fonts/Cocogoose-Regular.ttf"),
  });
};

export default function App() {

	const [fontLoaded, setFontLoaded] = useState(false);
	
	if (!fontLoaded) {
		console.log("loading font")
    	return (
      		<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.log(err)}
      		/>
    	);
	}

	return <RootNavigator />;
}
