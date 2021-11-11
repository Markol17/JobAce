import React, { useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";
import { DocumentPicker } from "expo";

export const JobSeekerResumeUploadScreen = (props: any) => {
	const navigation = useNavigation();
	const toast = useToast();

	const pickDocument = async () => {
		let result = await DocumentPicker.getDocumentAsync({});
		alert(result.uri);
		console.log(result);
	};

	const handleNext = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	return (
		// check: https://docs.expo.dev/versions/latest/sdk/document-picker/ for iOS support
		// check https://snack.expo.dev/@ritam/document-picker for implementation example
		<Box bg='#283242' h='100%' justifyContent='center' alignItems='center'>
			<Button
				size='lg'
				endIcon={<AntDesign name='plus' size={24} color='white' />}
				marginTop={100}
				colorScheme='teal'
				onPress={pickDocument}>
				Upload Resume
			</Button>
		</Box>
	);
};
