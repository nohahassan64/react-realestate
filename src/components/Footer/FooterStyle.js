import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SectionFooter = styled.div`
    padding: 4rem 0;
    background: #000d1a;
    color: #fff;
`
export const BoxInfo = styled.div`
    h1 {
        font-size: 6rem;
        @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    }
    
`
export const BoxIcons = styled.div`
    margin: 2rem 0;
`
export const SocialIconLink = styled.a`
    color: #ff454c;
    font-size: 1.5rem;
    padding-right: 1rem;
`;
export const FooterLinksBox = styled.div`
    display: flex;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 160px;
    margin: 16px;
    box-sizing: border-box;
    color: #fff;
@media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;
export const FooterLinkTitle = styled.h2`
    margin-bottom: 1.5rem;
`;
export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 1rem;
    color: #fff;
`;