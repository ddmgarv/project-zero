import React from "react";
import styled from "styled-components";
import { colors, borders } from "@/app/theme";

interface PanelProps {
	children: JSX.Element;
	title: string;
}

const Panel: React.FC<PanelProps> = ({ children, title }) => {
	return (
		<Container>
			<Content>
				<Title>Project Zero</Title>
				<SectionTitle>{title}</SectionTitle>
				{children}
			</Content>
		</Container>
	);
};

export default Panel;

const Container = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(
		to bottom right,
		${colors.purplePrimary},
		${colors.purpleSecondary},
		${colors.purpleTertiary},
		${colors.magentaPrimary},
		${colors.magentaSecondary}
	);
`;

const Content = styled.div`
	width: 350px;
	height: auto;
	background-color: ${colors.white};
	border-radius: ${borders.containerRadius};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
`;

const Title = styled.h1`
	color: ${colors.magentaPrimary};
	margin: 0 0 10px 0;
`;

const SectionTitle = styled.h2`
	color: ${colors.purpleSecondary};
	margin: 20px 0 0 0;
`;
