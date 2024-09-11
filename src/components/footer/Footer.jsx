import React from "react";
import { FooterContainer, SocialIcons, CopyrightText, LogoContainer } from "./styledFooter";
import Logo from "../../assets/img/logo.png";  

const Footer = () => {
return (
    <FooterContainer>
    <SocialIcons>
    </SocialIcons>
    <CopyrightText>
        © 2024 Victory. All rights reserved. <br /> moreinfo@victory.com
    </CopyrightText>
<LogoContainer>
<img src={Logo} alt="Victory Logo"></img>
</LogoContainer>
</FooterContainer>
);
};

export default Footer;
