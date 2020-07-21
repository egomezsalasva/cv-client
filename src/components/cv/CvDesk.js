//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap/all'
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
      width: ${rightPanelWidth};
      height: 100vh;
    }

    #meSection{
      position: absolute;
      top: 0;
      background: ${colors.thmWhite};
    }
    #whatImLookingSection{
      position: absolute;
      background: orange;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #eduSection{
      position: absolute;
      background: green;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #postEduSection{
      position: absolute;
      background: pink;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #skillsSection{
      position: absolute;
      background: yellowgreen;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #interestsSection{
      position: absolute;
      background: yellow;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #languagesSection{
      position: absolute;
      background: aqua;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #linksSection{
      position: absolute;
      background: wheat;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #letsMeetSection{
      position: absolute;
      background: seagreen;
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }

  }
  
`



//-Components

//MAIN COMPONENT
function CvDesk() {

  const meTl = gsap.timeline()
  const tl01 = gsap.timeline()
  const tl02 = gsap.timeline()

  const meSectionHandler = () => {
    if( !tl01.isActive() || !tl02.isActive() ){
      //Section Anim
      const notId = `.section:not(#meSection)`
      document.querySelector("#meSection").style.zIndex = 50
      meTl
        .to("#meSection", { x: 0, duration: 1, ease: "power2.in", })
        .to("#meSection", { zIndex: 0,  duration: 0.001 })
        .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

      //Active
      document.querySelectorAll(".navLink").forEach( el => {
        el.classList.remove("active")
      })
      document.querySelector("#meLink").classList.add("active")
      document.querySelector(".titleBox").innerHTML = "Me"
    }
  }

  const sectionHandler01 = () => {
    if(!tl02.isActive()){
      //Section Anim
      const notId = `.section:not(#whatImLookingSection)`
      document.querySelector("#whatImLookingSection").style.zIndex = 50
      tl01
        .to("#whatImLookingSection", { x: 0, duration: 1, ease: "power2.in"})
        .to("#whatImLookingSection", { zIndex: 0,  duration: 0.001 })
        .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

      //Active
      document.querySelectorAll(".navLink").forEach( el => {
        el.classList.remove("active")
      })
      document.getElementById("whatImLookingLink").classList.add("active")
      document.querySelector(".titleBox").innerHTML = "What I'm Looking For"
    }
  }

  const sectionHandler02 = () => {
    if(!tl01.isActive()){
      //Section Anim
      const notId = `.section:not(#eduSection)`
      document.querySelector("#eduSection").style.zIndex = 50
      tl02
        .to("#eduSection", { x: 0, duration: 1, ease: "power2.in" })
        .to("#eduSection", { zIndex: 0,  duration: 0.001 })
        .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

      //Active
      document.querySelectorAll(".navLink").forEach( el => {
        el.classList.remove("active")
      })
      document.querySelector("#eduLink").classList.add("active")
      document.querySelector(".titleBox").innerHTML = "Education"
    }
  }
    

  return (
    <div id="conatiner">
        <LeftPanel>
          <HeadingContainer>
              <h4 className="titleBox">Me</h4>   
          </HeadingContainer>
          <CvNav>
              <div className="flexLine top">
                <div className="navLink active" onClick={meSectionHandler} id="meLink">Me</div>
                <div className="navLink" onClick={sectionHandler01} id="whatImLookingLink" >What I'm Looking For</div>
                <div className="navLink" onClick={sectionHandler02} id="eduLink">Education</div>
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
            <div className="section" id="meSection"></div>
            <div className="section" id="whatImLookingSection"></div>
            <div className="section" id="eduSection"></div>
            <div className="section" id="postEduSection"></div>
            <div className="section" id="skillsSection"></div>
            <div className="section" id="interestsSection"></div>
            <div className="section" id="languagesSection"></div>
            <div className="section" id="linksSection"></div>
            <div className="section" id="letsMeetSection"></div>
          </div>
        </RightPanel>
    </div>      
  )
}
export default CvDesk;
