import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	Box,
	Heading,
	Button,
	useToast,
	VStack,
	FormControl,
	Input,
	WarningOutlineIcon,
	ScrollView,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FieldArray, Form, Formik } from "formik";

export const JobSeekerJobExperiencesScreen = (props: any) => {
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};

	const handleNext = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	return (
		<ScrollView bg='#283242'>
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
							{"Job "}
						</Heading>
						<Heading
							size='lg'
							justifyContent='space-between'
							color='teal.400'
							fontWeight='extrabold'
							fontFamily='Comfortaa'>
							Experiences
						</Heading>
					</Box>
				</Box>
				<Box h='100%' flex={1}>
					<Formik
						initialValues={{ experiences: [] }}
						onSubmit={async (values) => {
							console.log(values);
						}}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							isSubmitting,
						}: {
							handleChange: any;
							handleBlur: any;
							handleSubmit: any;
							values: any;
							errors: any;
							isSubmitting: any;
						}) => (
							<VStack space={3} mt='5'>
								<FieldArray
									name='experiences'
									render={(arrayHelpers) => (
										<Box>
											{values.experiences && values.experiences.length > 0 ? (
												values.experiences.map((_experience: any, index: number) => (
													<Box>
														<VStack key={index} space={3} mt='5'>
															<FormControl isRequired isInvalid={!!errors.firstName}>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	Title
																</FormControl.Label>
																<Input
																	variant='filled'
																	backgroundColor='#1e2530'
																	placeholder={"First Name"}
																	size='xl'
																	onChangeText={handleChange("firstName")}
																	onBlur={handleBlur("firstName")}
																	value={values.firstName}
																	color='white'
																	style={{
																		borderRadius: 10,
																		shadowColor: "#000",
																		shadowOffset: {
																			width: 0,
																			height: 3,
																		},
																		shadowOpacity: 0.29,
																		shadowRadius: 4.65,

																		elevation: 7,
																	}}
																	_focus={{
																		borderColor: "teal.400",
																	}}
																/>
																<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
																	{errors.firstName}
																</FormControl.ErrorMessage>
															</FormControl>
															<Button onPress={() => arrayHelpers.remove(index)}>Remove this job experience</Button>
														</VStack>
														<Button onPress={() => arrayHelpers.push("")}>Add a job experience</Button>
													</Box>
												))
											) : (
												<Button onPress={() => arrayHelpers.push("")}>Add a job experience</Button>
											)}
											<Button
												bottom={0}
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
												onPress={handleSubmit}>
												Next
											</Button>
										</Box>
									)}
								/>
							</VStack>
						)}
					</Formik>
				</Box>
			</Box>
		</ScrollView>
	);
};
