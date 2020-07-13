//IMPORTS
//-Modules
import React from 'react'
// import styled from 'styled-components'
import { Switch, Route } from "react-router-dom"

//-Components
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Navigation from './components/global/Navigation'
import Cv from './components/cv/Cv'
import Portfolio from './components/portfolio/Portfolio'
import Library from './components/library/Library'
//-Data
// import data from './data/cv'

//STYLE
//-Variables
//-Components


//MAIN COMPONENT
function App() {

  return (
    <>

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

    </>
  )
}
export default App;
