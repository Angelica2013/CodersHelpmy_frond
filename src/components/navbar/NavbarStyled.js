import styled from "styled-components";
import Juntos  from "../../assets/img/backgroundApp.webp";
import { Link } from "react-router-dom";


export const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 20px 50px;
background-image: url(${Juntos});
background-color: rgba(0,0,0, 1);
background-position: center;
background-size: cover;
height: 100vh;
z-index: 1;
@media (max-width: 768px) {
    width: 100vh;
}
`;

export const Logo = styled.div`
img {
    height: 80px;
    z-index: 4;
}
`;

export const NavLinks = styled.ul`
display: flex;
justify-content: end;
list-style: none;
margin-top: 40px;
flex: 1; 

li {
    margin: 0 1rem;

    a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;

    &:hover {
        color: #007BFF;
    }
    }
}
`;

export const LoginButtonContainer = styled.div`
position: relative;
display: inline-block;
`;

export const LoginButton = styled(Link)`
padding: 0.75rem 1.5rem;
font-size: 1rem;
color: #fff;
background-color: #1A73E8;
border: none;
border-radius: 20px;
cursor: pointer;
outline: none;
display: flex;
align-items: center;
margin-left: 20px;

&:hover {
    background-color: #0056b3;
}
`;


export const Title = styled.h1`
font-size: 35px;
color: #fff;
margin: 0; 
z-index: 2;
white-space: nowrap;

`;

export const ContentWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
text-align: center;
`;
