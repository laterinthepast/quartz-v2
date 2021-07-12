import React from 'react'
import styled from 'styled-components';
import img from '../images/logo (2).png'

const Logo = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    color: #000;
    padding: 0.4rem;
    img {
        width: 50px;
        
        
    }
    h1 {
        
        
    }

    @media screen and (min-width: 690px){
        img {
            width: 40%;
           
        }
    }
`

const HeaderMobile = () => {
    return (
        
            <Logo>
                <img src={img} alt="logo"/>
                <h1>Quartz Scientific</h1>
            </Logo>
        
    )
}

export default HeaderMobile
