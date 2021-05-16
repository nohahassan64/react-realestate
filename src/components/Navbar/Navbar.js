import React , {useState , useEffect } from 'react'
import { menuaData } from '../../data/MenuData'
import { Button } from '../globalStyle'
import { Nav , Logo , MenuBar , NavMenu , NavMenuLink , BtnWrap } from './NavbarStyle'
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {
    const [scrollNav , setScrollNav ] = useState(false);
    
    const changeNavWhenRoute = () => {
        if(window.location.pathname.length > 1) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    const changeNavWhenScroll = () => {
        if(window.location.pathname.length > 1) {
            setScrollNav(true);
        } else {
            window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
        }
    }
    useEffect( () => {
        window.addEventListener('scroll' , changeNavWhenScroll)
    } , []);
    useEffect( () => {
        window.addEventListener('click' , changeNavWhenRoute)
    } , []);
    return (
        <Nav scrollNav={scrollNav}>
            <Logo to="/">Elxra</Logo>
            <MenuBar onClick={toggle}>
                <FaBars />
            </MenuBar>
            <NavMenu>
                {menuaData.map( (item , index) => (
                    <NavMenuLink key={index} to={item.link}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavMenu>
            <BtnWrap>
                <Button
                 to="/"
                 primary='true'
            
                >Contact Us</Button>
            </BtnWrap>
            
        </Nav>
    )
}

export default Navbar