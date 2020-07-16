//IMPORTS
//-Modules
import React, { useState, useContext, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Switch, Route } from "react-router-dom"
//-Components
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Navigation from './components/global/Navigation'
import Cv from './components/cv/Cv'
import Portfolio from './components/portfolio/Portfolio'
import Library from './components/library/Library'
import { ThemeContext } from './contexts/ThemeContext'
//-Data
// import data from './data/cv'
// import { colors } from './data/styling/stylingVars'

//STYLE
const GlobalStyles = createGlobalStyle`
  body {
    background: ${ props => props.theme.mode === 'light' ? "#F8F9F8" : "#000" };
    color:  ${ props => props.theme.mode === 'light' ? "#000" : "#F8F9F8" }
  }
`


//MAIN COMPONENT
const App = () => {

  const {theme, setTheme } = useContext(ThemeContext)

  //Reset Theme
  useEffect( () => {
    setTheme({mode: "light"})
  }, [])

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles/>

      <Header/>
      <Navigation/>

      <Switch>
        <Route exact path="/">
          <Cv/>
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
      </Switch>

      <Footer/>

    </ThemeProvider>
  )
}
export default App;
