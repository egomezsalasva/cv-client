//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import Heading from '../global/shared/Heading'
//-Images
import scrannysHouseImg from '../../images/scrannysHouse.png'
import apollo30Img from '../../images/apollo30.png'
//-Styling
import { devices, responsiveWidthHeights } from '../../data/styling/stylingVars'

//DATA
const portfolioData = [
  {
    name: "Scranny's House",
    imgUrl: scrannysHouseImg,
    webUrl: "https://www.scrannyshouse.com/",
  },
  {
    name: "Apollo 30",
    imgUrl:apollo30Img,
    webUrl: "https://apollo30.com/",
  }
]


//STYLE
//-Components
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 202px);
  margin-top: 30px;
  overflow: scroll;
  .section{
    max-width: 650px;
    margin: 0 ${responsiveWidthHeights.w30px} 50px;
    @media ${devices.tablet} {
      margin: 0 auto 50px;
    }
    .portfolioImg{
      width: 100%;
      height: ${responsiveWidthHeights.h200px};
      background-repeat: no-repeat;
      @media ${devices.tablet} {
        height: ${responsiveWidthHeights.h400px};
      }

    }
  }
`


//MAIN COMPONENT
const Portfolio = () => {
  return (
    <>
      <SectionsOuter>
        <div className="sectionsInner">
          {portfolioData.map( section => {
            return (
                      <a href={section.webUrl} target="_blank" rel="noopener noreferrer">
                        <div className="section">
                          <Heading headingName={section.name}/>
                          <div className="portfolioImg" 
                            style={{ 
                              background: `url(${section.imgUrl}) center center`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          />
                        </div>
                      </a>
                   )
          })}
        </div>
      </SectionsOuter>
    </>     
  )
}
export default Portfolio
