import axios from 'axios';

// URL base de tu backend Django
const API_URL = 'http://127.0.0.1:8000/';  // Asegúrate de que esta URL sea correcta

// Función para obtener el token de autenticación (Login)
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}blog/login/`, { username, password });
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        return token;
    } catch (error) {
        console.error('Error en login:', error);
        throw error;
    }
};



// Función para cerrar sesión (Logout)
export const logoutUser = async () => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No se encontró un token');
        
        await axios.post(`${API_URL}blog/logout/`, {}, {
            headers: { 'Authorization': `Token ${token}` }
        });
        localStorage.removeItem('authToken');
    } catch (error) {
        console.error('Error en logout:', error);
        throw error;
    }
};

// Función para crear un comentario
export const createComment = async (postId, content) => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('Usuario no autenticado');
        
        const response = await axios.post(`${API_URL}comments/${postId}/`, { content }, {
            headers: { 'Authorization': `Token ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear comentario:', error);
        throw error;
    }
};
// Función para registrar un nuevo usuario (SignUp)
export const registerUser = async (username, password, email) => {
    try {
        const response = await axios.post(`${API_URL}blog/register/`, {
            username,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al registrar usuario:', error.response ? error.response.data : error.message);
        throw error;
    }
};



// Función para obtener todos los posts
export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}posts/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener posts:', error);
        throw error;
    }
};
