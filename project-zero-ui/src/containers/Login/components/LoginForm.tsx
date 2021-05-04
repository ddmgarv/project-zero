import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { InputPrimary } from "@/components/inputs";
import loginFields from "../fields";
import { useHistory } from "react-router";

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
					<InputPrimary {...field} />
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
