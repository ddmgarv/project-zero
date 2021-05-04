import React, { useState } from "react";
import Panel from "@/components/templates/panel";
// import Firebase { signInWithGoogle } from "@/firebase";
import LoginForm from "./components/LoginForm";

interface LoginData {
	email: string;
	password: string;
}

const Login = () => {
	const [loginData, setLoginData] = useState<LoginData>({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setLoginData({
			...loginData,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<Panel title="Log in">
			<LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />
		</Panel>
	);
};

export default Login;
