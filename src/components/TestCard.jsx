import React from 'react'
import styled from 'styled-components';

const TestCardWrapper = styled.div`

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
