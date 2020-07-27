//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../data/styling/stylingVars'

//STYLE
//-Components
const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0 5px 10px 0 #CBCCCB;
  text-align: center;
  border-top: 1px solid rgba(242,242,241,0.50);
  background: ${props => props.theme.mode === 'light' ? colors.thmWhite :  colors.thmBlack};
`
const Email = styled.div`
    font-family: 'Graphik-Semibold';
    font-size: 14px;
    text-align: center;
    line-height: 60px;
    font-weight: 600;
`


//MAIN COMPONENT
function FooterMob() {
  return (
    <>
      <FooterContainer>
        <Email>egomezsalasva@gmail.com</Email>
      </FooterContainer>      
    </>
  )
}
export default FooterMob;
