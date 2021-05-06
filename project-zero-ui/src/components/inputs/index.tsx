import styled from "styled-components";
import { colors, borders } from "@/app/theme";

type Color = "primary" | "secondary";

export const TextField = styled.input.attrs(({ type = "text" }) => ({
	type,
}))`
	width: 100%;
	height: 40px;
	border-radius: ${borders.buttonRadius};
	padding-left: 15px;
	outline: none;
	border: 1px solid ${colors.magentaPrimary};
	&:focus {
		border: 1px solid ${colors.purplePrimary};
	}
`;
