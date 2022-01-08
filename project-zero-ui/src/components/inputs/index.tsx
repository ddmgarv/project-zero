import styled from "styled-components";
import { colors } from "@/app/theme";

export const TextField = styled.input.attrs(({ type = "text" }) => ({
	type,
}))`
	width: 100%;
	height: 40px;
	padding-left: 10px;
	outline: none;
	border: 1px solid ${colors.magentaPrimary};
	border-right: none;
	border-left: none;
	border-top: none;
	&:focus {
		border-bottom: 1px solid ${colors.purplePrimary};
	}
`;
