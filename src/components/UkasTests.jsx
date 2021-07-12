import React from 'react'
import styled from 'styled-components';


const TestContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 0.6rem;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    .test {
        font-weight: 900;
    }
`

const UkasTests = (props) => {
    return (
        <TestContainer>
            <p>{props.testName}</p>
            <p className="test">{props.testNumber}</p>
        </TestContainer>
            
        
    )
}

export default UkasTests
