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
                                <FooterLink to="/">Katie Anilionis</FooterLink>
                                <FooterLink to="/">Nora Curcio</FooterLink>
                                <FooterLink to="/">Dana Kuglin </FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocailMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        {/* <NavLogoImg src={Logo} alt="bear-logo"/> */}
                        </SocialLogo>
                        <WebsiteRights>Shake It © 2020 </WebsiteRights>
                        <SocialIcons>
                            
                            <SocialIconLink href='/' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            
                        </SocialIcons>
                        

                    </SocailMediaWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Meet the Developers</FooterLinkTitle>
                                <FooterLink to="/">Tessa Pierce</FooterLink>
                                <FooterLink to="/">Claire Bohlen</FooterLink>
                                <FooterLink to="/"></FooterLink>
                                
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
                            
            </FooterContainer>
            
        </div>
    )
}

export default Footer;