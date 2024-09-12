import React from "react";
import { FooterContainer, SocialIcons, CopyrightText, LogoContainer } from "./styledFooter";
import Logo from "../../assets/img/logo.png";  
import Facebook from "../../assets/icons/icons8-facebook-50.png";
import Imstagram from "../../assets/icons/icons8-instagram-50.png";
import Youtube from "../../assets/icons/icons8-youtube-50.png"
import Linkedin from "../../assets/icons/icons8-linkedin-50.png"



const Footer = () => {
return (
    <FooterContainer>
    <SocialIcons>
    <img src={Facebook}></img>
    <img src={Imstagram}></img>
    <img src={Youtube}></img>
    <img src={Linkedin}></img>
    </SocialIcons>
    <CopyrightText>
        © 2024 CodersHelpmy. All rights reserved. <br /> moreinfo@CodersHelpmy.com
    </CopyrightText>
<LogoContainer>
<img src={Logo} alt="Victory Logo"></img>
</LogoContainer>
</FooterContainer>
);
};

export default Footer;
