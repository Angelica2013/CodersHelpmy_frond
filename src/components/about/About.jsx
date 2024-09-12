import React from 'react';
import { Container, Title, Content, Box, Subtitle, Description, Divider } from './StyledAbout.js';

const About = () => {
return (
    <Container>
    <Title>About us</Title>
    <Content>
        <Box>
        <Subtitle>Community Support Focus</Subtitle>
        <Description>
        At CodersHelpmy, we believe in the power of community. We know that being a programmer is not just about writing lines of code, but also about facing challenges, learning from mistakes, and sometimes dealing with frustration. Our platform is designed to connect programmers of all levels, offering a safe space to share experiences, seek help, and provide advice. Whether you’re just starting or have years of experience, here you will find people ready to support you every step of the way. Join our support network and together, let’s make the journey of development more manageable!
        </Description>
        </Box>
        <Divider />
        <Box>
        <Subtitle>Growth and Collaboration Focus</Subtitle>
        <Description>
        At CodersHelpmy, we are convinced that collaboration is key to any programmer’s growth. That’s why we’ve created a space where developers can share their experiences, talk about their challenges, and offer solutions to others. We know that every problem has a solution when you work together, and on our platform, you’ll find the help you need to keep improving. From debugging issues to sharing tips on best practices, CodersHelpmy is the perfect place to learn, grow, and connect with fellow professionals who, like you, are on the path to mastering the art of development.
        </Description>
        </Box>
    </Content>
    </Container>
);
};

export default About;




