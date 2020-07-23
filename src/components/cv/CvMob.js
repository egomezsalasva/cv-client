//IMPORTS
//-Modules
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
// import { gsap } from 'gsap'
//-Components
import Heading from '../global/shared/Heading'
//-Styling
import { devices, fonts, responsiveWidthHeights, colors } from '../../data/styling/stylingVars'


//STYLE
//-Variables
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
const ulTranslate = "15px"
//-Components
const CvButtonsContainer = styled.div`
  margin-top: 30px;
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
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 210px - 60px);
  margin-top: 30px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  .section{
    max-width: 600px;
    margin: 0 ${responsiveWidthHeights.w30px} 50px;
    @media ${devices.tablet} {
      margin: 0 auto 50px;
    }

    .storyText{
      display: block;
    }
    .summaryText{
      display: none;
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
      line-height: ${fonts.lnHt20};
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

      width: calc(100% + calc(${tagsExtraWidth} * 2));

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
`


//MAIN COMPONENT
function CvMob() {

  //Smooth Scrolling
    //TODO Smooth Scrolling
  //

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

    //Font Size Variables
      const numberOfTimesButtonCanBeClicked = 4
      const numberOfPixelsToChange = 2
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
    //

    //Increment Font Size Button
      const handleIncrementFontSize = () => {
        //Increment H4
          setHeadingFontSize(headingFontSize + numberOfPixelsToChange)
          setHeadingLineHeight(headingLineHeight + numberOfPixelsToChange)
          if( headingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
            setHeadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
          }
          if(headingLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
            setHeadingLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
          }
        //Increment p
          setParagraphFontSize(paragraphFontSize + numberOfPixelsToChange)
          setParagraphLineHeight(paragraphLineHeight + numberOfPixelsToChange)
          if( paragraphFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
            setParagraphFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
          }
          if (paragraphLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
            setParagraphLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
          }
        //Increment H5
          setSubheadingFontSize(subheadingFontSize + numberOfPixelsToChange)
          if( subheadingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)) ){
            setSubheadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)))
          }
        //Increment li
          setListItemFontSize(listItemFontSize + numberOfPixelsToChange)
          if( listItemFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
            setListItemFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
          }
        //Increment li li
          setListItemInnerFontSize(listItemInnerFontSize + numberOfPixelsToChange)
          setListItemInnerLineHeightSize(listItemInnerLineHeightSize + numberOfPixelsToChange)
          if( listItemInnerFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)) ){
            setListItemInnerFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)))
          }
          if (listItemInnerLineHeightSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
            setListItemInnerLineHeightSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
          }
      }
    //

    //Decrement Font Size Button
      const handleDecrementFontSize = () => {
        //Decrement H4
          setHeadingFontSize(headingFontSize - numberOfPixelsToChange)
          setHeadingLineHeight(headingLineHeight - numberOfPixelsToChange)
          if( headingFontSize === parseInt(fonts.fntSz14) ){
            setHeadingFontSize(parseInt(fonts.fntSz14))
          }
          if( headingLineHeight === parseInt(fonts.lnHt20) ){
            setHeadingLineHeight(parseInt(fonts.lnHt20))
          }
        //Decrement p
          setParagraphFontSize(paragraphFontSize - numberOfPixelsToChange)
          setParagraphLineHeight(paragraphLineHeight - numberOfPixelsToChange)
          if( paragraphFontSize === parseInt(fonts.fntSz14) ){
            setParagraphFontSize( parseInt(fonts.fntSz14) )
          }
          if ( paragraphLineHeight === parseInt(fonts.lnHt20) ){
            setParagraphLineHeight(parseInt(fonts.lnHt20))
          }
        //Decrement H5
          setSubheadingFontSize(subheadingFontSize - numberOfPixelsToChange)
          if( subheadingFontSize === parseInt(fonts.fntSz12) ){
            setSubheadingFontSize(parseInt(fonts.fntSz12))
          }
        //Decrement li
          setListItemFontSize(listItemFontSize - numberOfPixelsToChange)
          if( listItemFontSize === (parseInt(fonts.fntSz14)) ){
            setListItemFontSize(parseInt(fonts.fntSz14))
          }
        //Decrement li li
          setListItemInnerFontSize(listItemInnerFontSize - numberOfPixelsToChange)
          setListItemInnerLineHeightSize(listItemInnerLineHeightSize - numberOfPixelsToChange)
          if( listItemInnerFontSize === parseInt(fonts.fntSz12) ){
            setListItemInnerFontSize(parseInt(fonts.fntSz12))
          }
          if (listItemInnerLineHeightSize === parseInt(fonts.lnHt20)){
            setListItemInnerLineHeightSize(parseInt(fonts.lnHt20))
          }
      }
    //

    //Increment / Decrement Refresh State
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
    <>

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
      
      <SectionsOuter>
        <div className="sectionsInner">

          <div className="section">

            <Heading headingName={t("cv.meSection.heading.1")} classProp="heading" />

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

          <div className="section">

            <Heading headingName={t("cv.whatImLookingForSection.heading.1")} classProp="heading" />

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

          <div className="section">

            <Heading headingName={t("cv.educationSection.heading.1")} classProp="heading" />

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

          <div className="section">

            <Heading headingName="Post-Education" classProp="heading" />

            <div className="storyText">
              <p>Once I left Elisava I realized I was interested in business. So I decided to start making clothing as it was a business I could afford to start, and made me enough money to live.</p>
              <p>For the clothing, I needed a website so I started to learn how to make websites with an Adobe program called Muse.</p>
              <p>Then I realized I could earn some money making websites for other people, so I moved back to Mallorca and started Gryd-Design.</p>
              <p>With Gryd-Design I made some flyers and walked around doing door-to-door sales. Once I got a few projects running (Carpenter, Real Estate, Film Director, Hedge Fund, Artist, Fruit Shop) I managed to save enough to hire a friend to do the sales side. This allowed me to focus on website creation. I then hired an off-shore virtual assistant to investigate which businesses didn’t have a websites so we could be more efficient on the sales side.</p>
              <p>On the way I saw a lot of inspiration on websites like awwwards and cssdesignawards and saw limitations with Adobe Muse. So I started learning coding on 2014 roughly. I learnt HTML, CSS and JavaScript.</p>
              <p>During this time I bought a fucking expensive screen-printing machine so I could offer that as an extra service to my customers at Gryd. It also allowed me to retake the clothing line I wanted to initially create.</p>
              <p>I got offered a job for Estiber in Barcelona, so I moved back there. I thought it was a good idea since it was starting to become a tech-hub at the time.</p>
              <p>I worked for Estiber for a year as a Lead Designer and was also involved in some of the Marketing roles (hand-coding Mailchimp emails). After the year we decided our values didn’t match so we stopped working together.</p>
              <p>I went back into selling clothes while I learnt new technologies like React and Node and its correspondant modules and libraries. I worked on personal projects too, and got a few odd jobs here and there making webistes. I ended up catching the attention of the founder of Apollo30 in a cafe and we got on well, so he offered me to work with them and I have been working there as a freelancer ever since.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Clothing Freelance, Barcelona
                  <ul>
                    <li>Sales</li>
                  </ul>
                </li>
                <li>Gryd-Design, Mallorca
                  <ul>
                    <li>Design</li>
                    <li>Web Development</li>
                    <li>Sales</li>
                    <li>Management</li>
                    <li>Screen-printing</li>
                  </ul>
                </li>
                <li>Viatges Estiber, Barcelona
                  <ul>
                    <li>Lead Design</li>
                    <li>Marketing</li>
                  </ul>
                </li>
                <li>Clothing Freelance, Barcelona
                  <ul>
                    <li>Sales</li>
                  </ul>
                </li>
                <li>Websites Freelance, Barcleona
                  <ul>
                    <li>Design</li>
                    <li>Web Development</li>
                  </ul>
                </li>
                <li>Apollo30, Barcleona
                  <ul>
                    <li>Design</li>
                    <li>Web Development</li>
                  </ul>
                </li>
                <li>Scranny's House, Barcelona
                  <ul>
                    <li>Sales</li>
                    <li>Design</li>
                    <li>Web Development</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="section">

            <Heading headingName={t("cv.skillsSection.heading.1")} classProp="heading" />

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

          <div className="section">

            <Heading headingName="Interests" classProp="heading" />

            <ul className="interestList">
              <li>Cryptography</li>
              <li>Behavioural Science</li>
              <li>Neuroscience</li>
              <li>New Technologies</li>
              <li>Music Composition</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Nutrition</li>
              <li>Reading</li>
              <li>User Experience</li>
              <li>3D & AR/VR</li>
              <li>Blockchain</li>
            </ul>
          </div>

          <div className="section">

            <Heading headingName="Languages" classProp="heading" />

            <ul>
              <li>Spanish: First Language</li>
              <li>English: Second Language</li>
            </ul>
          </div>

          <div className="section">

            <Heading headingName="Links" classProp="heading" />
  
            <a href="https://github.com/egomezsalasva" target="_blank" rel="noopener noreferrer">https://github.com/egomezsalasva</a>
          </div>

          <div className="section">

            <Heading headingName="Lets Meet" classProp="heading" />
  
            <p>I do like my coffee, so lets meet for one. <br/> Send me an email so we can schedule a call first or a meeting over a cup of coffee.</p>
          </div>

        </div>
      </SectionsOuter>
      
    </>      
  )
}
export default CvMob;
