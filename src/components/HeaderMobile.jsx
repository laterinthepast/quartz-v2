import React from 'react'
import styled from 'styled-components';
import img from '../images/logo.gif'

const Logo = styled.div`
    padding:1rem 1.2rem 0;
  
    
    img {
        width: 100%;
        
        
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
