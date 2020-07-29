//IMPORTS
//-Modules
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap/all'
//-Components
import LeftPanelHeading from './cvDeskComponents/LeftPanelHeading'
import LeftPanelCvNav from './cvDeskComponents/LeftPanelCvNav'
//-Styling
import { fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'



//STYLE
const leftPanelWidth = responsiveWidthHeights.w800px
const rightPanelWidth = responsiveWidthHeights.w440px
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
const ulTranslate = "15px"


const LeftPanel = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: ${leftPanelWidth};
    height: 100vh;
    background: ${colors.thmBlack};
    z-index: ${zIndexes.leftPanelBg};
`
const RightPanel = styled.div`
  position: absolute; 
  top: 0;
  left: ${leftPanelWidth};

    .section{
      width: ${rightPanelWidth};
      height: 100vh;

      .secInnerContainer{
        position: absolute;
        top: 175px;
        width: ${rightPanelWidth};
        height: calc(100vh - 100px - 100px - 75px);
        overflow: scroll;

        .storyText{
          display: block;
          width: 360px;
          margin: 0 auto;
        }
        .summaryText{
          display: none;
          width: 360px;
          margin: 0 auto;
        }
        h5{
          font-family: ${fonts.fntSemiBold};
          font-size: ${fonts.fntSz12};
        }
        p{
          margin-bottom: 19px;
          font-family: ${fonts.fntRegular};
          font-weight: 300;
          font-size: ${fonts.fntSz14};
          line-height: ${fonts.lnHt22};
          color: ${props => props.theme.mode === 'light' ? colors.thmBlack :  colors.thmWhite};
        }
        a{
          display: block;
          font-size: ${fonts.fntSz14};
          color: ${props => props.theme.mode === 'light' ? colors.thmBlack :  colors.thmWhite};
        }
        ul{
          width: calc(100% - ${ulTranslate});
          transform:translateX(${ulTranslate});
          li{
            font-size: ${fonts.fntSz14};
            margin-bottom: ${fonts.fntSz14};
          }
          ul{
            margin-top: ${fonts.fntSz14};
            margin-bottom: 30px;
            list-style-type: disc;
            li{
              margin-bottom: 0;
              font-size: ${fonts.fntSz12};
              line-height: ${fonts.lnHt20};
            }
          }
        }
        .interestList{      
          li{
            width: 49%;
            display: inline-block;
            list-style-type: disc; /* BUG Disc can't be seen */
          }
        }
        .tagContainer{
          display: flex;
          flex-wrap: wrap;
          width: calc( 360px + (${tagsExtraWidth} * 2));
          position: relative;
          left: -${tagsExtraWidth};
          margin: 20px 0 calc(30px - ${tagBottomMargin});

          .tag{

            height: 30px;

            margin: 0 10px ${tagBottomMargin};
            padding: 0 10px;

            font-family: ${fonts.fntRegular};
            font-size: 11px;
            line-height: 30px;
            text-align: center;

            background: ${props => props.theme.mode === 'light' ? colors.thmWhite :  colors.thmBlack};
            border: 1px solid ${props => props.theme.mode === 'light' ? colors.thmWhiteBorder :  colors.thmBlackBorder};
            box-shadow: -5px -5px 10px 0 ${props => props.theme.mode === 'light' ? colors.thmWhiteShadowLight :  colors.thmBlackShadowLight}, 5px 5px 10px 0 ${ props => props.theme.mode === 'light' ? colors.thmWhiteShadowDark :  colors.thmBlackShadowDark};
            border-radius: 5px;

          }
        }
        .tagContainer:last-of-type{
          margin-bottom: -20px;
        }
      }
    }

    #meSection{
      position: absolute;
      top: 0;
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
    }
    #whatImLookingSection{
      position: absolute;
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #eduSection{
      position: absolute;
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #postEduSection{
      position: absolute;
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #skillsSection{
      position: absolute;
      background: ${colors.thmWhite};
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
`
const CvButtonsHeader= styled.div `
  position: fixed;
  left: ${leftPanelWidth};
  top: 100px;
  width: ${rightPanelWidth};
  height: 75px;
  background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
  z-index: 400;
