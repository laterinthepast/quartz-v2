import React from 'react'
import styled from 'styled-components';
import img from '../images/logo.gif'

const Logo = styled.div`
    
    
    img {
        top: 0;
        left: 0;
        width: 90%;
        margin: 1rem 1rem 0;
        
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
            </Logo>
        
    )
}

export default HeaderMobile
