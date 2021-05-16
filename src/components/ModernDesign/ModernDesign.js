import React from 'react'
import ImageDesign from '../../images/news/03.jpg'
import { Button, Container, SecColumn, SecRow, Section } from '../globalStyle'
import { BoxInfo , Image } from './ModernDesignStyle'

const ModernDesign = () => {
    return (
        <Section>
            <Container>
                <SecRow>
                    <SecColumn>
                        <Image src={ImageDesign} alt='Home' />
                    </SecColumn>
                    <SecColumn>
                        <BoxInfo>
                            <h3>Modern Designs</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet blanditiis sunt neque provident nisi molestias et enim
                            dolores eius ullam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet blanditiis sunt neque provident nisi molestias et enim
                            dolores eius ullam.</p>
                            <Button to='/' primary='true'>View Homes</Button>
                        </BoxInfo>
                    </SecColumn>
                </SecRow>
            </Container>
            
        </Section>
    )
}

export default ModernDesign
