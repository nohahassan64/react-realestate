import styled from 'styled-components'

export const SectionInter = styled.div`
    padding: 6rem 0;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8rem;
        background: #000d1a;
        z-index: 1;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8rem;
        background: #000d1a;
        z-index: 1;
    }
`;
export const BoxInfo = styled.div`
      margin: 3rem 5rem 3rem 1rem;
    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        margin-bottom: 1rem;
        line-height: 1.6;

    }
`
export const Image = styled.img`
    position: relative;
    width: 100%;
    object-fit: cover;
    z-index: 10;
`