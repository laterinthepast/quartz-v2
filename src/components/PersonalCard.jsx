import React from 'react'
import styled from 'styled-components';

const PersonalWrapper = styled.div`

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem;
        font-size: 0.8rem;
        .personal-photo {
            
            img {
                width: 100px;
                border-radius: 30px;
                padding-left: 10px ;
            }
        }
        
        .personal-info {
            
            h2 {
                border-bottom: 1px solid black;
                padding-bottom: 5px;
            }
            h4 {
                padding: 5px 0;
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
            </div>
            <div className="personal-photo">
                <img src={props.img} alt="personal" />
            </div>


        </PersonalWrapper>
    )
}

export default PersonalCard
