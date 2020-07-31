//IMPORTS
//-Modules
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
//-Styling
import { fonts, responsiveWidthHeights, colors } from '../../../../data/styling/stylingVars'



//STYLE
    //-Vars
    const leftPanelWidth = responsiveWidthHeights.w800px
    const rightPanelWidth = responsiveWidthHeights.w440px
    //-Components
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
//



//MAIN COMPONENT
function CvButtons() {

  //Translation
    const { t } = useTranslation()
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

    //Check height
      const checkHeight = () => {
        const cont02 = document.querySelectorAll(".positionContainer")
        cont02.forEach( thisCont => {
          let contRec = thisCont.getBoundingClientRect()
          if(contRec.top < 175) {
            thisCont.classList.add("scrollCont")
          }
        })
      }
    //

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
        //Check height
          checkHeight()
        //
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
        //Check height
          checkHeight()
        //
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
        checkHeight()
      }, [containerWidthSize])
      useEffect(() => {
        const sectionHeadingFont = document.querySelectorAll(".section h4")
        sectionHeadingFont.forEach(e => { e.style.fontSize = `${headingFontSize}px` })
        checkHeight()
      }, [headingFontSize])
      useEffect(() => {
        const sectionHeadingFont = document.querySelectorAll(".section h4")
        sectionHeadingFont.forEach(e => { e.style.lineHeight = `${headingLineHeight}px` })
        checkHeight()
      }, [headingLineHeight])
      useEffect(() => {
        const sectionParagraphFont = document.querySelectorAll(".section p")
        sectionParagraphFont.forEach(e => { e.style.fontSize = `${paragraphFontSize}px` })
        checkHeight()
      }, [paragraphFontSize])
      useEffect(() => {
        const sectionParagraphFont = document.querySelectorAll(".section p")
        sectionParagraphFont.forEach(e => { e.style.lineHeight = `${paragraphLineHeight}px` })
        checkHeight()
      }, [paragraphLineHeight])
      useEffect(() => {
        const sectionSubheadingFont = document.querySelectorAll(".section h5")
        sectionSubheadingFont.forEach(e => { e.style.fontSize = `${subheadingFontSize}px` })
        checkHeight()
      }, [subheadingFontSize])
      useEffect(() => {
        const sectionListItemFont = document.querySelectorAll(".section li")
        sectionListItemFont.forEach(e => { e.style.fontSize = `${listItemFontSize}px` })
        sectionListItemFont.forEach(e => { e.style.marginBottom = `${listItemFontSize}px` })
        checkHeight()
      }, [listItemFontSize])
      useEffect(() => {
        const sectionListItemInnerFont = document.querySelectorAll(".section li li")
        sectionListItemInnerFont.forEach(e => { e.style.fontSize = `${listItemInnerFontSize}px` })
        checkHeight()
      }, [listItemInnerFontSize])
      useEffect(() => {
        const sectionListItemInnerFont = document.querySelectorAll(".section li li")
        sectionListItemInnerFont.forEach(e => { e.style.lineHeight = `${listItemInnerLineHeightSize}px` })
        checkHeight()
      }, [listItemInnerLineHeightSize])
    //

  //

  useEffect( () => {
    const cont02 = document.querySelectorAll(".positionContainer")
    cont02.forEach( thisCont => {
      let contRec = thisCont.getBoundingClientRect()
      if(contRec.top < 175) {
        thisCont.classList.add("scrollCont")
      }
    })
  }, [])
 
  return (
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
  )
}
export default CvButtons;
