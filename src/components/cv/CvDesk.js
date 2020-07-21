//IMPORTS
//-Modules
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
import { gsap, ScrollTrigger } from 'gsap/all'
//-Components
import Heading from '../global/shared/Heading'
//-Styling
import { devices, fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'



//STYLE
const leftPanelWidth = responsiveWidthHeights.w800px


const CvContainer = styled.div`
 
`
const LeftPanel = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: ${leftPanelWidth};
    height: 100vh;
    background: ${colors.thmBlack};
    z-index: ${zIndexes.leftPanelBg};
`
const HeadingContainer = styled.div`
    position: fixed;
    top: 50vh;
    left: calc(${responsiveWidthHeights.w800px} / 2);
    transform: translate( -50%, -50%);
    overflow: hidden;
    h4{
        display: inline-block;
        margin-bottom: 20px; 
        padding: 0 15px 0 10px;
        background: #F8F9F8;
        font-family: ${fonts.displayFnt};
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #141414; 
    }
`
const RightPanel = styled.div`
  position: absolute; 
  left: ${leftPanelWidth};
  z-index: 400;
  .section:nth-child(odd) {
    width: calc(100vw - ${leftPanelWidth});
    height: 100vh;
    background: red;
  }
  .section:nth-child(even) {
    width: calc(100vw - ${leftPanelWidth});
    height: 100vh;
    background: blue;
  }
`



//-Components

//MAIN COMPONENT
function CvDesk() {


  return (
    <CvContainer>
        <LeftPanel>
          <HeadingContainer>
              <h4>Skills</h4>   
          </HeadingContainer> 
        </LeftPanel>
        <RightPanel>
          <div className="innerRightPanel">
            <div className="section" ></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
          </div>
        </RightPanel>
    </CvContainer>      
  )
}
export default CvDesk;
