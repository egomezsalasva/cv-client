//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { fonts } from '../../data/styling/stylingVars'


//STYLE
//-Components
const NavContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 40px;
    text-align: center;
    .activeNav{
    font-weight: 700;
    }
`
const NavOption = styled(NavLink)`
  font-family: ${fonts.displayFnt};
  font-size: ${fonts.fntSz14};
  color: ${ props => props.theme.mode === 'light' ? "#000" : "#F8F9F8" };
  text-align: center;
  text-transform: lowercase;
  text-decoration: none;
  padding: 0 15px;
`


//MAIN COMPONENT
function NavigationDesk() {
  return (
    <NavContainer>
        <NavOption to="/" exact activeClassName="activeNav">C.V.</NavOption>
        <NavOption to="/portfolio" activeClassName="activeNav">Portfolio</NavOption>
        <NavOption to="/library" activeClassName="activeNav">Library</NavOption>
    </NavContainer>
  )
}
export default NavigationDesk;
