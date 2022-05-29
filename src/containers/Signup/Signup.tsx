import React, { useState } from "react";
import Panel from "@/components/templates/panel";
import Firebase from "@/firebase";
import { SignUpData } from "@/@types";
import SignupForm from "./components/SignupForm";

const signUpInitState = {
	email: "",
	password: "",
	confirmPassword: "",
	firstName: "",
	lastName: "",
	address: "",
};

export const Signup = () => {
	const [signUpData, setSignUpData] = useState<SignUpData>(signUpInitState);

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const { password, confirmPassword, ...data } = signUpData;
		if (password !== confirmPassword) return alert("Passwords are not equal.");
		try {
			await Firebase.createUserProfile({ ...data, password });
		} catch (error: any) {
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
		setSignUpData((data) => ({ ...data, [id]: value }));
	};

	return (
		<Panel title="Sign Up">
			<SignupForm handleSubmit={handleSubmit} handleChange={handleChange} />
		</Panel>
	);
};