`
const CvButtonsContainer = styled.div`
  text-align: center;
  .summaryButton{
    display: inline-block;
    padding: 13px 20px 10px;
    border: 1px solid ${props => props.theme.mode === 'light' ? colors.thmBlack :  colors.thmWhite};
    font-family: ${fonts.fntRegular};
    font-size: ${fonts.fntSz12};
    text-align: center;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }
  .textResizeButton{
    display: inline-block;
    padding: 13px 17px 10px;
    border: 1px solid ${props => props.theme.mode === 'light' ? colors.thmBlack :  colors.thmWhite};
    font-family: 'Graphik-Regular';
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }
  .increaseSizeButton{
    margin-left: 10px;
    border-right: 0px solid transparent;
  }
`


//-Components

//MAIN COMPONENT
function CvDesk() {

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

  //Toggle Summary Button

    //Toogle Summary Initial State
      const [toggleSummaryButton, setToggleSummaryButton] = useState("OFF")
    //

    //Handle Toggle Summary / Story
      const handleToggleSummaryButton = () => {
        if(toggleSummaryButton === "OFF"){
          //Animation
            //TODO Animate box
          //Handle switch of button text
            document.querySelector(".summaryButton span").innerHTML = t("cv.summaryButton.story.1")
          //Handle switch of cv text
            document.querySelectorAll(".storyText").forEach(e => { e.style.display = "none" })
            document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "block" })
          //Toggle State
            setToggleSummaryButton("ON")
        } else if (toggleSummaryButton === "ON") {
          //Animation
            //TODO Animate box
          //Handle switch of button text
            document.querySelector(".summaryButton span").innerHTML = t("cv.summaryButton.summary.1")
          //Handle switch of cv text
            document.querySelectorAll(".storyText").forEach(e => { e.style.display = "block" })
            document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "none" })
          //Toggle State
          setToggleSummaryButton("OFF")
        }
      }
    //

  //

  //Font Sizing

    //Font Size Variables
      const numberOfTimesButtonCanBeClicked = 4
      const numberOfPixelsToChange = 2
      const widthContainerSizeVar = 20
    //

    //Font Size Initial State
      const [headingFontSize, setHeadingFontSize] = useState(parseInt(fonts.fntSz14))
      const [headingLineHeight, setHeadingLineHeight] = useState(parseInt(fonts.lnHt20))
      const [paragraphFontSize, setParagraphFontSize] = useState(parseInt(fonts.fntSz14))
      const [paragraphLineHeight, setParagraphLineHeight] = useState(parseInt(fonts.lnHt20))
      const [subheadingFontSize, setSubheadingFontSize] = useState(parseInt(fonts.fntSz12))
      const [listItemFontSize, setListItemFontSize] = useState(parseInt(fonts.fntSz14))
      const [listItemInnerFontSize, setListItemInnerFontSize] = useState(parseInt(fonts.fntSz12))
      const [listItemInnerLineHeightSize, setListItemInnerLineHeightSize] = useState(parseInt(fonts.lnHt20))
      const [containerWidthSize, setContainerWidthSize] = useState(parseInt("360px"))
    //

    //Increment Font Size Button
      const handleIncrementFontSize = () => {
        //Increment Width Container
          setContainerWidthSize(containerWidthSize + widthContainerSizeVar)
          if( containerWidthSize === ((widthContainerSizeVar * numberOfTimesButtonCanBeClicked) + parseInt("360px")) ){
            setContainerWidthSize(((widthContainerSizeVar * numberOfTimesButtonCanBeClicked) + parseInt("360px")))
          }
        //
        //Increment H4
          setHeadingFontSize(headingFontSize + numberOfPixelsToChange)
          setHeadingLineHeight(headingLineHeight + numberOfPixelsToChange)
          if( headingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
            setHeadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
          }
          if(headingLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
            setHeadingLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
          }
        //
        //Increment p
          setParagraphFontSize(paragraphFontSize + numberOfPixelsToChange)
          setParagraphLineHeight(paragraphLineHeight + numberOfPixelsToChange)
          if( paragraphFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
            setParagraphFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
          }
          if (paragraphLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
            setParagraphLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
          }
        //
        //Increment H5
          setSubheadingFontSize(subheadingFontSize + numberOfPixelsToChange)
          if( subheadingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)) ){
            setSubheadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)))
          }
        //
        //Increment li
          setListItemFontSize(listItemFontSize + numberOfPixelsToChange)
          if( listItemFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
            setListItemFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
          }
        //
        //Increment li li
          setListItemInnerFontSize(listItemInnerFontSize + numberOfPixelsToChange)
          setListItemInnerLineHeightSize(listItemInnerLineHeightSize + numberOfPixelsToChange)
          if( listItemInnerFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)) ){
            setListItemInnerFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)))
          }
          if (listItemInnerLineHeightSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
            setListItemInnerLineHeightSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
          }
        //
      }
    //

    //Decrement Font Size Button
      const handleDecrementFontSize = () => {
        //Increment Width Container
          setContainerWidthSize(containerWidthSize - widthContainerSizeVar)
          if( containerWidthSize ===  parseInt("360px") ){
            setContainerWidthSize(parseInt("360px"))
          }
        //
        //Decrement H4
          setHeadingFontSize(headingFontSize - numberOfPixelsToChange)
          setHeadingLineHeight(headingLineHeight - numberOfPixelsToChange)
          if( headingFontSize === parseInt(fonts.fntSz14) ){
            setHeadingFontSize(parseInt(fonts.fntSz14))
          }
          if( headingLineHeight === parseInt(fonts.lnHt20) ){
            setHeadingLineHeight(parseInt(fonts.lnHt20))
          }
        //
        //Decrement p
          setParagraphFontSize(paragraphFontSize - numberOfPixelsToChange)
          setParagraphLineHeight(paragraphLineHeight - numberOfPixelsToChange)
          if( paragraphFontSize === parseInt(fonts.fntSz14) ){
            setParagraphFontSize( parseInt(fonts.fntSz14) )
          }
          if ( paragraphLineHeight === parseInt(fonts.lnHt20) ){
            setParagraphLineHeight(parseInt(fonts.lnHt20))
          }
        //
        //Decrement H5
          setSubheadingFontSize(subheadingFontSize - numberOfPixelsToChange)
          if( subheadingFontSize === parseInt(fonts.fntSz12) ){
            setSubheadingFontSize(parseInt(fonts.fntSz12))
          }
        //
        //Decrement li
          setListItemFontSize(listItemFontSize - numberOfPixelsToChange)
          if( listItemFontSize === (parseInt(fonts.fntSz14)) ){
            setListItemFontSize(parseInt(fonts.fntSz14))
          }
        //
        //Decrement li li
          setListItemInnerFontSize(listItemInnerFontSize - numberOfPixelsToChange)
          setListItemInnerLineHeightSize(listItemInnerLineHeightSize - numberOfPixelsToChange)
          if( listItemInnerFontSize === parseInt(fonts.fntSz12) ){
            setListItemInnerFontSize(parseInt(fonts.fntSz12))
          }
          if (listItemInnerLineHeightSize === parseInt(fonts.lnHt20)){
            setListItemInnerLineHeightSize(parseInt(fonts.lnHt20))
          }
        //
      }
    //

    //Increment / Decrement Refresh State
      useEffect(() => {
        const widthContainer = document.querySelectorAll(".storyText")
        widthContainer.forEach(e => { e.style.width = `${containerWidthSize}px` })
      }, [containerWidthSize])
      useEffect(() => {
        const sectionHeadingFont = document.querySelectorAll(".section h4")
        sectionHeadingFont.forEach(e => { e.style.fontSize = `${headingFontSize}px` })
      }, [headingFontSize])
      useEffect(() => {
        const sectionHeadingFont = document.querySelectorAll(".section h4")
        sectionHeadingFont.forEach(e => { e.style.lineHeight = `${headingLineHeight}px` })
      }, [headingLineHeight])
      useEffect(() => {
        const sectionParagraphFont = document.querySelectorAll(".section p")
        sectionParagraphFont.forEach(e => { e.style.fontSize = `${paragraphFontSize}px` })
      }, [paragraphFontSize])
      useEffect(() => {
        const sectionParagraphFont = document.querySelectorAll(".section p")
        sectionParagraphFont.forEach(e => { e.style.lineHeight = `${paragraphLineHeight}px` })
      }, [paragraphLineHeight])
      useEffect(() => {
        const sectionSubheadingFont = document.querySelectorAll(".section h5")
        sectionSubheadingFont.forEach(e => { e.style.fontSize = `${subheadingFontSize}px` })
      }, [subheadingFontSize])
      useEffect(() => {
        const sectionListItemFont = document.querySelectorAll(".section li")
        sectionListItemFont.forEach(e => { e.style.fontSize = `${listItemFontSize}px` })
        sectionListItemFont.forEach(e => { e.style.marginBottom = `${listItemFontSize}px` })
      }, [listItemFontSize])
      useEffect(() => {
        const sectionListItemInnerFont = document.querySelectorAll(".section li li")
        sectionListItemInnerFont.forEach(e => { e.style.fontSize = `${listItemInnerFontSize}px` })
      }, [listItemInnerFontSize])
      useEffect(() => {
        const sectionListItemInnerFont = document.querySelectorAll(".section li li")
        sectionListItemInnerFont.forEach(e => { e.style.lineHeight = `${listItemInnerLineHeightSize}px` })
      }, [listItemInnerLineHeightSize])
    //

  //
    
  return (
    <div id="conatiner">

        <LeftPanel>
          <LeftPanelHeading/>
          <LeftPanelCvNav />
        </LeftPanel>

        <RightPanel>

            <CvButtonsHeader>
              <CvButtonsContainer>
                <div className="summaryButton" onClick={handleToggleSummaryButton}>
                  <span>{toggleSummaryButton === "ON" ? t("cv.summaryButton.story.1") : t("cv.summaryButton.summary.1")}</span>
                </div>
                <div className="textResizeButton increaseSizeButton" onClick={handleIncrementFontSize}>
                  <span>+</span>
                </div>
                <div className="textResizeButton decreseSizeButton" onClick={handleDecrementFontSize}>
                  <span>-</span>
                </div>
              </CvButtonsContainer>
            </CvButtonsHeader>

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
                <div className="secInnerContainer">

                  <div className="storyText">
                    <p>{t("cv.postEducationSection.story.p.1")}</p>
                    <p>{t("cv.postEducationSection.story.p.2")}</p>
                    <p>{t("cv.postEducationSection.story.p.3")}</p>
                    <p>{t("cv.postEducationSection.story.p.4")}</p>
                    <p>{t("cv.postEducationSection.story.p.5")}</p>
                    <p>{t("cv.postEducationSection.story.p.6")}</p>
                    <p>{t("cv.postEducationSection.story.p.7")}</p>
                    <p>{t("cv.postEducationSection.story.p.8")}</p>
                    <p>{t("cv.postEducationSection.story.p.9")}</p>
                  </div>
                
                  <div className="summaryText">
                    <ul>
                      <li>{t("cv.postEducationSection.summary.1.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.1.role.1")}</li>
                        </ul>
                      </li>
                      <li>{t("cv.postEducationSection.summary.2.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.2.role.1")}</li>
                          <li>{t("cv.postEducationSection.summary.2.role.2")}</li>
                          <li>{t("cv.postEducationSection.summary.2.role.3")}</li>
                          <li>{t("cv.postEducationSection.summary.2.role.4")}</li>
                          <li>{t("cv.postEducationSection.summary.2.role.5")}</li>
                        </ul>
                      </li>
                      <li>{t("cv.postEducationSection.summary.3.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.3.role.1")}</li>
                          <li>{t("cv.postEducationSection.summary.3.role.2")}</li>
                        </ul>
                      </li>
                      <li>{t("cv.postEducationSection.summary.4.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.4.role.1")}</li>
                        </ul>
                      </li>
                      <li>{t("cv.postEducationSection.summary.5.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.5.role.1")}</li>
                          <li>{t("cv.postEducationSection.summary.6.role.2")}</li>
                        </ul>
                      </li>
                      <li>{t("cv.postEducationSection.summary.6.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.6.role.1")}</li>
                          <li>{t("cv.postEducationSection.summary.6.role.2")}</li>
                        </ul>
                      </li>
                      <li>{t("cv.postEducationSection.summary.7.place.1")}
                        <ul>
                          <li>{t("cv.postEducationSection.summary.7.role.1")}</li>
                          <li>{t("cv.postEducationSection.summary.7.role.2")}</li>
                          <li>{t("cv.postEducationSection.summary.7.role.3")}</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                </div>
            </div>

            <div className="section" id="skillsSection">
              <div className="secInnerContainer">
                <h5>{t("cv.skillsSection.content.1.subheading.1")}</h5>
                <div className="tagContainer">
                  <div className="tag">{t("cv.skillsSection.content.1.tags.1")}</div>
                  <div className="tag">{t("cv.skillsSection.content.1.tags.2")}</div>
                </div>
                <h5>{t("cv.skillsSection.content.2.subheading.1")}</h5>
                <div className="tagContainer">
                  <div className="tag">{t("cv.skillsSection.content.2.tags.1")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.2")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.3")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.4")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.5")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.6")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.7")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.8")}</div>
                  <div className="tag">{t("cv.skillsSection.content.2.tags.9")}</div>
                </div>
                <h5>{t("cv.skillsSection.content.3.subheading.1")}</h5>
                <div className="tagContainer">
                  <div className="tag">{t("cv.skillsSection.content.3.tags.1")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.2")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.3")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.4")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.5")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.6")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.7")}</div>
                  <div className="tag">{t("cv.skillsSection.content.3.tags.8")}</div>
                </div>
                <h5>{t("cv.skillsSection.content.4.subheading.1")}</h5>
                <div className="tagContainer">
                  <div className="tag">{t("cv.skillsSection.content.4.tags.1")}</div>
                  <div className="tag">{t("cv.skillsSection.content.4.tags.2")}</div>
                  <div className="tag">{t("cv.skillsSection.content.4.tags.3")}</div>
                  <div className="tag">{t("cv.skillsSection.content.4.tags.4")}</div>
                  <div className="tag">{t("cv.skillsSection.content.4.tags.5")}</div>
                  <div className="tag">{t("cv.skillsSection.content.4.tags.6")}</div>
                </div>
                <h5>{t("cv.skillsSection.content.5.subheading.1")}</h5>
                <div className="tagContainer">
                  <div className="tag">{t("cv.skillsSection.content.5.tags.1")}</div>
                  <div className="tag">{t("cv.skillsSection.content.5.tags.2")}</div>
                </div>
              </div>
            </div>

            <div className="section" id="interestsSection">
              <div className="secInnerContainer">

              </div>
            </div>
            <div className="section" id="languagesSection">
              <div className="secInnerContainer">

              </div>
            </div>
            <div className="section" id="linksSection">
              <div className="secInnerContainer">

              </div>
            </div>
            <div className="section" id="letsMeetSection">
              <div className="secInnerContainer">

              </div>
            </div>
        </RightPanel>

    </div>      
  )
}
export default CvDesk;
