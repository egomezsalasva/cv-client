//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { fonts } from "../../../data/styling/stylingVars"


//STYLE
//-Components
const HeadingContainer = styled.div`

    overflow: hidden;
    
    h4{

        display: inline-block;
        
        margin-bottom: 20px; 
        padding: 0 15px 0 10px;

        background: ${ props => props.theme.mode === 'light' ? "#141414" : "#F8F9F8" };

        font-family: ${fonts.displayFnt};
        font-weight: 300;
        font-size: ${fonts.fntSz14};
        line-height: ${fonts.lnHt20};
        text-align: center;
        color: ${ props => props.theme.mode === 'light' ? "#F8F9F8" :  "#141414"};
        
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
