//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors, fonts } from '../../data/styling/stylingVars'


//STYLE
//-Components
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  padding: 0 70px;
  .activeNav{
    font-weight: 700;
  }
`
const NavOption = styled(NavLink)`
  font-family: ${fonts.displayFnt};
  font-size: ${fonts.fntSz14};
  color: ${colors.front};
  text-align: center;
  text-transform: lowercase;
  text-decoration: none;
`


//MAIN COMPONENT
function Navigation() {
  return (
    <NavContainer>
        <NavOption to="/" exact activeClassName="activeNav">C.V.</NavOption>
        <NavOption to="/portfolio" activeClassName="activeNav">Portfolio</NavOption>
        <NavOption to="/library" activeClassName="activeNav">Library</NavOption>
    </NavContainer>
  )
}
export default Navigation;
