import React from 'react'
import styled from 'styled-components';



const CardWrapper = styled.div`
    
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1rem;
    background-color: #fff;
    color: #000;
    width: 100%;
    position: relative;
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        
    }
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #004C99;
        font-weight: 600;
        background-color:rgba(255,255,233, 0.6);
        height: 30%;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        :hover {
            color: red;
        }
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
            
                <img src={props.img} alt="" />
                <span><h4>{props.title}</h4></span>
                {/* <p>{props.description}</p> */}
            
        </CardWrapper>
    )
}

export default LandingCard
