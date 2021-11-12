import { auth, database } from "../../config";
import { roles } from "../../utils";
export async function jobSeekerRegister(credentials: {
	email: string;
	password: string;
	lastName: string;
	firstName: string;
}): Promise<string | null> {
	const { email, password, lastName, firstName } = credentials;
	try {
		await auth.createUserWithEmailAndPassword(email, password);
		const currentUser = auth.currentUser;

		await database.collection("users").doc(currentUser!.uid).set({
			lastName: lastName,
			firstName: firstName,
			role: roles.jobSeeker,
		});
		return null;
	} catch (error: any) {
		return error.message;
	}
}

export async function login(credentials: { email: string; password: string }) {
	const { email, password } = credentials;
	try {
		await auth.signInWithEmailAndPassword(email, password);
	} catch (err) {
		console.log(err);
	}
}

export async function getSkills() {
	const skills = await database.collection("skills").get();
	return skills.docs.map((doc) => doc.data());
}
