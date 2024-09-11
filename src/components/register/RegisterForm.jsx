import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "./StyledRegister.js";
import { useState } from 'react';
import { registerUser } from "../../services/useApi.jsx";


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Llamamos a la función de registro del API
            const response = await registerUser(
                formData.username,
                formData.email,
                formData.password
            );
            console.log("Usuario registrado:", response);
            setMessage("¡Usuario registrado con éxito!"); 
        } catch (error) {
            console.error("Error registrar el usuario:", error);
            setMessage("Error al registrar usuario. Inténtalo de nuevo.");  // Mostrar mensaje de error
        }
    };


return (
<Container>
<FormWrapper onSubmit={handleSubmit}>
<Title>Create your account</Title>
<Input type="text" name="username" value={formData.username}
onChange={handleChange} placeholder="Username"/>
<Input type="email" name="email" value={formData.email}
onChange={handleChange} placeholder="Email Address"/>
<Input type="password" name="password" value={formData.password}
onChange={handleChange} placeholder="Password"/>
<Button type="submit">Sign Up</Button>
{message && <p>{message}</p>}
<LinkStyled to="/login">Already have an account? Log In</LinkStyled>
</FormWrapper>
</Container>
    );
};

export default RegisterForm;