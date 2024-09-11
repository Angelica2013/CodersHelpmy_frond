import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background-color: #5D768C; 
    font-family: 'Arial', sans-serif; 
    color: #333; 
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


export default GlobalStyle;