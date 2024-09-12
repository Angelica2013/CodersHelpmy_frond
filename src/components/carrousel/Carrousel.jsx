import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { CarouselContainer, CarouselInner } from './StyledCarrousel';
import phpLogo from '../../assets/icons/icons8-php-64.png';
import pythonLogo from '../../assets/icons/icons8-python-94.png';
import reactLogo from '../../assets/icons/icons8-react-100.png';
import jsLogo from '../../assets/icons/icons8-html-48.png';
import postgresLogo from '../../assets/icons/icons8-postgres-48.png';
import javaLogo from '../../assets/icons/icons8-java-94.png';

const technologyData = [
    { id: 1, name: "PHP", logo: phpLogo },
    { id: 2, name: "Python", logo: pythonLogo },
    { id: 3, name: "React", logo: reactLogo },
    { id: 4, name: "Html", logo: jsLogo },
    { id: 5, name: "Postgres", logo: postgresLogo },
    { id: 6, name: "Java", logo: javaLogo }
];

const Carrousel = () => {
    const [technologies, setTechnologies] = useState(technologyData);

    useEffect(() => {
        const interval = setInterval(() => {
            setTechnologies((prevTech) => {
                if (prevTech.length === 0) return prevTech;

                const firstElement = prevTech[0]; 
                return [...prevTech.slice(1), firstElement]; 
            });
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <CarouselContainer>
            <CarouselInner>
                {technologies.map((tech) => (
                    <Card key={tech.id} titulo={tech.name} image={tech.logo} />
                ))}
            </CarouselInner>
        </CarouselContainer>
    );
};

export default Carrousel;
