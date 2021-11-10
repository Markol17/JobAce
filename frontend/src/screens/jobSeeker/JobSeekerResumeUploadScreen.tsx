import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
	Box,
	Text,
	FormControl,
	Heading,
	HStack,
	Input,
	Link,
	VStack,
	Button,
	WarningOutlineIcon,
	useToast,
} from "native-base";

export const JobSeekerResumeUploadScreen = (props: any) => {
	const navigation = useNavigation();
	const toast = useToast();

	const handleNext = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	return (
		// check: https://docs.expo.dev/versions/latest/sdk/document-picker/ for iOS support
		// check https://snack.expo.dev/@ritam/document-picker for implementation example
		<Box bg='#283242' h='100%'>
			upload page
		</Box>
	);
};
