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
	Text,
	IconButton,
	Checkbox,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FieldArray, Form, Formik } from "formik";
import { BriefCase } from "../../svgs";
import { Dimensions } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { jobExperienceSchema } from "../../utils";
import { DatePicker } from "../../components";
import { auth } from "../../config";

export const JobSeekerJobExperiencesScreen = (props: any) => {
	const [show, setShow] = useState(false);
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};

	const handleNext = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	// const onChange = (_event: any, selectedDate: any) => {
	// 	const currentDate = selectedDate || date;
	// 	setShow(Platform.OS === "ios");
	// 	setDate(currentDate);
	// };

	const showCalendar = () => {
		setShow(true);
	};

	const screenHeight = Dimensions.get("window").height;

	return (
		<ScrollView bg='#283242'>
			<Box safeArea flex={1} p='2' py='8' w='90%' mx='auto' minHeight={screenHeight}>
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
						validationSchema={jobExperienceSchema}
						onSubmit={async (values) => {
							auth.signInWithEmailAndPassword("test@test.com", "abcdef");
						}}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							isSubmitting,
							setFieldValue,
						}: {
							handleChange: any;
							handleBlur: any;
							handleSubmit: any;
							values: any;
							errors: any;
							isSubmitting: any;
							setFieldValue: () => void;
						}) => (
							<VStack space={3} mt='5' h='100%'>
								{console.log(errors)}
								<FieldArray
									name='experiences'
									render={(arrayHelpers) => (
										<Box h='100%' justifyContent='space-between'>
											{values.experiences && values.experiences.length > 0 ? (
												values.experiences.map((_experience: any, index: number) => (
													<Box key={index}>
														<VStack key={index} space={3} mt='5'>
															<Box flexDirection='row' justifyContent='space-between'>
																<Box flexDirection='row'>
																	<Text fontSize='xl' color='white' fontWeight='bold'>
																		Job Experience
																	</Text>
																	<Text fontSize='xl' color='teal.500' fontWeight='bold'>{` #${index + 1}`}</Text>
																</Box>
																<IconButton
																	variant='ghost'
																	colorScheme='teal'
																	onPress={() => arrayHelpers.remove(index)}
																	_icon={{
																		as: AntDesign,
																		name: "delete",
																		size: 6,
																		color: "error.600",
																	}}
																/>
															</Box>
															<FormControl isInvalid={errors && errors.experiences && errors.experiences[index].title}>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	Title
																</FormControl.Label>
																<Input
																	selectionColor={"white"}
																	variant='filled'
																	backgroundColor='#1e2530'
																	placeholder={"Title"}
																	size='xl'
																	onChangeText={handleChange(`experiences.${index}.title`)}
																	onBlur={handleBlur(`experiences.${index}.title`)}
																	value={values.experiences[index].title}
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
																	{errors && errors.experiences && errors.experiences[index].title}
																</FormControl.ErrorMessage>
															</FormControl>
															<FormControl
																isInvalid={errors && errors.experiences && errors.experiences[index].companyName}>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	Company Name
																</FormControl.Label>
																<Input
																	selectionColor={"white"}
																	variant='filled'
																	backgroundColor='#1e2530'
																	placeholder={"Company Name"}
																	size='xl'
																	onChangeText={handleChange(`experiences.${index}.companyName`)}
																	onBlur={handleBlur(`experiences.${index}.companyName`)}
																	value={values.experiences[index].companyName}
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
																	{errors && errors.experiences && errors.experiences[index].companyName}
																</FormControl.ErrorMessage>
															</FormControl>
															<FormControl>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	Employment Type
																</FormControl.Label>
																<Input
																	selectionColor={"white"}
																	variant='filled'
																	backgroundColor='#1e2530'
																	placeholder={"Employment Type"}
																	size='xl'
																	onChangeText={handleChange(`experiences.${index}.employmentType`)}
																	onBlur={handleBlur(`experiences.${index}.employmentType`)}
																	value={values.experiences[index].employmentType}
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
															</FormControl>
															<FormControl>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	Location
																</FormControl.Label>
																<Input
																	selectionColor={"white"}
																	variant='filled'
																	backgroundColor='#1e2530'
																	placeholder={"Location"}
																	size='xl'
																	onChangeText={handleChange(`experiences.${index}.location`)}
																	onBlur={handleBlur(`experiences.${index}.location`)}
																	value={values.experiences[index].location}
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
															</FormControl>
															<FormControl
																isInvalid={errors && errors.experiences && errors.experiences[index].startDate}>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	Start Date
																</FormControl.Label>
																<DatePicker
																	values={values}
																	fieldName='startDate'
																	name='start date'
																	setFieldValue={setFieldValue}
																	index={index}
																/>
																<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
																	{errors && errors.experiences && errors.experiences[index].startDate}
																</FormControl.ErrorMessage>
															</FormControl>
															<FormControl
																isInvalid={errors && errors.experiences && errors.experiences[index].endDate}>
																<FormControl.Label
																	_text={{
																		color: "white",
																		fontSize: "lg",
																		fontWeight: "semibold",
																	}}>
																	End Date
																</FormControl.Label>
																<DatePicker
																	values={values}
																	fieldName='endDate'
																	name='end date'
																	setFieldValue={setFieldValue}
																	index={index}
																/>
																<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
																	{errors && errors.experiences && errors.experiences[index].endDate}
																</FormControl.ErrorMessage>
															</FormControl>
															<Checkbox colorScheme='teal' value={""}>
																<Text fontWeight='bold' fontSize='md' marginLeft={3} color='white'>
																	I am currently working in this role
																</Text>
															</Checkbox>
														</VStack>
													</Box>
												))
											) : (
												<Box alignItems='center' justifyContent='center' marginTop={32}>
													<BriefCase />
													<Text color='white' fontSize='lg' fontWeight='bold' marginTop={10}>
														No job experiences yet
													</Text>
													<Text color='gray.300' fontSize='sm' fontWeight='semibold'>
														Add a job experience to complete your profile
													</Text>
												</Box>
											)}
											<Button
												w='100%'
												size='lg'
												p={3}
												marginTop={6}
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
												onPress={() => arrayHelpers.push({})}>
												Add a job experience
											</Button>
											<Button
												bottom={0}
												w='100%'
												size='lg'
												p={3}
												marginTop={6}
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
												colorScheme={values.experiences.length < 1 ? "blueGray" : "teal"}
												onPress={handleSubmit}>
												{values.experiences.length < 1 ? "Skip" : "Next"}
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
