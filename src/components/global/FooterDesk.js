//IMPORTS
//-Modules
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRouteMatch } from "react-router-dom";
import { colors, responsiveWidthHeights, fonts } from '../../data/styling/stylingVars'

//STYLE
//-Vars
const leftPanelWidth = responsiveWidthHeights.w800px
const rightPanelWidth = responsiveWidthHeights.w440px
//-Components
const FooterContainer = styled.div`
  position: fixed;
  left: ${leftPanelWidth};
  bottom: 0;
  width: ${rightPanelWidth};
  height: 120px;
  text-align: center;
  background: ${colors.thmWhite};
  z-index: 400;
  overflow: hidden;
`
const EmailContainer = styled.div`
    position: absolute;
    background: ${colors.thmWhite};
    border: 1px solid rgba(230,230,228,0.25);
    box-shadow: -5px -5px 10px 0 #FFFFFF, 5px 5px 10px 0 #F2F2F1;
    border-radius: 5px;
    text-align: center;
    height: 40px;
    width: 232px;
    bottom: 38px;
    right: -4px;
    h3{
        font-family: ${fonts.fntSemiBold};
        font-size: ${fonts.fntSz14};
        color: ${colors.thmBlack};
        line-height: 40px;
    }
`
const Button = styled.div`
    display: inline-block;
    border: 1px solid ${colors.thmBlack};
    padding: 13px 20px 10px;
    font-family: ${fonts.fntRegular};
    font-size: ${fonts.fntSz12};
    color: ${colors.thmBlack};
    text-align: center;
    cursor: pointer;
`
const PDFSummary = styled(Button)`
    position: absolute;
    right: calc(232px - 4px + 30px);
    bottom: 38px;
`
const PDFStory = styled(Button)`
    position: absolute;
    right: calc(232px - 4px + 30px + 121px + 30px);
    bottom: 40px;
`

//MAIN COMPONENT
function FooterDesk() {
    
  const match = useRouteMatch("/portfolio")
  const match2 = useRouteMatch("/library")

  return (
    <>
      <FooterContainer>

        {  match || match2 ? <></> : <PDFStory>PDF Story</PDFStory>}

        {  match || match2 ? <></> : <PDFSummary>PDF Summary</PDFSummary>}

        <EmailContainer>
            <h3>egomezsalasva@gmail.com</h3>
        </EmailContainer>
        
      </FooterContainer>      
    </>
  )
}
export default FooterDesk;
