import styled from "styled-components";
export const CardContainer = styled.div`
    width: 150px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.1);
}
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
`;

export const Title = styled.h3`
    margin-top: 10px;
    font-size: 18px;
    color: #333;
`;
