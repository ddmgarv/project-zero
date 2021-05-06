import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { TextField } from "@/components/inputs";
import loginFields from "../fields";

interface LoginForm {
	handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginForm> = ({ handleSubmit, handleChange }) => {
	const history = useHistory();
	return (
		<Form onSubmit={handleSubmit}>
			{loginFields.map((field) => (
				<Container>
					<TextField {...field} onChange={handleChange} />
				</Container>
			))}
			<Container>
				<ButtonPrimary type="submit">Sign in</ButtonPrimary>
			</Container>
			<Container>
				<ButtonSecondary type="button" onClick={() => history.push("/signup")}>
					Sign Up
				</ButtonSecondary>
			</Container>
		</Form>
	);
};

export default LoginForm;

const Form = styled.form`
	width: 100%;
`;

const Container = styled.div`
	margin-top: 20px;
	width: inherit;
`;
