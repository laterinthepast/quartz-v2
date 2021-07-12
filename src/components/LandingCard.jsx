import React from 'react'
import styled from 'styled-components';



const CardWrapper = styled.div`
    background-color: #EAEAEF;
    color: #000;
    height: 180px;
    padding: 0.2rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    
    h4 {
    
    }
    p {
    
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
