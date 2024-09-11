import styled from "styled-components";
import Juntos  from "../../assets/img/devJuntos.jpg";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 20px 50px;
background-image: url(${Juntos});
background-size: cover;
background-position: center;
height: 600px; 
position: relative;
z-index: 1;
@media (max-width: 768px) {
    width: 100vh;
}
`;

export const Logo = styled.div`
img {
    height: 80px;
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
background-color: #007BFF;
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
font-size: 48px;  
text-align: center;
color: white; 
margin-bottom: 0;
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%); 
z-index: 2;
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%; 
z-index: 2;
text-align: center;
`;
