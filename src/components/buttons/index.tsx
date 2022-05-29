import { colors, borders } from "@/app/theme";
import styled from "styled-components";

export const ButtonBase = styled.button`
	width: 100%;
	height: 40px;
	outline: none;
	border: none;
	color: ${colors.white};
	letter-spacing: 1px;
	font-weight: 700;
	border-radius: ${borders.inputRadius};
	cursor: pointer;
`;

export const ButtonPrimary = styled(ButtonBase)`
	background-color: ${colors.magentaPrimary};
`;

export const ButtonSecondary = styled(ButtonBase)`
	background-color: ${colors.purpleSecondary};
`;
