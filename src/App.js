//IMPORTS
//-Modules
import React, { useContext, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Switch, Route } from "react-router-dom"
//-Components
import HeaderMob from './components/global/HeaderMob'
import Footer from './components/global/Footer'
import Navigation from './components/global/Navigation'
import CvMob from './components/cv/CvMob'
import CvDesk from './components/cv/CvDesk'
import Portfolio from './components/portfolio/Portfolio'
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

  //Reset Theme
  useEffect( () => {
    setTheme({mode: "light"})
  }, [setTheme])


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
      return <div>Portfolio Desktop Version</div>
    } else {
      return <Portfolio />
    }
  }
  const libraryMatchMedia = () => {
    if (mediaDesignBreakpoint) {
      return <div>Library Desktop Version</div>
    } else {
      return <Library />
    }
  }

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles/>

      {mediaDesignBreakpoint ? <></> : <HeaderMob/>}
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

      {mediaDesignBreakpoint ? <></> : <Footer/>}
      

    </ThemeProvider>
  )
}
export default App;
