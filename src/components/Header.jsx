import React from "react";
import styled from "styled-components";

const Header = () => {
	return <StyledHeader>Brainstorm's TODOs</StyledHeader>;
};

const StyledHeader = styled.h1`
	text-align: center;
	margin-bottom: 50px;
	padding-top: 30px;
`;

export default Header;
