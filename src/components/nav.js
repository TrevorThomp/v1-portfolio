import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
import { Link, animateScroll as scroll } from "react-scroll";
const { colors, fontSizes, borderRadius, secondColors, font } = theme;

const StyledNav = styled.nav`
	display: flex;

	@media (max-width: 728px) {
		display: none;
	}
`;

const StyledList = styled.ol`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	list-style: none;
	font-size: ${fontSizes.sm};
`;

const StyledListItem = styled.li`
	color: ${secondColors.slateWhite};
	margin: 0 10px;
`;

const StyledListLink = styled(Link)`
	color: #d3d3d3;
	padding: 10px;
	text-decoration: none;
	transition: ${theme.transition};

	&:hover {
		cursor: pointer;
		color: ${secondColors.teal};
	}
`;

const StyledResumeButton = styled.a`
	color: #d3d3d3;
	padding: 5px 10px;
	border: 1px solid ${secondColors.teal};
	font-size: ${fontSizes.sm};
	border-radius: ${borderRadius};
	background-color: transparent;
	transition: ${theme.transition};
	outline: none;
	text-decoration: none;
	&:hover {
		cursor: pointer;
		background-color: ${secondColors.greenTeal};
	}

	&:after {
		display: none !important;
	}
`;

const Nav = ({ navLinks }) => {
	return (
		<StyledNav>
			<StyledList>
				{navLinks &&
					navLinks.map(({ name, url }, i) => (
						<StyledListItem key={i}>
							<StyledListLink
								activeClass="active"
								to={url}
								spy={true}
								smooth={true}
								offset={-150}
								duration={1000}
							>
								{name}
							</StyledListLink>
						</StyledListItem>
					))}
				<StyledResumeButton
					href={`trevorResume.pdf`}
					target="_blank"
					rel="nofollow noopener noreferrer"
				>
					Resume
				</StyledResumeButton>
			</StyledList>
		</StyledNav>
	);
};

export default Nav;
