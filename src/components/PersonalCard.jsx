import React from 'react'
import styled from 'styled-components';

const PersonalWrapper = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
        padding: 1rem;
        font-size: 0.8rem;
        
        /* .personal-photo {
            img {
                position: absolute;
                width: 50px;
                top: 0;
                left: 0;
                

            }
        } */
        
        .personal-info {
            h2 {
                border-bottom: 1px solid black;
            }
            h4 {
                padding: 5px 0;
            }
            h6 {
                padding: 5px;
                font-size: 1rem;
            }
        }
        @media screen and (min-width: 690px){
            font-size: 1.3rem;
            flex-direction: column;
            
            
        }
`



const PersonalCard = (props) => {
    return (
        <PersonalWrapper>
            <div className="personal-info">
                <h2>{props.name}</h2>
                <h4>{props.title}</h4>
                <p>{props.position}</p>
                <h6>{props.email}</h6>
            </div>
            {/* <div className="personal-photo">
                <img src={props.img} alt="personal" />
            </div> */}


        </PersonalWrapper>
    )
}

export default PersonalCard
