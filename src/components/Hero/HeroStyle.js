import styled , { css } from 'styled-components'

export const HomeSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`
export const HomeWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    z-index: 10;
`
export const HomeSlide = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
`
export const HomeSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    color: #fff;
    z-index: 40;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba( 0 , 0 , 0 , .4);
        z-index: 20;
    }
`
export const HomeImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const HomeContent = styled.div`
    position: relative;
    top: 0;
    left: 5%;
    display: flex;
    flex-direction: column;
    z-index: 30;
    text-align: left;
    max-width: 1000px;

    h2{
        font-size: clamp( 1rem , 4vw , 2rem);
        font-weight: bold;
        text-transform: uppercase;
    }
    p {
        font-size: clamp( 1.5rem , 4vw , 3rem);
        margin: 1rem  0;
        font-weight: bold;
    }
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`
export const ButtonSlider = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    z-index: 50;
    display: flex;
`
const Arrow = css`
    border: 1px solid #000d1a;
    background: #000d1a;
    width: 50px;
    height: 50px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    margin-left: 1rem;
    transition: all .5s ease-in-out;
    cursor: pointer;
    &:hover {
        background: #ff454c;
        border: 1px solid #ff454c;
    }
`
export const ButtonNext = styled.div`
    ${Arrow}
`
export const ButtonPrev = styled.div`
   ${Arrow}
`