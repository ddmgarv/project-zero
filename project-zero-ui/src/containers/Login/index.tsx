import React, { useState } from "react";
import Panel from "@/components/templates/panel";
import Firebase from "@/firebase";
import LoginForm from "./components/LoginForm";

interface LoginData {
	email: string;
	password: string;
}

const loginInitState = {
	email: "",
	password: "",
};

const Login: React.FC = () => {
	const [loginData, setLoginData] = useState<LoginData>(loginInitState);

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const { password, email } = loginData;
		try {
			await Firebase.auth.signInWithEmailAndPassword(email, password);
			setLoginData(loginInitState);
		} catch (error) {
			console.error(error);
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode === "auth/wrong-password") {
				alert("Wrong password.");
			} else {
				alert(errorMessage);
			}
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = e.target;
		setLoginData({ ...loginData, [id]: value });
	};

	return (
		<Panel title="Log in">
			<LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />
		</Panel>
	);
};

export default Login;
