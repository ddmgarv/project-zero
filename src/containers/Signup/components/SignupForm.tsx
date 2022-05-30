import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { TextField } from "@/components/inputs";
import { signupFields } from "../fields";

interface SignupFormProps {
	handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignupForm = ({ handleSubmit, handleChange }: SignupFormProps) => {
	const navigate = useNavigate();
	return (
		<Form onSubmit={handleSubmit}>
			{signupFields.map((field) => (
				<Container key={field.id}>
					<TextField {...field} onChange={handleChange} />
				</Container>
			))}
			<Container>
				<ButtonPrimary type="submit">Submit</ButtonPrimary>
			</Container>
			<Container>
				<ButtonSecondary type="button" onClick={() => navigate("/", { replace: true })}>
					Log in
				</ButtonSecondary>
			</Container>
		</Form>
	);
};

export default SignupForm;

const Form = styled.form`
	width: 100%;
`;

const Container = styled.div`
	margin-top: 20px;
	width: inherit;
`;
