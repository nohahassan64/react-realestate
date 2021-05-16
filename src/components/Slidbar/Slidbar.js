import React from 'react'
import { menuaData } from '../../data/MenuData'
import { Button } from '../globalStyle'
import { SlidbarSection ,  IconClose , SlidbarMenu , SlidbarMenuLink  } from './SlidbarStyle'
import { FaTimes } from 'react-icons/fa'

const Slidbar = ({ isOpen , toggle}) => {
    return (
        <SlidbarSection isOpen={isOpen}>
            <IconClose onClick={toggle}>
                <FaTimes />
            </IconClose>
            <SlidbarMenu onClick={toggle}>
                {menuaData.map( (item , index) => (
                    <SlidbarMenuLink key={index} to={item.link}>
                        {item.title}
                    </SlidbarMenuLink>
                ))}
                <div>
                    <Button 
                        to="/"
                        primary='true'
                                   
                    >
                        Contact Us
                    </Button>
                </div> 
            </SlidbarMenu> 
        </SlidbarSection>
    )
}

export default Slidbar
