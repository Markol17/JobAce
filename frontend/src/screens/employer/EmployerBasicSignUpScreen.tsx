import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config";
import {
	Box,
	Button,
	FormControl,
	Heading,
	HStack,
	Input,
	VStack,
	WarningOutlineIcon,
	Text,
	Link,
	ScrollView,
	useToast,
	Select,
	CheckIcon,
	Typeahead,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { employerSignUpSchema } from "../../utils";
import { Formik } from "formik";

export const EmployerBasicSignUpScreen = (props: any) => {
	const navigation = useNavigation();
	const toast = useToast();

	const handleSignInRedirection = () => {
		//@ts-ignore
		navigation.navigate("Login");
	};

	const handleBack = () => {
		navigation.goBack();
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
							{"Employer "}
						</Heading>
						<Heading
							size='lg'
							justifyContent='space-between'
							color='teal.400'
							fontWeight='extrabold'
							fontFamily='Comfortaa'>
							Sign Up
						</Heading>
					</Box>
				</Box>
				<Box h='100%' flex={1}>
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							email: "",
							password: "",
							confirmPassword: "",
							organization: "",
						}}
						validationSchema={employerSignUpSchema}
						onSubmit={async (values) => {
							const user = await auth.createUserWithEmailAndPassword(values.email, values.password).catch((error) => {
								toast.show({
									title: "Sign up failed",
									status: "error",
									description: error.message,
									duration: 3000,
								});
							});
							if (user) {
								toast.show({
									title: "Signed up successfully",
									status: "success",
									description: "Welcome to Shigoto!",
									duration: 3000,
								});
							}
							console.log(user);
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
								<FormControl isRequired isInvalid={!!errors.firstName}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										First Name
									</FormControl.Label>
									<Input
										placeholder={"First Name"}
										size='xl'
										onChangeText={handleChange("firstName")}
										onBlur={handleBlur("firstName")}
										value={values.firstName}
										color='white'
										variant='filled'
										backgroundColor='#1e2530'
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
								<FormControl isRequired isInvalid={!!errors.lastName}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Last Name
									</FormControl.Label>
									<Input
										placeholder={"Last Name"}
										size='xl'
										onChangeText={handleChange("lastName")}
										onBlur={handleBlur("lastName")}
										value={values.lastName}
										color='white'
										variant='filled'
										backgroundColor='#1e2530'
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
										{errors.lastName}
									</FormControl.ErrorMessage>
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.email}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Email
									</FormControl.Label>
									<Input
										placeholder={"Email"}
										size='xl'
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
										color='white'
										variant='filled'
										backgroundColor='#1e2530'
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
										{errors.email}
									</FormControl.ErrorMessage>
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.organization}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Organization Code
									</FormControl.Label>
									<Input
										placeholder={"Organization Code"}
										size='xl'
										onChangeText={handleChange("organization")}
										onBlur={handleBlur("organization")}
										value={values.organization}
										color='white'
										variant='filled'
										backgroundColor='#1e2530'
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
										{errors.organization}
									</FormControl.ErrorMessage>
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.password}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Password
									</FormControl.Label>
									<Input
										type='password'
										placeholder={"Password"}
										size='xl'
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
										value={values.password}
										color='white'
										variant='filled'
										backgroundColor='#1e2530'
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
										{errors.password}
									</FormControl.ErrorMessage>
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.confirmPassword}>
									<FormControl.Label
										_text={{
											color: "white",
											fontSize: "lg",
											fontWeight: "semibold",
										}}>
										Confirm Password
									</FormControl.Label>
									<Input
										type='password'
										placeholder={"Confirm Password"}
										size='xl'
										onChangeText={handleChange("confirmPassword")}
										onBlur={handleBlur("confirmPassword")}
										value={values.confirmPassword}
										color='white'
										variant='filled'
										backgroundColor='#1e2530'
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
										{errors.confirmPassword}
									</FormControl.ErrorMessage>
								</FormControl>
								<Button
									mt='4'
									isLoading={isSubmitting}
									isLoadingText='Submitting'
									onPress={handleSubmit}
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
									colorScheme='teal'
									_text={{
										color: "white",
										fontWeight: "bold",
										fontSize: "md",
									}}>
									Sign Up
								</Button>
								<HStack mt='6' justifyContent='center'>
									<Text fontSize='md' color='white' fontWeight='bold'>
										I already have an account.{" "}
									</Text>
									<Text underline color='teal.400' fontWeight='bold' fontSize='md' onPress={handleSignInRedirection}>
										Sign In
									</Text>
								</HStack>
							</VStack>
						)}
					</Formik>
				</Box>
			</Box>
		</ScrollView>
	);
};
