import React from 'react'
import styled from 'styled-components';
import UkasTests from '../components/UkasTests';
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

const TestsWrapper = styled.div`
    background-color: #E7E6F3;
    padding: 1rem;
    h2 {
        font-size: 0.7rem;
    }
    p {
        font-size:0.7rem;
    }
    img {
        width: 50px;
    }
`


const AllTests = () => {
    return (
        <TestsWrapper>
            <h2 id="agg">AGGREGATES</h2>
            <img src={agg} alt=""/>
            <h6>Chemical Tests and relatedOpinions and Interpretations</h6>
            <table>
                <UkasTests
                    testName="Carbon dioxide content (reference method)"
                    testNumber="BS EN 196-2:2013"
                />
                <UkasTests
                    testName="Determination of water-soluble chloride salts using the Volhard method (reference method)"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                />
                <UkasTests
                    testName="Determination of water-soluble chloride salts by potentiometry(alternative method)"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                />
                <UkasTests
                    testName="Determination of water-soluble chloride salts using the Mohr method (alternative method)"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                />
                <UkasTests
                    testName="Determination of water-soluble sulfates"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                />
                <UkasTests
                    testName="Total sulfur content"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                /><UkasTests
                    testName="Determination of acid soluble sulfates"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                /><UkasTests
                    testName="Acid soluble sulphide"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                /><UkasTests
                    testName="Lightweight contaminators"
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                /><UkasTests
                    testName="Determination of loss on ignition "
                    testNumber="BS EN 1744-1:2009 + A1:2012"
                /><UkasTests
                    testName="Acid soluble chloride salts"
                    testNumber="BS EN 1744-5:2006"
                />
                <h6>Physical Tests</h6>
                <UkasTests
                    testName="Assessment of fines - methylene blue test"
                    testNumber="BS EN 933-9:2009+A1:2013"
                /><UkasTests
                    testName="Determination of the water content by drying in a ventilated oven"
                    testNumber="BS EN 1097-5:2008"
                />
                <h2>CLAY BRICKS</h2>
                <img src={clay} alt=""/>
                <h6>Chemical Tests and related Opinions and Interpretations</h6>
                <UkasTests
                    testName="Soluble salt content"
                    testNumber="BS EN 772-5:2016"
                /><UkasTests
                    testName="Sulfate content"
                    testNumber="BS 3921:1985 (withdrawn)"
                />
                <h2>CEMENT</h2>
                <img src={cement} alt=""/>
                <h6>Chemical Tests</h6>
                <UkasTests
                    testName="Determination of loss on ignition "
                    testNumber="BS EN 196-2:2013"
                />
                <UkasTests
                    testName="Gravimetric determination of sulfate"
                    testNumber="BS EN 196-2:2013"
                />
                <UkasTests
                    testName="Sulphide content"
                    testNumber="BS EN 196-2:2013"
                />
                <UkasTests
                    testName="Chloride content"
                    testNumber="BS EN 196-2:2013"
                />
                <UkasTests
                    testName="Alkali content"
                    testNumber="BS EN 196-2:2013"
                />
                <h2>CONCRETE - hardened</h2>
                <img src={concrete} alt=""/>
                <h6>Chemical Tests and related Opinions and Interpretations</h6>
                <UkasTests
                    testName="Cement & aggregate content"
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Loss on ignition"
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Capillary porosity"
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Original water/cement ratio "
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Chloride content"
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Sulphate content "
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Sulphide content "
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Sodium oxide & potassium oxide contents"
                    testNumber="BS 1881:Part 124:2015 + A1:2021"
                />
                <UkasTests
                    testName="Chloride content – potentiometric method"
                    testNumber="BS EN 14629:2007"
                />
                <UkasTests
                    testName="Presence of High Alumina Cement by rapid chemical method"
                    testNumber="BRE Information Sheet IS 15/74"
                />
                <UkasTests
                    testName="Carbonation"
                    testNumber="BS EN 14630:2006"
                />
                <h6>Physical Tests</h6>
                <UkasTests
                    testName="Water absorption"
                    testNumber="BS 1881:Part 122:2011"
                />
                <UkasTests
                    testName="Density"
                    testNumber="BS EN 12390-7:2019 + AC 2020"
                />
                <UkasTests
                    testName="Metallic fibre content"
                    testNumber="BS EN 14721:2005+A1:2007 BS EN 14488-7:2006"
                />
                <UkasTests
                    testName="Non-metallic fibre content"
                    testNumber="Documented In-House Method No 27 using crushing and separation techniques in BS EN 14721:2005+A1:2007"
                />
                <h2>CONTAMINATED LAND</h2>
                <img src={cont} alt=""/>
                <h6>Chemical Tests</h6>
                <UkasTests
                    testName="Cadmium, chromium, copper, lead, nickel and zinc in soils"
                    testNumber="Documented In-House Method No 7 using atomic absorption spectroscopy"
                />
                <UkasTests
                    testName="Hexavalent chromium in soils"
                    testNumber="Documented In-House Method No 8 using atomic absorption spectroscopy"
                />
                <h2>GYPSUM BUILDING PLASTERS - excluding premixed lightweight plasters</h2>
                <img src={gyp} alt=""/>
                <h6>Chemical Tests and related Opinions and Interpretations</h6>
                <UkasTests
                    testName="Sulphur trioxide and calcium oxide content"
                    testNumber="BS 1191:Part 1:1973 (withdrawn)"
                />
                <UkasTests
                    testName="Soluble sodium and magnesium salt content"
                    testNumber="BS 1191:Part 1:1973 (withdrawn)"
                />
                <UkasTests
                    testName="Loss on ignition "
                    testNumber="BS 1191:Part 1:1973 (withdrawn)"
                />
                <UkasTests
                    testName="Free lime content"
                    testNumber="BS 1191:Part 1:1973 (withdrawn)"
                />
                <h2>GYPSUM BUILDING PLASTERS - premixed lightweight plasters</h2>
                <img src={gyp} alt=""/>
                <h6>Chemical Tests and related Opinions and Interpretations</h6>
                <UkasTests
                    testName="Soluble sodium and magnesium salt content"
                    testNumber="BS 1191:Part 2:1973 (withdrawn)"
                />
                <UkasTests
                    testName="Free lime content "
                    testNumber="BS 1191:Part 2:1973 (withdrawn)"
                />
                <UkasTests
                    testName="Sulfate "
                    testNumber="BS EN 13279-2:2014"
                />
                <h2>MORTAR and SCREED</h2>
                <img src={mor} alt=""/>
                <h6>Chemical Tests and related Opinions and Interpretations</h6>
                <UkasTests
                    testName="Insoluble residue and soluble silica"
                    testNumber="BS 4551:2005+A2:2013"
                />
                <UkasTests
                    testName="Calcium oxide content "
                    testNumber="BS 4551:2005+A2:2013"
                />
                <UkasTests
                    testName="Sulfur trioxide content "
                    testNumber="BS 4551:2005+A2:2013"
                />
                <UkasTests
                    testName="Total iron content"
                    testNumber="BS 4551:2005+A2:2013"
                />
                <UkasTests
                    testName="Aluminium oxide content"
                    testNumber="BS 4551:2005+A2:2013"
                />
                <UkasTests
                    testName="Mix proportions"
                    testNumber="BS 4551:2005+A2:2013"
                />
                <h2>PAINT</h2>
                <img src={paint} alt=""/>
                <h6>Chemical Tests</h6>
                <UkasTests
                    testName="Total lead "
                    testNumber="BS 3900:Part B4:1986"
                />
                <h2>SALT for spreading on highways for winter maintenance</h2>
                <img src={salt} alt=""/>
                <h6>Chemical Tests and related Opinions and Interpretations</h6>
                <UkasTests
                    testName="Chloride"
                    testNumber="BS 3247:2011 +A1:2016"
                />
                <UkasTests
                    testName="Soluble sulphate compounds"
                    testNumber="BS 3247:2011 +A1:2016"
                />
                <h2>SOILS for civil engineering purposes</h2>
                <img src={soil} alt=""/>
                <h6>Chemical Tests</h6>
                <UkasTests
                    testName="Organic matter content"
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="Mass loss on ignition "
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="Sulphate content of soil and ground water - gravimetric method"
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="Carbonate content"
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="Water-soluble chloride content"
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="Acid-soluble chloride content"
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="Total dissolved solids"
                    testNumber="BS 1377:Part 3:1990"
                />
                <UkasTests
                    testName="pH value"
                    testNumber="BS 1377:Part 3:1990"
                />
                <h6>Physical Tests</h6>
                <UkasTests
                    testName="Moisture content - oven drying method"
                    testNumber="BS 1377:Part 2:1990"
                />
                <h2>GEOTECHNICAL INVESTIGATION and TESTING - Laboratory testing of soil</h2>
                <img src={soil} alt=""/>
                <h6>Water content</h6>
                <UkasTests
                    testName="Water content"
                    testNumber="BS EN ISO 17892-1:2014"
                />
                <h2>WATER for making concrete</h2>
                <img src={water} alt=""/>
                <h6>Chemical Tests</h6>
                <UkasTests
                    testName="Qualitative preliminary inspection of mixing water"
                    testNumber="BS EN 1008:2002"
                />
                <UkasTests
                    testName="Suitability of mixing water for concrete by quantitative appraisal chloride, sulfate, sodium, potassium, lead, zinc, sugar, phosphate and nitrate"
                    testNumber="BS EN 1008:2002"
                />
            </table>
        </TestsWrapper>
    )
}

export default AllTests
