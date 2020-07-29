//IMPORTS
//-Modules
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap/all'
//-Styling
import { fonts, responsiveWidthHeights } from '../../../data/styling/stylingVars'



//STYLE
    //-Vars
        const leftPanelWidth = responsiveWidthHeights.w800px
        const rightPanelWidth = responsiveWidthHeights.w440px
    //-Components
        const CvNavContainer = styled.div`
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
//



//MAIN COMPONENT
const CvNav = () => {

  //Translation
    const { t } = useTranslation()
  //

  // Panel Animation

    //Create Timelines
      const meTl = gsap.timeline()
      const lookingForTl = gsap.timeline()
      const eduTl = gsap.timeline()
      const postEduTl = gsap.timeline()
      const skillsTl = gsap.timeline()
      const interestsTl = gsap.timeline()
    //

    //Settings Vars
      const dur = 0.8
      const eas = "power1.out"
    //

    //Click Handlers
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
          document.querySelector(".titleBox").innerHTML = t("cv.meSection.heading.1")
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
          document.querySelector(".titleBox").innerHTML = t("cv.whatImLookingForSection.heading.1")
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
          document.querySelector("#postEduSection .secInnerContainer").style.opacity = 0
          document.querySelector("#postEduSection").style.zIndex = 50
          postEduTl
            .to("#postEduSection", { x: 0, duration: dur, ease: eas })
            .to("#postEduSection .secInnerContainer", { autoAlpha: 1, duration: 0.4, ease: eas, })
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
      const skillsHandler = () => {
        if(!meTl.isActive() && !lookingForTl.isActive() && !eduTl.isActive()){
          //Section Anim
          const notId = `.section:not(#skillsSection)`
          document.querySelector("#skillsSection .secInnerContainer").style.opacity = 0
          document.querySelector("#skillsSection").style.zIndex = 50
          skillsTl
            .to("#skillsSection", { x: 0, duration: dur, ease: eas })
            .to("#skillsSection .secInnerContainer", { autoAlpha: 1, duration: 0.4, ease: eas, })
            .to("#skillsSection", { zIndex: 0,  duration: 0.001 })
            .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.querySelector("#skillsLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Skills"
        }
      }
      const interestsHandler = () => {
        if(!meTl.isActive() && !lookingForTl.isActive() && !eduTl.isActive()){
          //Section Anim
          const notId = `.section:not(#interestsSection)`
          document.querySelector("#interestsSection .secInnerContainer").style.opacity = 0
          document.querySelector("#interestsSection").style.zIndex = 50
          interestsTl
            .to("#interestsSection", { x: 0, duration: dur, ease: eas })
            .to("#interestsSection .secInnerContainer", { autoAlpha: 1, duration: 0.4, ease: eas, })
            .to("#interestsSection", { zIndex: 0,  duration: 0.001 })
            .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.querySelector("#interestsLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Interests"
        }
      }
      const languagesHandler = () => {
        if(!meTl.isActive() && !lookingForTl.isActive() && !eduTl.isActive()){
          //Section Anim
          const notId = `.section:not(#languagesSection)`
          document.querySelector("#languagesSection .secInnerContainer").style.opacity = 0
          document.querySelector("#languagesSection").style.zIndex = 50
          interestsTl
            .to("#languagesSection", { x: 0, duration: dur, ease: eas })
            .to("#languagesSection .secInnerContainer", { autoAlpha: 1, duration: 0.4, ease: eas, })
            .to("#languagesSection", { zIndex: 0,  duration: 0.001 })
            .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.querySelector("#languagesLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Languages"
        }
      }
      const linksHandler = () => {
        if(!meTl.isActive() && !lookingForTl.isActive() && !eduTl.isActive()){
          //Section Anim
          const notId = `.section:not(#linksSection)`
          document.querySelector("#linksSection .secInnerContainer").style.opacity = 0
          document.querySelector("#linksSection").style.zIndex = 50
          interestsTl
            .to("#linksSection", { x: 0, duration: dur, ease: eas })
            .to("#linksSection .secInnerContainer", { autoAlpha: 1, duration: 0.4, ease: eas, })
            .to("#linksSection", { zIndex: 0,  duration: 0.001 })
            .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.querySelector("#linksLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Links"
        }
      }
      const letsMeetHandler = () => {
        if(!meTl.isActive() && !lookingForTl.isActive() && !eduTl.isActive()){
          //Section Anim
          const notId = `.section:not(#letsMeetSection)`
          document.querySelector("#letsMeetSection .secInnerContainer").style.opacity = 0
          document.querySelector("#letsMeetSection").style.zIndex = 50
          interestsTl
            .to("#letsMeetSection", { x: 0, duration: dur, ease: eas })
            .to("#letsMeetSection .secInnerContainer", { autoAlpha: 1, duration: 0.4, ease: eas, })
            .to("#letsMeetSection", { zIndex: 0,  duration: 0.001 })
            .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.querySelector("#letsMeetLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Let's Meet"
        }
      }
    //
  
  //

  return (
    <CvNavContainer>
        <div className="flexLine top">
            <div className="navLink active" onClick={meSectionHandler} id="meLink">{t("cv.meSection.heading.1")}</div>
            <div className="navLink" onClick={lookingForHandler} id="whatImLookingLink" >{t("cv.whatImLookingForSection.heading.1")}</div>
            <div className="navLink" onClick={eduHandler} id="eduLink">Education</div>
            <div className="navLink" onClick={postEduHandler} id="postEduLink">Post-Education</div>
            <div className="navLink" onClick={skillsHandler} id="skillsLink">Skills</div>
        </div>
        <div className="flexLine bottom">
            <div className="navLink" onClick={interestsHandler} id="interestsLink">Interests</div>
            <div className="navLink" onClick={languagesHandler} id="languagesLink">Languages</div>
            <div className="navLink" onClick={linksHandler} id="linksLink">Links</div>
            <div className="navLink" onClick={letsMeetHandler} id="letsMeetLink">Let's Meet</div>
        </div>
    </CvNavContainer>        
  )
}
export default CvNav;
