import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin-top: 0;
`;


export const FormWrapper = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: 15px;
  margin: 15px;
  margin-bottom: 30px;
  border-radius: 15px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1A73E8;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 35px;
`;

export const LinkStyled = styled(Link)`
  text-align: center;
  display: block;
  color: #33415C;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
