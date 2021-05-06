import React, { useState } from "react";
import Panel from "@/components/templates/panel";
import Firebase from "@/firebase";
import SignUpForm from "./components/SignUpForm";

interface SignUpData {
	email: string;
	password: string;
	confirmPassword: string;
}

const signUpInitState = {
	email: "",
	password: "",
	confirmPassword: "",
};

const Signup: React.FC = () => {
	const [signUpData, setSignUpData] = useState<SignUpData>(signUpInitState);

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const { password, email, confirmPassword, ...otherData } = signUpData;
		if (password !== confirmPassword) return alert("Passwords are not equal.");
		try {
			const { user } = await Firebase.auth.createUserWithEmailAndPassword(email, password);
		} catch (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == "auth/weak-password") {
				alert("The password is too weak.");
			} else {
				alert(errorMessage);
			}
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = e.target;
		setSignUpData({ ...signUpData, [id]: value });
	};

	return (
		<Panel title="Sign Up">
			<SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} />
		</Panel>
	);
};

export default Signup;
