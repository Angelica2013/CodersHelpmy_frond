import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #587e94; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-left: 25px;

  img {
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
  font-size: 20px;
  text-align: center;
  margin-top: auto;

`;

export const LogoContainer = styled.div`
  img {
    height: 80px;
    margin-right: 40px;
    margin-top: auto;
  }
`;
