import React from 'react'
import HeaderMobile from '../components/HeaderMobile'
import TestCard from '../components/TestCard'
import FooterMobile from '../components/FooterMobile'
import styled from 'styled-components';
import LandingCard from '../components/LandingCard';
import PersonalCard from '../components/PersonalCard';
import img2 from '../images/1.jpg'

import main2 from '../images/landingsec.jpg'
import const2 from '../images/const2.jpg'
import img5 from '../images/img6.jpg'

import back2 from '../images/background/water.jpg'
import ukas from '../images/4 (2).jpg'
import irimg from '../images/4 (1).gif'
import iaimg from '../images/4 (2).gif'

import agg from '../images/CardPhotos/agg.jpg'
import cement from '../images/CardPhotos/cement.png'
import clay from '../images/CardPhotos/clay.png'
import concrete from '../images/CardPhotos/concrete.png'
import cont from '../images/CardPhotos/cont.jpg'
import gyp from '../images/CardPhotos/gyp.png'
import mor from '../images/CardPhotos/mor.jpg'
import paint from '../images/CardPhotos/paint.png'
import salt from '../images/CardPhotos/salt.jpg'
import soil from '../images/CardPhotos/soil.png'
import water from '../images/CardPhotos/water.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faPhone, faVial } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const MainWrapper = styled.div`
    text-align: center;
    background: #e5e5e5;
    .ukas-sep {
        padding: 3rem 0; 
        img {
            padding-top: 1rem;
            width: 20%;
        }
    }
    .about-section {
        font-size: 1.11rem;
        font-weight: 600;
        background-color: #E7E6F3;
        color: #000;
        
        p {
            padding: 1rem;
        }
        letter-spacing: 1px;
        h2 {
            padding: 1rem;
        }
        img {
            width:100%;
        }
    }
    @media screen and (min-width: 690px) {
        .about-section { 
            padding: 2rem 5rem;
            font-size: 1.5rem;
        }
    }
`
const Landing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    color: #14213d;
    position: relative;
    background: #fff;
    img {
        width: 100%;
    }
    h1 {
        font-size: 1.1rem;
        padding: 3.5rem 2rem 0;
        
    }
    span {
            font-size: 1.49rem;
            
        }
    .buttons1 {
            position: absolute;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 0.2rem;
            background: #047BF8;
            display: flex;
            border-radius: 10px;
            top: 5px;
            left:5px;
            a {
            background-color: #14213d;
            border-radius: 5px;   
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px; 
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            
            }
            .tests {
                padding-left: 2px;
            }
        }
        .pinnedArrow {
            .fa-arrow-alt-circle-up {
                border-radius: 100px;
                color: #000;
            }
            position: fixed;
            font-size: 3rem;
            bottom: 0;
            right: 10px;
            z-index: 99;
        }
 
    @media screen and (min-width: 690px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-image:url('${back2}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        h1 {
            font-size: 3rem;
            color: #fff; 
        }
        h3 {
            font-size: 2rem;
        }
        .buttons1 {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 1rem;
            background: RGBA(252,163,17,0.7);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 25%;
            border-radius: 10px;
            a {
            background-color: #14213d;
            border-radius: 5px;   
            width: 180px;
            height: 50px; 
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            }
            
        }
        
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap:0.5rem;
    transition: all 0.2s ease-in;
    margin: 0rem 2rem;
    background-color: #047BF8;
    height: 820px;
    margin-top: -2rem;
    border-radius: 40px;
    position: relative;
    
    @media screen and (min-width: 690px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        margin-top: -2rem;
        
    }
`

const TestsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    font-size:0.9rem;
    background-color: #fff;
    color: #000;
    padding: 2rem;
    img {
        width: 100%;
    }
    @media screen and (min-width: 690px){
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`

const PersonalCardsWrapper = styled.div`
        color: #000;
        padding: 0 0.2rem;
        background-color: #E7E6F3;

    @media screen and (min-width: 690px){
        margin: 2rem;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
    }
    
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    background-color: #E7E6F3;

    a {
        padding: 0.3rem 0;
        text-decoration: none;
        color: #000;
        transition: all 1s ease-in-out;
        font-weight: 600;

        :hover{
            color: red;
        }
    }
    h2 {
        padding-bottom: 1rem;
    }
`



const MainPage = () => {
    return (
        <MainWrapper>
            <HeaderMobile />
            <Landing>
                <h1><span>Chemical </span>Analysis and Consultancy for the<span> Construction Industry</span></h1>
                <img src={const2} alt=""/>
                
                <div className="buttons1">
                    <div className="contact">
                        <a href="#contact">
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    </div>
                    <div className="tests">
                        <Link to="/tests">
                            <FontAwesomeIcon icon={faVial} />
                        </Link>
                    </div>
                </div>
                <div className="pinnedArrow">
                    <Fade bottom>
                        <a href="#header">
                            <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        </a>
                    </Fade>
                </div>


            </Landing>
            <CardsWrapper>
                <LandingCard
                    img={img2}
                    title="Physical Testing"
                    description="Physical testing of a range of construction materials to British, European and American standards."
                />
                <LandingCard
                    img={img5}
                    title="Expert Witness"
                    description="Mrs Iren Jasko is available to act in an expert witness capacity to help resolve disputes and in formal civil and criminal legal proceedings."
                />
                <LandingCard
                    img={img5}
                    title="Chemical Analysis"
                    description="Analysis of a range of construction materials to British, European and American standards. "
                />
                <LandingCard
                    img={img2}
                    title="Site survey Investigation"
                    description="Sites can be surveyed, in co-operation with trusted companies, for safety, prospective purchase or investigation of structural condition."
                />
            </CardsWrapper>
            <div className="ukas-sep">
                <h3>All tests are UKAS accredited</h3>
                <img src={ukas} alt="ukas logo" />


            </div>
            <TestsWrapper>
                <TestCard
                    title="Aggredates"
                    src={agg}
                />
                <TestCard
                    title="Clay Bricks"
                    src={clay}
                />
                <TestCard
                    title="Cement"
                    src={cement}
                />
                <TestCard
                    title="Concrete"
                    src={concrete}
                />
                <TestCard
                    title="Contaminated Land"
                    src={cont}
                />
                <TestCard
                    title="Gypsum Plaster"
                    src={gyp}
                />
                <TestCard
                    title="Mortar and Screed"
                    src={mor}
                />
                <TestCard
                    title="Paint"
                    src={paint}
                />
                <TestCard
                    title="Salt"
                    src={salt}
                />
                <TestCard
                    title="Soil"
                    src={soil}
                />
                <TestCard
                    title="Water"
                    src={water}
                />

            </TestsWrapper>

            <div className="about-section">
                <img src={main2} alt="lalal" />
                <h2>About us</h2>
                <p>Since 1991 the company has provided chemical analysis and consultancy to the construction industry. In 1995 UKAS accreditation was gained. Since initial accreditation the scope of Quartz's has grown and now includes tests for aggregates, paint, gypsum plasters and water for concrete for example .</p>
                <p>Technological advances in the industry and the requirement during restoration of historical buildings to use identical materials continue to make demands on the analysis of samples and the interpretation of results. Quartz Scientific has the depth of knowledge and experience to keep pace with changes as they occur.</p>
            </div>

            <PersonalCardsWrapper>
                <PersonalCard
                    title="Technical Manager"
                    img={irimg}
                    email="iren.jasko@quartz-scientific.co.uk"
                    name="Mrs Iren S Jasko  MSc EurChem CSci CChem FRSC"
                    position="Iren as Technical Manager is responsible for ensuring that a high standard of expertise in relevant disciplines is maintained and staff are trained and deployed to meet the ongoing needs of the business and for maintaining the technical standards of work employed by Quartz Scientific staff.

                    She oversees jointly with the Quality Manager any additional accreditations needed to meet client requirements."
                />
                <PersonalCard
                    title="Quality Manager"
                    img={iaimg}
                    email="ian.girling@quartz-scientific.co.uk"
                    name="Dr Ian Girling, CChem, MRSC"
                    position="Ian Girling as Quality Manager is responsible for ensuring that procedures are employed to comply with the Quality Manual and EN ISO 17025 to maintain the requirements of a UKAS accredited laboratory.

                    He has a wide experience of applying analytical techniques in differing circumstances having worked in the engineering, electronics, water and transport industries."
                />
            </PersonalCardsWrapper>
            <Links>
                <h2>Useful Links</h2>
                <a href="/">The United Kingdom Accreditation Service (UKAS)</a>
                <a href="/">The Concrete Society</a>
                <a href="/">Institution of Structural Engineers</a>
                <a href="/">Society of Chemical Industry</a>
                <a href="/">Royal Society of Chemistry</a>
                <a href="/">The British Brick Society</a>
            </Links>
            <FooterMobile />
        </MainWrapper>
    )
}

export default MainPage

