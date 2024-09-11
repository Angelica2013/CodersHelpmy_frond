import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #587e94;  /* Color de fondo del footer */
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  a {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

export const CopyrightText = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const LogoContainer = styled.div`
  img {
    height: 50px;  /* Ajustar tamaño del logo */
  }
`;
