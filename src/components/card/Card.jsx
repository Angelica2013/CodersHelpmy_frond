import React from 'react';
import { CardContainer, Image, Title } from './StyledCard';

const Card = ({ titulo, image }) => {
    return (
        <CardContainer>
            <Image src={image} alt={titulo} /> 
            <Title>{titulo}</Title> 
        </CardContainer>
    );
};

export default Card;

