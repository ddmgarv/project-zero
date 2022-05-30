import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { TextField } from "@/components/inputs";
import { loginFields } from "../fields";

interface LoginFormProps {
	handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ handleSubmit, handleChange }: LoginFormProps) => {
	const navigate = useNavigate();

	return (
		<Form onSubmit={handleSubmit}>
			{loginFields.map((field) => (
				<Container key={field.id}>
					<TextField {...field} onChange={handleChange} />
				</Container>
			))}
			<Container>
				<ButtonPrimary type="submit">Log in</ButtonPrimary>
			</Container>
			<Container>
				<ButtonSecondary type="button" onClick={() => navigate("/signup", { replace: true })}>
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
