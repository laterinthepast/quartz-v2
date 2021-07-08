import React from 'react'
import styled from 'styled-components';



const CardWrapper = styled.div`
    width: 70%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1rem;
    background-color: #fff;
    color: #000;
    img {
        height: 200px;
        width: 200px;
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
                <h4>{props.title}</h4>
                {/* <p>{props.description}</p> */}
            
        </CardWrapper>
    )
}

export default LandingCard
