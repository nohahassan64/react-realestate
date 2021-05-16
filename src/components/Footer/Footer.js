import React from 'react'
import { Container, SecColumn, SecRow } from '../globalStyle'
import { SectionFooter,
     BoxInfo,
    BoxIcons, 
    SocialIconLink,
    FooterLinksBox,
    FooterLinkTitle,
    FooterLinksItems,
    FooterLink
} from './FooterStyle'
import { FaFacebook , FaYoutube , FaInstagram , FaLinkedinIn , FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <SectionFooter>
            <Container>
                <SecRow>
                    <SecColumn>
                        <BoxInfo>
                            <h1>Let's find your Dream Home</h1>
                            <BoxIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedinIn />
                                </SocialIconLink> 
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>           
                            </BoxIcons>
                        </BoxInfo>
                    </SecColumn>
                    <SecColumn>
                        <FooterLinksBox>
                            <FooterLinksItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">FAQ</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Questions</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinkTitle>Offices</FooterLinkTitle>
                                <FooterLink to="/">United States</FooterLink>
                                <FooterLink to="/">Europe</FooterLink>
                                <FooterLink to="/">Canada</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksBox>
                    </SecColumn>
                </SecRow>
            </Container>    
        </SectionFooter>
    )
}

export default Footer
