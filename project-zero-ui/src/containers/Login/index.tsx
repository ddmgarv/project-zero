import React from "react";
// import Firebase { signInWithGoogle } from "@/firebase";

import loginFields from "./fields";

const Login = () => {
	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

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
