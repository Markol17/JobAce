import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
});

export const jobSeekerSignUpSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
	confirmPassword: Yup.string().when("password", {
		is: (val: [any]) => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
	}),
});

export const employerSignUpSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	organization: Yup.string().required("Organization code is required"),
	password: Yup.string().required("Password is required"),
	confirmPassword: Yup.string().when("password", {
		is: (val: [any]) => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
	}),
});

export const jobExperienceSchema = Yup.object({
	experiences: Yup.array().of(
		Yup.object().shape({
			title: Yup.string().required("Job title is required"),
			companyName: Yup.string().required("Company name is required"),
			employmentType: Yup.string(),
			location: Yup.string(),
			startDate: Yup.date().required("Start date is required"),
			endDate: Yup.date().required("End date is required"),
		})
	),
});
