import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 0;
background-color: #708090;
height: 80vh;
padding-top: 10vh;
`;

export const Title = styled.h1`
font-size: 3.5rem;
font-weight: bold;
color: white;
margin-bottom: 40px;
`;

export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
max-width: 1200px;
`;

export const Box = styled.div`
width: 45%;
text-align: center;
color: white;
`;

export const Subtitle = styled.h2`
font-size: 1.8rem;
font-weight: bold;
margin-bottom: 20px;
`;

export const Description = styled.p`
font-size: 1rem;
color: #e0e0e0;
line-height: 1.5;
`;

export const Divider = styled.div`
width: 1px;
height: 300px;
background-color: #ccc;
`;
