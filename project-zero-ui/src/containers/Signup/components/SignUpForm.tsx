import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { TextField } from "@/components/inputs";
import signUpFields from "../fields";

interface SignUpForm {
	handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FC<SignUpForm> = ({ handleSubmit, handleChange }) => {
	const history = useHistory();

	return (
		<Form onSubmit={handleSubmit}>
			{signUpFields.map((field) => (
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

export default SignUpForm;

const Form = styled.form`
	width: 100%;
`;

const Container = styled.div`
	margin-top: 20px;
	width: inherit;
`;
