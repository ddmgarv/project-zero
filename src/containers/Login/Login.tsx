import React, { useState } from "react";
import Panel from "@/components/templates/panel";
import Firebase from "@/firebase";
import { LoginData } from "@/@types";
import LoginForm from "./components/LoginForm";

const loginInitState: LoginData = {
	email: "",
	password: "",
};

export const Login = () => {
	const [loginData, setLoginData] = useState<LoginData>(loginInitState);

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const { password, email } = loginData;
		try {
			await Firebase.signIn(email, password);
			setLoginData(loginInitState);
		} catch (error: any) {
			console.error(error);
			if (error.code === "auth/wrong-password") {
				alert("Wrong password.");
			} else {
				alert(error.message);
			}
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = e.target;
		setLoginData((data) => ({ ...data, [id]: value }));
	};

	return (
		<Panel title="Log in">
			<LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />
		</Panel>
	);
};
