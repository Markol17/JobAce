import { extendTheme } from "native-base";

export const theme = extendTheme({
	components: {
		Button: {
			variants: {
				brand: {
					p: "10",
					bg: "brand.500",
				},
			},
		},
	},
});

export const config = {
	dependencies: {
		"linear-gradient": require("expo-linear-gradient").LinearGradient,
	},
};
