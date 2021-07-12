import React from 'react'
import styled from 'styled-components';
import img from '../images/logo (2).png'

const Logo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    color: #000;
    padding: 1.2rem 1.2rem 2px;
    border-bottom: 3px solid #000;
    img {
        width: 50px;
    }
    @media screen and (min-width: 690px){
        justify-content: flex-start;
        align-items: flex-end;
        img {
            width: 10%; 
        }
        h1 {
            font-size: 4rem;
        }
    }
`

const HeaderMobile = () => {
    return (
        
            <Logo>
                <img src={img} alt="logo"/>
                <h1 id="header">Quartz Scientific</h1>
                
            </Logo>
        
    )
}

export default HeaderMobile
