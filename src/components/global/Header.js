//IMPORTS
//-Modules
import React, { useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Styling
import { responsiveWidthHeights, devices } from '../../data/styling/stylingVars'

//Te

//STYLE
//-Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin: 0 ${responsiveWidthHeights.w30px};
  @media ${devices.tablet} {
    margin: 0 ${responsiveWidthHeights.w10px};
  }
`
const Title = styled.h2`
  font-family: 'Graphik-Semibold';
  font-size: 18px;
  color: #000;
`
const ThemeBox = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(calc(-50% + 1px));
  width: 30px;
  height: 18px;
  border: 1px solid black;
  .cube{
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
    margin: 3px;
    right: auto;
    left: 0;
  }
`

//MAIN COMPONENT
function Header() {

  const [ themeColorToggle , setThemeColorToggle ] = useState(false)
  const toggleCubeAnim = gsap.timeline()


  const themeColorToggleHandler = () => {
    if(themeColorToggle === false){
      toggleCubeAnim.to(".cube", 0.4, { x: 12 })
    } else {
      toggleCubeAnim.to(".cube", 0.4, { x: 0 })
    }
    setThemeColorToggle(!themeColorToggle)
  }

  return (
    <HeaderContainer>
      <Title>J. Enrique Gomez-Salas</Title>
      <div>
        <ThemeBox onClick={themeColorToggleHandler}>
          <div className="cube"/>
        </ThemeBox>
      </div>
    </HeaderContainer>      
  )
}
export default Header;
