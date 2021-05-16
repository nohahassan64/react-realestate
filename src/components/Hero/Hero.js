import React , { useState , useEffect , useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '../globalStyle'
import { HomeSection , HomeWrapper ,
     HomeSlide , HomeSlider , HomeImage , HomeContent ,
      BtnWrap , ButtonSlider , ButtonNext , ButtonPrev } from './HeroStyle'

const Hero = ({ slides}) => {
    const [ current , setCurrent ] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect( () => {
        const nextSlide = () => {
            setCurrent( current => (current === length-1 ? 0 : current + 1));
        }
        timeout.current = setTimeout(nextSlide , 5000) ;

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    } ,
         [current , length]);


    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent( current === length-1 ? 0 : current + 1);
    }


    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent( current === 0 ? length-1 : current - 1);
    }
    if(!Array.isArray || slides.length <= 0 ) {
        return null;
    }
    return (
        <HomeSection>
            <HomeWrapper>
                {slides.map( (item , index) => (
                    <HomeSlide key={index}>
                        { current === index && (
                            <HomeSlider>
                                <HomeImage src={item.image} alt={item.alt} />
                                <HomeContent>
                                    <h2>{item.title}</h2>
                                    <p>{item.price}</p>
                                    <BtnWrap>
                                        <Button to="/" primary='true'>{item.btn}</Button>
                                    </BtnWrap>
                                </HomeContent> 
                            </HomeSlider>
                        )}
                    </HomeSlide>
                ))}
                <ButtonSlider>
                <ButtonPrev onClick={prevSlide}>
                    <FaArrowLeft />
                </ButtonPrev>
                <ButtonNext onClick={nextSlide}>
                    <FaArrowRight />
                </ButtonNext>
            </ButtonSlider>
            </HomeWrapper>
        </HomeSection>
    )
}

export default Hero