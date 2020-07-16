import React, { createContext, useState } from 'react'
import { render } from '@testing-library/react'


export const ThemeContext = createContext()


const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({ mode: "light" })
    return(
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider