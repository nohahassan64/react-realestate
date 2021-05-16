import React from 'react'
import ImageInter from '../../images/inter/02.jpg'
import { Button, Container, SecColumn, SecRow } from '../globalStyle'
import { SectionInter , BoxInfo , Image } from './InterTwoStyle'

const InterTwo = () => {
    return (
        <SectionInter>
            <Container>
                <SecRow>
                    <SecColumn>
                        <BoxInfo>
                            <h3>Stunning Interior</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet blanditiis sunt neque provident nisi molestias et enim
                            dolores eius ullam! Libero facilis aspernatur cumque hic similique 
                            pariatur itaque distinctio sapiente.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet blanditiis sunt neque provident nisi molestias et enim
                            dolores eius ullam!</p>
                            <Button to='/'>View Homes</Button>
                        </BoxInfo>
                    </SecColumn>
                    <SecColumn>
                        <Image src={ImageInter} alt='Home' />
                    </SecColumn>
                </SecRow>
            </Container>    
        </SectionInter>
    )
}

export default InterTwo
