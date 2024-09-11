import React, { useState } from 'react';
import { createComment  } from '../../services/useApi'; 


const CommentForm = ({ postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');  // Obtener el token de localStorage
    
        if (!token) {
            alert('Debes estar autenticado para comentar');
            return;
        }
    
        try {
            const comment = await createComment(postId, content, token);  // Crear comentario
            alert('Comentario creado exitosamente');
            setContent('');
        } catch (error) {
            alert('Error al crear el comentario');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escribe tu comentario"
            />
            <button type="submit">Comentar</button>
        </form>
    );
    
};

export default CommentForm;
