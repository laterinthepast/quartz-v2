import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TestCardWrapper = styled.div`
    padding: 0.1rem 0.2rem;
    position: relative;
    h5 {
        font-size: 0.9rem;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255,255,255, 0.5) ;
        width: 100%;
    }
    a {
        color: #000;
        text-decoration: none;  
    }
    img {

    }
    
    
`

const TestCard = (props) => {
    return (
        <TestCardWrapper>
            <Link to="/tests">
                <h5>{props.title}</h5>
                <img src={props.src} alt="test pic" />
            </Link>
        </TestCardWrapper>
    )
}

export default TestCard
