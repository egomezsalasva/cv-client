//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
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
      .secInnerContainer{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 360px;
        .storyText{
          display: block;
        }
        .summaryText{
          display: none;
        }
        p{
          margin-bottom: 19px;
          font-family: ${fonts.fntRegular};
          font-weight: 300;
          font-size: ${fonts.fntSz14};
          line-height: ${fonts.lnHt22};
          color: ${props => props.theme.mode === 'light' ? colors.thmBlack :  colors.thmWhite};
        }
      }
    }

    #meSection{
      position: absolute;
      top: 0;
      background: ${colors.thmWhite};
    }
    #whatImLookingSection{
      position: absolute;
      background: ${colors.thmWhite};
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #eduSection{
      position: absolute;
      background: ${colors.thmWhite};
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

  //Translation
  const { t } = useTranslation()

  //Handle Toggle Summary / Story
  // const handleToggleSummaryButton = () => {

  //   if(toggleSummaryButton === "OFF"){
  //     //Animation

  //     //Handle switch of button text
  //     document.querySelector(".summaryButton span").innerHTML = t("cv.summaryButton.story.1")
  //     //Handle switch of cv text
  //     document.querySelectorAll(".storyText").forEach(e => { e.style.display = "none" })
  //     document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "block" })
  //     //Toggle State
  //     setToggleSummaryButton("ON")
  //   } else if (toggleSummaryButton === "ON") {
  //     //Animation

  //     //Handle switch of button text
  //     document.querySelector(".summaryButton span").innerHTML = t("cv.summaryButton.summary.1")
  //     //Handle switch of cv text
  //     document.querySelectorAll(".storyText").forEach(e => { e.style.display = "block" })
  //     document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "none" })
  //     //Toggle State
  //     setToggleSummaryButton("OFF")
  //   }
  // }

  const meTl = gsap.timeline()
  const lookingForTl = gsap.timeline()
  const eduTl = gsap.timeline()
  const postEduTl = gsap.timeline()

  const dur = 0.8
  const eas = "power1.out"

  const meSectionHandler = () => {
    if( !lookingForTl.isActive() && !eduTl.isActive() && !postEduTl.isActive()){
      //Section Anim
      const notId = `.section:not(#meSection)`
      document.querySelector("#meSection .secInnerContainer").style.opacity = 0
      document.querySelector("#meSection").style.zIndex = 50
      meTl
        .to("#meSection", { x: 0, duration: dur, ease: eas, })
        .to("#meSection .secInnerContainer", { opacity: 1, duration: 0.4, ease: eas })
        //Cleanup
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

  const lookingForHandler = () => {
    if( !meTl.isActive() && !eduTl.isActive() && !postEduTl.isActive()){
      //Section Anim
      const notId = `.section:not(#whatImLookingSection)`
      document.querySelector("#whatImLookingSection .secInnerContainer").style.opacity = 0
      document.querySelector("#whatImLookingSection").style.zIndex = 50
      lookingForTl
        .to("#whatImLookingSection", { x: 0, duration: dur, ease: eas})
        .to("#whatImLookingSection .secInnerContainer", { opacity: 1, duration: 0.4, ease: eas })
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

  const eduHandler = () => {
    if(!meTl.isActive() && !lookingForTl.isActive() && !postEduTl.isActive() ){
      //Section Anim
      const notId = `.section:not(#eduSection)`
      document.querySelector("#eduSection .secInnerContainer").style.opacity = 0
      document.querySelector("#eduSection").style.zIndex = 50
      eduTl
        .to("#eduSection", { x: 0, duration: dur, ease: eas })
        .to("#eduSection .secInnerContainer", { opacity: 1, duration: 0.4, ease: eas })
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

  const postEduHandler = () => {
    if(!meTl.isActive() && !lookingForTl.isActive() && !eduTl.isActive()){
      //Section Anim
      const notId = `.section:not(#postEduSection)`
      document.querySelector("#postEduSection").style.zIndex = 50
      postEduTl
        .to("#postEduSection", { x: 0, duration: dur, ease: eas })
        .from("#postEduSection .innerRightPanel", { autoAlpha: 0, duration: dur, ease: eas, })
        .to("#postEduSection", { zIndex: 0,  duration: 0.001 })
        .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

      //Active
      document.querySelectorAll(".navLink").forEach( el => {
        el.classList.remove("active")
      })
      document.querySelector("#postEduLink").classList.add("active")
      document.querySelector(".titleBox").innerHTML = "Post-Education"
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
                <div className="navLink" onClick={lookingForHandler} id="whatImLookingLink" >What I'm Looking For</div>
                <div className="navLink" onClick={eduHandler} id="eduLink">Education</div>
                <div className="navLink" onClick={postEduHandler} id="postEduLink">Post-Education</div>
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

            <div className="section" id="meSection">
              <div className="secInnerContainer">
                <div className="storyText">
                <p>{t("cv.meSection.story.p.1")}</p>
                <p>{t("cv.meSection.story.p.2")}</p>
                </div>
                <div className="summaryText">
                  <ul>
                    <li>{t("cv.meSection.summary.li.1")}</li>
                    <li>{t("cv.meSection.summary.li.2")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section" id="whatImLookingSection">
              <div className="secInnerContainer">
                <div className="storyText">
                  <p>{t("cv.whatImLookingForSection.story.p.1")}</p>
                  <p>{t("cv.whatImLookingForSection.story.p.2")}</p>
                  <p>{t("cv.whatImLookingForSection.story.p.3")}</p>
                  <p>{t("cv.whatImLookingForSection.story.p.4")}</p>
                  <p>{t("cv.whatImLookingForSection.story.p.5")}</p>
                </div>
                <div className="summaryText">
                  <ul>
                    <li>{t("cv.whatImLookingForSection.summary.li.1")}</li>
                    <li>{t("cv.whatImLookingForSection.summary.li.2")}</li>
                    <li>{t("cv.whatImLookingForSection.summary.li.3")}</li>
                    <li>{t("cv.whatImLookingForSection.summary.li.4")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section" id="eduSection">
              < div className="secInnerContainer">
                <div className="storyText">
                  <p>{t("cv.educationSection.story.p.1")}</p>
                  <p>{t("cv.educationSection.story.p.2")}</p>
                  <p>{t("cv.educationSection.story.p.3")}</p>
                  <p>{t("cv.educationSection.story.p.4")}</p>
                </div>
                <div className="summaryText">
                  <ul>
                    <li>{t("cv.educationSection.summary.li.1")}</li>
                    <li>{t("cv.educationSection.summary.li.2")}</li>
                    <li>{t("cv.educationSection.summary.li.3")}</li>
                    <li>{t("cv.educationSection.summary.li.4")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section" id="postEduSection">
                < div className="secInnerContainer">
                    
                </div>
            </div>
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
