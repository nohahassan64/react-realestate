import React from 'react'
import ImageNewOne from '../../images/news/01.jpg'
import ImageNewTwo from '../../images/news/02.jpg'
import { Button, Container, SecColumn, SecRow, Section } from '../globalStyle'
import { Title, BoxInfo , Image } from './NewHomesStyle'

const NewHomes = () => {
    return (
        <Section>
            <Container>
                <Title>View our newest Homes</Title>
                <SecRow>
                    <SecColumn>
                        <BoxInfo>
                            <Image src={ImageNewOne} alt='Home' />
                            <h3>8 Bed 10 Bath House in Venice, California</h3>
                            <Button
                             to='/'
                           
                             >
                                 View Details
                             </Button>
                        </BoxInfo>
                    </SecColumn>
                    <SecColumn>
                        <BoxInfo>
                            <Image src={ImageNewTwo} className='img-bottom' alt='Home' />
                            <h3>8 Bed 10 Bath House in Miami, Florida</h3>
                            <Button
                             to='/'
                            
                             >
                                 View Details
                             </Button>
                        </BoxInfo>
                    </SecColumn>
                </SecRow>
            </Container>
            
        </Section>
    )
}

export default NewHomes
