import styled from "styled-components";
import { colors, borders } from "@/app/theme";

export const InputBase = styled.input`
	width: 100%;
	height: 40px;
	border-radius: ${borders.buttonRadius};
	padding-left: 15px;
	outline: none;
`;

export const InputPrimary = styled(InputBase)`
	border: 1px solid ${colors.magentaPrimary};
	&:focus {
		border: 1px solid ${colors.purplePrimary};
	}
`;
