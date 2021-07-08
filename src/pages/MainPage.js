import React from 'react'
import HeaderMobile from '../components/HeaderMobile'
import TestCard from '../components/TestCard'
import FooterMobile from '../components/FooterMobile'
import styled from 'styled-components';
import LandingCard from '../components/LandingCard';
import PersonalCard from '../components/PersonalCard';
import img2 from '../images/1.jpg'
import img3 from '../images/img5.jpg'
import img5 from '../images/img6.jpg'
import img4 from '../images/3.jpg'
import ukas from '../images/4 (2).jpg'
import irimg from '../images/4 (1).gif'
import iaimg from '../images/4 (2).gif'

import agg from '../images/CardPhotos/agg.png'
import cement from '../images/CardPhotos/cement.png'
import clay from '../images/CardPhotos/clay.png'
import concrete from '../images/CardPhotos/concrete.png'
import cont from '../images/CardPhotos/cont.png'
import gyp from '../images/CardPhotos/gyp.png'
import mor from '../images/CardPhotos/mor.png'
import paint from '../images/CardPhotos/paint.png'
import salt from '../images/CardPhotos/salt.png'


const MainWrapper = styled.div`
    text-align: center;
    color: #fff;
    background: rgb(149,141,144);
    background: radial-gradient(circle, rgba(149,141,144,1) 0%, rgba(148,187,233,1) 100%);
    .ukas-sep {
        padding: 3rem 0; 
               
        img {
            padding-top: 1rem;
            width: 100px;
        }
    }
    .about-section {
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
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
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
    h1 {
        padding: 2rem;
    }
    button {
        background: rgb(13,48,210);
        background: radial-gradient(circle, rgba(13,48,210,1) 0%, rgba(0,117,218,1) 100%);
        width: 200px;
        height: 50px;
        border-radius: 40px;
        border: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 1rem;
        padding: 1rem;
        text-decoration: none;
        color:#fff;
    }
 
    @media screen and (min-width: 690px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        img {
            display: none;
        }
        button {
            width: 200px;
        }
        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 2rem;
        }
    }
`

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    
    position: relative;
    gap:1rem;
    transition: all 0.2s ease-in;
    margin: 1rem 1rem;
    
    @media screen and (min-width: 690px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 4rem;
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
padding: 2rem 0;
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
    padding: 2rem 0;
    a {
        padding: 0.3rem 0;
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
                <h1>Chemical Analysis and <br/>Consultancy<br/> for the <br/> Construction Industry</h1>
                {/* <div>
                    <h3>44(0) 1923213983</h3>
                    <h3>iren.jasko@quartz-scientific.co.uk</h3>
                    <h3>ian.girling@quartz-scientific.co.uk</h3>
                </div> */}
                {/* <a href="/"><button>Available analysis</button></a> */}
            </Landing>
            <CardsWrapper>
                <LandingCard
                    img={img2}
                    title="Physical Testing"
                    description="Physical testing of a range of construction materials to British, European and American standards."
                />
                <LandingCard
                    img={img3}
                    title="Expert Witness"
                    description="Mrs Iren Jasko MSc EurChem CSci CChem FRSC is available to act in an expert witness capacity to help resolve disputes and in formal civil and criminal legal proceedings."
                />
                <LandingCard
                    img={img4}
                    title="Chemical Analysis"
                    description="Analysis of a range of construction materials to British, European and American standards. Unusual procedures can be accommodated from supplied documentation or our own extensive library."
                />
                <LandingCard
                    img={img5}
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
                    url={""}
                    title="Aggredates"
                    src={agg}
                />
                <TestCard
                    url={""}
                    title="Clay Bricks"
                    src={clay}
                />
                <TestCard
                    url={""}
                    title="Cement"
                    src={cement}
                />
                <TestCard
                    url={""}
                    title="Concrete"
                    src={concrete}
                />
                <TestCard
                    url={""}
                    title="Contaminated Land"
                    src={cont}
                />
                <TestCard
                    url={""}
                    title="Gypsum Plaster"
                    src={gyp}
                />
                <TestCard
                    url={""}
                    title="Mortar and Screed"
                    src={mor}
                />
                <TestCard
                    url={""}
                    title="Paint"
                    src={paint}
                />
                <TestCard
                    url={""}
                    title="Salt"
                    src={salt}
                />

            </TestsWrapper>

            <div className="about-section">
                <p>Since 1991 the company has provided chemical analysis and consultancy to the construction industry. In 1995 UKAS accreditation was gained. Since initial accreditation the scope of Quartz's has grown and now includes tests for aggregates, paint, gypsum plasters and water for concrete for example .</p>
                <p>Technological advances in the industry and the requirement during restoration of historical buildings to use identical materials continue to make demands on the analysis of samples and the interpretation of results. Quartz Scientific has the depth of knowledge and experience to keep pace with changes as they occur.</p>
            </div>

            <PersonalCardsWrapper>
                <PersonalCard
                    title="Technical Manager"
                    img={irimg}
                    name="Mrs Iren S Jasko  MSc EurChem CSci CChem FRSC"
                    position="Iren as Technical Manager is responsible for ensuring that a high standard of expertise in relevant disciplines is maintained and staff are trained and deployed to meet the ongoing needs of the business and for maintaining the technical standards of work employed by Quartz Scientific staff.

                    She oversees jointly with the Quality Manager any additional accreditations needed to meet client requirements."
                />
                <PersonalCard
                    title="Quality Manager"
                    img={iaimg}
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
