import React from 'react'
import styled from 'styled-components';



const CardWrapper = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #EAEAEF;
    color: #000;
    h4 {
        color: #004C99;
        
        background-color:rgba(255,255,233, 0.8);
        text-align: center;
        transition: all 0.2s ease-in-out;
        font-size: 1.1rem;
        :hover {
            color: red;
        }
    }
    p {
        padding: 1rem;

        font-size: 1rem;
    }
    @media screen and (min-width: 690px) {
        img {
        height: 300px;
        width: 300px;
        }
        span {
            font-size: 2rem;
            font-weight: 900;
        }
    }
`


const LandingCard = (props) => {
    return (
        <CardWrapper>
            
                
                <span><h4>{props.title}</h4></span>
                <p>{props.description}</p>
            
        </CardWrapper>
    )
}

export default LandingCard
