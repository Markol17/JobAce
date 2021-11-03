import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
});

export const signUpSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
	confirmPassword: Yup.string().when("password", {
		is: (val: [any]) => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
	}),
});
