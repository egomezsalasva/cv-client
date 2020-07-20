//IMPORTS
//-Modules
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
import { gsap, ScrollTrigger } from 'gsap/all'
//-Components
// import Heading from '../global/shared/Heading'
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
const RightPanel = styled.div`
    
`




//-Components

//MAIN COMPONENT
function CvDesk() {


  return (
    <CvContainer>
        <LeftPanel>

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
