//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
// import { gsap, ScrollTrigger } from 'gsap/all'
//-Components
//-Styling
import { fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'



//STYLE
const leftPanelWidth = responsiveWidthHeights.w800px
const rightPanelWidth = responsiveWidthHeights.w440px


const LeftPanel = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: ${leftPanelWidth};
    height: 100vh;
    background: ${colors.thmBlack};
    z-index: ${zIndexes.leftPanelBg};
`
const CvNav = styled.div`
  position: absolute;
  bottom: 40px;
  width: ${leftPanelWidth};
  .flexLine{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    .navLink{
      font-family: ${fonts.displayFnt};
      font-size: 14px;
      color: white;
      cursor: pointer;
    }
    .navLink:hover{
      font-weight: 700;
    }
    .active{
      font-weight: 700;
    }
  }
  .top{
    .navLink{
      margin: 0 15px 10px;
    }
  }
  .bottom{
    .navLink{
      margin: 0 15px;
    }
  }
  
`
const HeadingContainer = styled.div`
    position: fixed;
    top: 50vh;
    left: calc(${responsiveWidthHeights.w800px} / 2);
    transform: translate( -50%, -50%);
    overflow: hidden;
    h4{
        display: inline-block;
        margin-bottom: 20px; 
        padding: 0 15px 0 10px;
        background: #F8F9F8;
        font-family: ${fonts.displayFnt};
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #141414; 
    }
`
const RightPanel = styled.div`
  position: absolute; 
  top: 0;
  left: ${leftPanelWidth};
  /* overflow: hidden; */

  .innerRightPanel{

    .section{
      width: calc(100vw - ${leftPanelWidth});
      height: 100vh;
    }

    .meSec{
      position: absolute;
      background: ${colors.thmWhite};
      left: 0;
    }
    .lookingForSec{
      position: absolute;
      background: orange;
      left: -${rightPanelWidth};
    }
    .sec3{
      position: absolute;
      background: green;
      left: -${rightPanelWidth};
    }
    .sec4{
      position: absolute;
      background: pink;
      left: -${rightPanelWidth};
    }

  }
  
`



//-Components

//MAIN COMPONENT
function CvDesk() {



  const lookingForHandler = () => {
    console.log("test")
  }



  return (
    <div id="conatiner">
        <LeftPanel>
          <HeadingContainer>
              <h4>Me</h4>   
          </HeadingContainer>
          <CvNav>
              <div className="flexLine top">
                <div className="navLink active">Me</div>
                <div className="navLink" onClick={lookingForHandler}>What I'm Looking For</div>
                <div className="navLink">Education</div>
                <div className="navLink">Post-Education</div>
                <div className="navLink">Skills</div>
              </div>
              <div className="flexLine bottom">
                <div className="navLink">Interests</div>
                <div className="navLink">Languages</div>
                <div className="navLink">Links</div>
                <div className="navLink">Let's Meet</div>
              </div>
          </CvNav>
        </LeftPanel>
        <RightPanel>
          <div className="innerRightPanel">
            <div className="section meSec" ></div>
            <div className="section lookingForSec"></div>
            <div className="section sec3"></div>
            <div className="section sec4"></div>
          </div>
        </RightPanel>
    </div>      
  )
}
export default CvDesk;
