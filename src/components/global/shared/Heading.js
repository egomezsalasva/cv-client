//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from "../../../data/styling/stylingVars"


//STYLE
//-Components
const HeadingContainer = styled.div`

    overflow: hidden;
    
    h4{

        display: inline-block;
        
        margin-bottom: 20px; 
        padding: 0 15px 0 10px;

        background: ${colors.front};

        font-family: ${fonts.displayFnt};
        font-weight: 300;
        font-size: ${fonts.fntSz14};
        line-height: ${fonts.lnHt20};
        text-align: center;
        color: ${colors.back};
        
    }
`


//MAIN COMPONENT
const Heading = ({ headingName, classProp }) => {
    return (          
        <HeadingContainer>
            <h4 className={classProp}>{headingName}</h4>   
        </HeadingContainer>   
    )
}
export default Heading
