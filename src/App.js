//IMPORTS
//-Modules
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Switch, Route } from "react-router-dom"
//-Components
import HeaderMob from './components/global/HeaderMob'
import HeaderDesk from './components/global/HeaderDesk'
import FooterMob from './components/global/FooterMob'
import FooterDesk from './components/global/FooterDesk'
import Navigation from './components/global/Navigation'
import CvMob from './components/cv/CvMob'
import CvDesk from './components/cv/CvDesk'
import PortfolioMob from './components/portfolio/PortfolioMob'
import PortfolioDesk from './components/portfolio/PortfolioDesk'
import Library from './components/library/Library'
import { ThemeContext } from './contexts/ThemeContext'
//-Data
// import data from './data/cv'
import { colors } from './data/styling/stylingVars'

//STYLE
const GlobalStyles = createGlobalStyle`
  body {
    background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
    color:  ${ props => props.theme.mode === 'light' ? colors.thmBlack : colors.thmWhite }
  }
`


//MAIN COMPONENT
const App = () => {

  const { theme, setTheme } = useContext(ThemeContext)
  const [width, setWidth] = useState(window.innerWidth);

  
  //Reset Theme
    useEffect( () => {
      setTheme({mode: "light"})
    }, [setTheme])
  //

  //Desktop Design Match
    const mediaDesignBreakpoint = window.matchMedia("(min-width: 1200px)").matches
    const cvMatchMedia = () => {
      if (mediaDesignBreakpoint) {
        return <CvDesk/>
      } else {
        return <CvMob/>
      }
    }
    const portfolioMatchMedia = () => {
      if (mediaDesignBreakpoint) {
        return <PortfolioDesk/>
      } else {
        return <PortfolioMob />
      }
    }
    const libraryMatchMedia = () => {
      if (mediaDesignBreakpoint) {
        return <div>Library Desktop Version</div>
      } else {
        return <Library />
      }
    }
  //

  //Resize 
    useEffect( () => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [width])
  //

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles/>

      {mediaDesignBreakpoint ? <HeaderDesk/> : <HeaderMob/>}
      {mediaDesignBreakpoint ? <></> : <Navigation/>}
      

      <Switch>
        <Route exact path="/">
          {cvMatchMedia}
        </Route>
        <Route path="/portfolio">
          {portfolioMatchMedia}
        </Route>
        <Route path="/library">
          {libraryMatchMedia}
        </Route>
      </Switch>

      {mediaDesignBreakpoint ? <FooterDesk/> : <FooterMob/>}
      

    </ThemeProvider>
  )
}
export default App;
