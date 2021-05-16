import styled , { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
    height: 70px;
    color: #fff;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${({scrollNav}) => scrollNav ? "#ff454c" : "transparent"};
`
const NavLink = css`
    display: flex;
    justify-content: center;
    color: #fff;
    padding: 1rem 1.5rem;
    text-decoration: none;
    cursor: pointer;
`
export const Logo = styled(Link)`
    font-style: italic;
    font-size: 2rem;
    font-weight: bold;
    ${NavLink}
`
export const MenuBar = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        color: #fff;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-size: 2rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavMenuLink = styled(Link)`
    ${NavLink}
`
export const BtnWrap = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`