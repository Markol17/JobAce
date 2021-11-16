import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Heading, Button, useToast, VStack, IconButton } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { ResumeUploaded, UploadResume } from "../../svgs";
import { Dimensions } from "react-native";

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
		navigation.navigate("Skills");
	};

	const screenHeight = Dimensions.get("window").height;

	return (
		<VStack bg='#283242' h='100%' py='8'>
			<Box safeArea flex={1} p='2' w='90%' mx='auto' h={screenHeight} justifyContent='space-between'>
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
				<Box h='100%' py='8' justifyContent='space-between'>
					{resume && resume.name ? (
						<Box alignItems='center' marginTop={32}>
							<ResumeUploaded />
							<Box flexDirection='row' alignItems='center' justifyContent='center' marginTop={10}>
								<Text fontSize='lg' color='white' fontWeight='bold' marginRight={4}>
									{resume && resume.name}
								</Text>
								<IconButton
									variant='ghost'
									colorScheme='teal'
									onPress={handleResumeDelete}
									_icon={{
										as: AntDesign,
										name: "delete",
										size: 6,
										color: "error.600",
									}}
								/>
							</Box>
						</Box>
					) : (
						<Box alignItems='center' marginTop={32}>
							<UploadResume />
							<Text color='white' fontSize='lg' fontWeight='bold' marginTop={10}>
								No resume is uploaded yet
							</Text>
							<Text color='gray.300' fontSize='sm' fontWeight='semibold'>
								Supported files are of type .pdf
							</Text>
						</Box>
					)}
					<Button
						w='100%'
						size='lg'
						endIcon={<AntDesign name='plus' size={26} color='white' />}
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
							fontWeight: "bold",
							fontSize: "md",
						}}
						bg='#1e2530'
						onPress={pickDocument}>
						Upload Resume
					</Button>
					<Button
						isDisabled={!(resume && resume.name)}
						w='100%'
						size='lg'
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
		</VStack>
	);
};
