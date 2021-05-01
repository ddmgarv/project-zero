import React from "react";
// import { auth, createUserProfileDocument } from "@/firebase";
import loginFields from "./fields";

const Login = () => {
	const handleSubmit = (): void => {};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{loginFields.map((field) => (
					<input type={field.type} id={field.id} name={field.name} />
				))}
				<button type="submit">Sign in</button>
			</form>
		</div>
	);
};

export default Login;
