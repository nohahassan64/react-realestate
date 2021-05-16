import styled  from 'styled-components'
import { Link } from 'react-router-dom'

export const SlidbarSection = styled.div`
    background: #ff454c;
    color: #fff;
    position: fixed;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: ${({isOpen})=> (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen})=> (isOpen ? '1' : '0')};
    transition: all .5s ease-in-out;
`
export const IconClose = styled.div`
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
export const SlidbarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4 , 60px);
    align-items: center;
`
export const SlidbarMenuLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 1rem 1.5rem;
    text-decoration: none;
    cursor: pointer;
`