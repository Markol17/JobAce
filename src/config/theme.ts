import { NativeBaseProvider, extendTheme } from "native-base";

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
