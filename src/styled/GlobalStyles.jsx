import styled, { createGlobalStyle } from 'styled-components';
import Paz from "../assets/img/meditar.jpeg"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%; 
    width: 100%;
    font-family: 'Arial', sans-serif; 
    color: #333; 
}

body {
    margin: 0;
    padding: 0;
    background-image: url(${Paz});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    position: relative; 
    min-height: 100vh; 
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);  
}

* {
    position: relative; 
    z-index: 2;
}

h1{
font-size: 40px;
font-weight: 800;
line-height: 40px;
color: #fff;
}
p{
font-size: 20px;
line-height: 25px;
color: #fff;
}

`;

export const ContainerAbout = styled.div`

`;


export default GlobalStyle;