import styled from "styled-components";



export const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(93,118,140);
    background: linear-gradient(90deg, rgba(93,118,140,1) 0%, rgba(127,135,159,1) 9%, rgba(172,177,191,1) 19%, rgba(237,237,237,1) 28%, rgba(237,237,237,1) 56%, rgba(127,135,159,1) 79%, rgba(127,135,159,1) 86%, rgba(93,118,140,1) 100%);
    padding: 80px;
`;

export const CarouselInner = styled.div`
    display: flex;
    flex-direction: row;
    transition: transform 0.5s ease-in-out;
`;