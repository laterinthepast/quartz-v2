import React from 'react'
import styled from 'styled-components';

const TestCardWrapper = styled.div`

    position: relative;
    h5 {
        font-size: 0.8rem;
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
    
`

const TestCard = (props) => {
    return (
        <TestCardWrapper>
            <a href={props.url}>

                <h5>{props.title}</h5>
                <img src={props.src} alt="test pic" />
            </a>
        </TestCardWrapper>
    )
}

export default TestCard
