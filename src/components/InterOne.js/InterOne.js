import React from 'react'
import ImageInter  from '../../images/inter/01.jpg'
import { Button, Container, SecColumn, SecRow, Section } from '../globalStyle'
import { BoxInfo , Image } from './InterOneStyle'

const InterOne = () => {
    return (
        <Section>
            <Container>
                <SecRow>
                    <SecColumn>
                        <BoxInfo>
                            <h3>Explore our beautiful homes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet blanditiis sunt neque provident nisi molestias et enim
                            dolores eius ullam! Libero facilis aspernatur cumque hic similique 
                            pariatur itaque distinctio sapiente.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet blanditiis sunt neque provident nisi molestias et enim
                            dolores eius ullam!</p>
                            <Button to='/' primary='true'>View Homes</Button>
                        </BoxInfo>
                    </SecColumn>
                    <SecColumn>
                        <Image src={ImageInter} alt='Home' />
                    </SecColumn>
                </SecRow>
            </Container>
            
        </Section>
    )
}

export default InterOne
