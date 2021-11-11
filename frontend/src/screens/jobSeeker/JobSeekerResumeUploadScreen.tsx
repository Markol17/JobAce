import React, { useEffect, useState } from "react";
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
import * as DocumentPicker from "expo-document-picker";

export const JobSeekerResumeUploadScreen = (props: any) => {
	const [resume, setResume] = useState<any>(null);
	const navigation = useNavigation();
	const toast = useToast();

	const pickDocument = async () => {
		setResume(await DocumentPicker.getDocumentAsync({ type: "application/pdf" }));
	};

	const handleResumeDelete = () => {
		setResume(null);
		toast.show({
			title: "Resume deleted successfully",
			status: "success",
			duration: 3000,
		});
	};

	useEffect(() => {
		if (resume != null && resume && resume.type != "cancel") {
			toast.show({
				title: "Resume uploaded successfully",
				status: "success",
				description: resume.name,
				duration: 3000,
			});
			console.log(resume);
		}
	}, [resume]);

	const handleBack = () => {
		navigation.goBack();
	};

	const handleNext = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	return (
		// check: https://docs.expo.dev/versions/latest/sdk/document-picker/ for iOS support
		// check https://snack.expo.dev/@ritam/document-picker for implementation example
		<Box bg='#283242' h='100%'>
			<Box safeArea flex={1} p='2' py='8' w='90%' mx='auto'>
				<Box alignItems='center' justifyContent='space-between' flexDirection='row'>
					<Button variant='ghost' colorScheme='teal' onPress={handleBack} marginRight={4}>
						<AntDesign name='back' size={28} color='white' />
					</Button>
					<Box flexDirection='row'>
						<Heading
							size='lg'
							justifyContent='space-between'
							color='white'
							fontWeight='extrabold'
							fontFamily='Comfortaa'>
							{"Upload your "}
						</Heading>
						<Heading
							size='lg'
							justifyContent='space-between'
							color='teal.400'
							fontWeight='extrabold'
							fontFamily='Comfortaa'>
							Resume
						</Heading>
					</Box>
				</Box>
				<Box h='100%' justifyContent='center' alignItems='center'>
					{resume && resume.name && (
						<Box flexDirection='row' justifyContent='space-between' w='100%'>
							<Text fontSize={20} color='white' fontWeight='extrabold' fontFamily='Comfortaa'>
								{resume && resume.name}
							</Text>
							<Button variant='ghost' colorScheme='teal' onPress={handleResumeDelete}>
								<AntDesign name='delete' size={24} color='white' />
							</Button>
						</Box>
					)}
					<Button
						w='100%'
						size='lg'
						endIcon={<AntDesign name='plus' size={24} color='white' />}
						marginTop={100}
						p={3}
						style={{
							borderRadius: 30,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 3,
							},
							shadowOpacity: 0.29,
							shadowRadius: 4.65,

							elevation: 7,
						}}
						_text={{
							color: "white",
							fontWeight: "bold",
							fontSize: "md",
						}}
						colorScheme='teal'
						onPress={pickDocument}>
						Upload Resume
					</Button>
					<Button
						w='100%'
						size='lg'
						marginTop={100}
						p={3}
						style={{
							borderRadius: 30,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 3,
							},
							shadowOpacity: 0.29,
							shadowRadius: 4.65,

							elevation: 7,
						}}
						_text={{
							color: "white",
							fontWeight: "bold",
							fontSize: "md",
						}}
						colorScheme='teal'
						onPress={handleNext}>
						Next
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
