import React from 'react';
import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "../register/StyledRegister";
import { useState } from 'react';
import { loginUser } from '../../services/service';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
const [username, setUsername] = useState(""); 
const [password, setPassword] = useState("");
const navigate = useNavigate()
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = await loginUser(username, password);  // Llamamos a la función login
        alert('Login exitoso');
        navigate('/groups')
    } catch (error) {
        alert('Error al iniciar sesión');
    }
};
return (
    <Container>
        <FormWrapper onSubmit={handleSubmit} >
        <Title>Your account</Title>
        <Input type="text"  name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        <Input type="password"  name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
        <LinkStyled>Forgot password?</LinkStyled>
        <Button type="submit">Log In</Button>
        <LinkStyled to="/Register">I don’t have an account</LinkStyled>
        </FormWrapper>
    </Container>
    );
};

export default LoginForm;