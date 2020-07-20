//IMPORTS
//-Modules
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
// import { gsap } from 'gsap'
//-Components
// import Heading from '../global/shared/Heading'
//-Styling
import { devices, fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'


//STYLE
const leftPanelWidth = responsiveWidthHeights.w800px

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
    position: relative;
    top: 0;
    right: 0;
    width: calc(100vw - ${leftPanelWidth});
    height: 100vh;
    background: ${colors.thmWhite};
`




//-Components

//MAIN COMPONENT
function CvDesk() {
    
  return (
    <>
        <LeftPanel>

        </LeftPanel>
        <RightPanel>

        </RightPanel>
    </>      
  )
}
export default CvDesk;
