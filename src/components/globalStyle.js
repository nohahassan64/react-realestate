import styled , { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: 0;
     font-family: sans-serif
 }
 html , body {
     overflow-x: hidden;
 }
`
export const Section = styled.div`
    padding: 4rem 0 ;
`;
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;

@media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
    }
`;
export const SecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 991px) {
   grid-template-columns: 1fr;
    }
`;
export const SecColumn = styled.div`
    margin-bottom: 15px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
`;
export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: ${({primary}) => ( primary ? '#000d1a' : '#ff454c')};
    border: ${({primary}) => ( primary ? '1px solid #000d1a' : '1px solid #ff454c')};
    color: #fff;
    max-width: 200px;
    padding: .7rem 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 1rem;
    text-decoration: none;
    transition: all .5s ease-in-out;

    &:hover {
        background: ${({primary}) => ( primary ? '#ff454c' : '#000d1a')};
        border: ${({primary}) => ( primary ? '1px solid #ff454c' : '1px solid #000d1a')};
    }
    
`