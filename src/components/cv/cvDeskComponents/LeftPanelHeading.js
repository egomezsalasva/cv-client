//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
//-Components
//-Styling
import { fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'



//STYLE
//-Components
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

//MAIN COMPONENT
const LeftPanelHeading = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
        <HeadingContainer>
            <h4 className="titleBox">Me</h4>   
        </HeadingContainer>      
  )
}
export default LeftPanelHeading
