import React from 'react'
import img from '../images/logo.gif'
import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 1rem;
    img {
        width: 60%;
        
    }
    color: #fff;
    .footer-tel {
        padding: 1rem 0;
    }
    .footer-address {
        padding: 1rem 0;
    }
`

const FooterMobile = () => {
    return (
        <FooterWrapper>
            
            <div className="footer-tel">
                <h2>+44(0) 1923213983</h2>
                
            </div>
            <address className="footer-address">
                7G Dukes Yard
                Shakespeare Industrial Estate
                Watford
                Herts
                WD24 5AL
            </address>

        </FooterWrapper>
    )
}

export default FooterMobile
