import React from "react";
import { Link } from "react-router-dom";
import logoNuevo from "../../assets/img/logo.png"
import { Nav, Logo, LoginButton, LoginButtonContainer, NavLinks, Title, ContentWrapper } from "./NavbarStyled"

const NavBar = () => {
    return (
    <Nav>
        <Logo>
        <img src={logoNuevo} alt="Logo" />
        </Logo>
        <NavLinks>
        <li><Link to="/" aria-label="Go to Home page" >Home</Link></li>
        <li><Link to="/groups" aria-label="View our services">Groups</Link></li>
        <li>
            <LoginButtonContainer>
            <LoginButton  to="/register">Login/Register</LoginButton>
            </LoginButtonContainer>
        </li>
        </NavLinks>
        <ContentWrapper>
        <Title>"No one understands your challenges as a developer better<br></br>than another developer.  Join our community and find the support you need."</Title>
        </ContentWrapper>
    </Nav>
    );
}

export default NavBar;