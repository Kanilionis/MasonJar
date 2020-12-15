import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocailMediaWrap,
    FooterLinksWrapper,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    // NavLogoImg
} from "./FooterElements"

import {FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
    return (
        
        <div>

            <FooterContainer id="Footer">
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Meet the Developers</FooterLinkTitle>
                                <FooterLink to="/https://www.linkedin.com/in/katie-anilionis-4720258a/">Katie Anilionis</FooterLink>
                                <FooterLink to="/https://www.linkedin.com/in/nora-curcio-578b21184/">Nora Curcio</FooterLink>
                                <FooterLink to="/https://www.linkedin.com/in/danakuglin/">Dana Kuglin </FooterLink>
                                
                            </FooterLinkItems>
                      
                            <SocailMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                            {/* <NavLogoImg src={Logo} alt="bear-logo"/> */}
                            </SocialLogo>
                            <WebsiteRights>Shake It Up © 2020 </WebsiteRights>
                            <SocialIcons>
                            
                            <SocialIconLink href='/https://github.com/Kanilionis/MasonJar' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            
                            </SocialIcons>
                        

                            </SocailMediaWrap>
                    
                            <FooterLinkItems>
                                <FooterLinkTitle> Meet the Developers</FooterLinkTitle>
                                <FooterLink to="/">Tessa Pierce</FooterLink>
                                <FooterLink to="/https://www.linkedin.com/in/tesssapierce/">Claire Bohlen</FooterLink>
                                <FooterLink to="/https://www.linkedin.com/in/claire-bohlen-63a4b5119/"></FooterLink>
                                
                                
                            </FooterLinkItems>
                            </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
                            
            </FooterContainer>
            
        </div>
    )
}

export default Footer;