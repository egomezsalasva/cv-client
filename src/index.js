//IMPORTS
//-Libraries
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import './i18n' //-Multilanguage // import i18n (needs to be bundled ;))
//-Styling
import './index.css';
//-Components
import App from './App';
//-Context API
import  ThemeContextProvider  from './contexts/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
         <Suspense fallback="loading"> {/*TODO check fallback to make custom*/}
          <App />
        </Suspense>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
