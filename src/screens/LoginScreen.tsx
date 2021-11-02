import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, FormControl, Heading, HStack, Input, Link, VStack, Button } from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";

export const LoginScreen = (props: any) => {
	const navigation = useNavigation();

	const login = async () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("user info: ", user);
				navigation.navigate("Home");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const loginSchema = Yup.object().shape({
		email: Yup.string().required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	return (
		<Box bg='#1a202c' h='100%'>
			<Box safeArea flex={1} p='2' py='8' w='90%' mx='auto'>
				<Heading size='lg' color='teal.400' fontWeight='bold'>
					Sign in
				</Heading>
				<Box h='100%' flex={1}>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={loginSchema}
						onSubmit={(values) =>
							auth
								.signInWithEmailAndPassword(values.email, values.password)
								.then((userCredential) => {
									const user = userCredential.user;
									console.log("user info: ", user);
									navigation.navigate("Home");
								})
								.catch((error) => {
									const errorCode = error.code;
									const errorMessage = error.message;
								})
						}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
						}: {
							handleChange: any;
							handleBlur: any;
							handleSubmit: any;
							values: any;
						}) => (
							<VStack space={3} mt='5'>
								<FormControl isRequired>
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
										size='lg'
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
									/>
									<FormControl.ErrorMessage>Test</FormControl.ErrorMessage>
								</FormControl>
								<FormControl isRequired>
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
										size='lg'
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
										value={values.password}
									/>
									<Link
										_text={{ fontSize: "sm", fontWeight: "semibold", color: "teal.400" }}
										alignSelf='flex-end'
										mt='1'>
										Forget Password?
									</Link>
								</FormControl>
								<Button mt='4' onPress={handleSubmit} fontWeight='bold' colorScheme='teal' _text={{ color: "white" }}>
									Sign in
								</Button>
								<HStack mt='6' justifyContent='center'>
									<Text fontSize='md' color='white' fontWeight={400}>
										I'm a new user.{" "}
									</Text>
									<Link
										_text={{
											color: "teal.400",
											fontWeight: "medium",
											fontSize: "sm",
										}}
										href='#'>
										Sign Up
									</Link>
								</HStack>
							</VStack>
						)}
					</Formik>
				</Box>
			</Box>
		</Box>
	);
};
