import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    margin-top: 2rem;
    color: #000d1a;
`
export const BoxInfo = styled.div`
      margin-left: 2rem;
    h3 {
        font-size: 1.2rem;
        margin: 1rem 0;
    }
    p {
        font-size: 1rem;
        margin-bottom: 1rem;
        line-height: 1.6;

    }
`
export const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
    &.img-bottom {
        margin-top: 10rem;
        @media screen and (max-width: 768px) {
            margin-top: 2rem;
        }
    }
`