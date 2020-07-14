//IMPORTS
//-Modules
import React, { useState } from 'react'
import styled from 'styled-components'
// import { gsap } from 'gsap'
//-Components
import Heading from '../global/shared/Heading'
//-Styling
import { devices, colors, fonts, responsiveWidthHeights } from '../../data/styling/stylingVars'


//STYLE
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
    border: 1px solid ${colors.front};
    font-family: ${fonts.fntRegular};
    font-size: ${fonts.fntSz12};
    text-align: center;
    cursor: pointer;
  }
  .textResizeButton{
    display: inline-block;
    padding: 13px 17px 10px;
    border: 1px solid #000;
    font-family: 'Graphik-Regular';
    font-size: 12px;
    text-align: center;
    cursor: pointer;
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
      color: ${colors.front};
    }
    a{
      display: block;
      font-size: ${fonts.fntSz14};
      color: ${colors.front};
    }
    .interestList{      
      li{
        width: 49%;
        display: inline-block;
        list-style-type: disc; /* BUG Disc can't be seen */
      }
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

        background: ${colors.back};
        border: 1px solid rgba(242,242,241,0.50);
        box-shadow: -5px -5px 10px 0 #FFFFFF, 5px 5px 10px 0 #F2F2F1;
        border-radius: 5px;

      }
    }
    .tagContainer:last-of-type{
        margin-bottom: -20px;
      }
    }
`


//MAIN COMPONENT
function Cv() {

  //Smooth Scrolling

  //Toggle Summary Button
    const [toggleSummaryButton, setToggleSummaryButton] = useState("OFF")

    const handleToggleSummaryButton = () => {

      if(toggleSummaryButton === "OFF"){
        //Animation

        //Handle switch of button text
        document.querySelector(".summaryButton span").innerHTML = "Tell Me Your Story"
        //Handle switch of cv text
        document.querySelectorAll(".storyText").forEach(e => { e.style.display = "none" })
        document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "block" })
        //Toggle State
        setToggleSummaryButton("ON")
      } else if (toggleSummaryButton === "ON") {
        //Animation

        //Handle switch of button text
        document.querySelector(".summaryButton span").innerHTML = "Don’t Make Me Read All This"
        //Handle switch of cv text
        document.querySelectorAll(".storyText").forEach(e => { e.style.display = "block" })
        document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "none" })
        //Toggle State
        setToggleSummaryButton("OFF")
      }
    }

  //Font Sizing
    const numberOfTimesButtonCanBeClicked = 4
    const numberOfPixelsToChange = 2
    const sectionHeadingFont = document.querySelectorAll(".section h4")
    const [headingFontSize, setHeadingFontSize] = useState(parseInt(fonts.fntSz14))
    const [headingLineHeight, setHeadingLineHeight] = useState(parseInt(fonts.lnHt20))
    const sectionParagraphFont = document.querySelectorAll(".section p")
    const [paragraphFontSize, setParagraphFontSize] = useState(parseInt(fonts.fntSz14))
    const [paragraphLineHeight, setParagraphLineHeight] = useState(parseInt(fonts.lnHt20))
    const sectionSubheadingFont = document.querySelectorAll(".section h5")
    const [subheadingFontSize, setSubheadingFontSize] = useState(parseInt(fonts.fntSz12))
    const sectionListItemFont = document.querySelectorAll(".section li")
    const [listItemFontSize, setListItemFontSize] = useState(parseInt(fonts.fntSz14))
    const sectionListItemInnerFont = document.querySelectorAll(".section li li")
    const [listItemInnerFontSize, setListItemInnerFontSize] = useState(parseInt(fonts.fntSz12))
    const [listItemInnerLineHeightSize, setListItemInnerLineHeightSize] = useState(parseInt(fonts.lnHt20))

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
        sectionHeadingFont.forEach(e => { e.style.fontSize = `${headingFontSize}px` })
        sectionHeadingFont.forEach(e => { e.style.lineHeight = `${headingLineHeight}px` })
      //Increment p
        setParagraphFontSize(paragraphFontSize + numberOfPixelsToChange)
        setParagraphLineHeight(paragraphLineHeight + numberOfPixelsToChange)
        if( paragraphFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
          setParagraphFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
        }
        if (paragraphLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
          setParagraphLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
        }
        sectionParagraphFont.forEach(e => { e.style.fontSize = `${paragraphFontSize}px` })
        sectionParagraphFont.forEach(e => { e.style.lineHeight = `${paragraphLineHeight}px` })
      //Increment H5
        setSubheadingFontSize(subheadingFontSize + numberOfPixelsToChange)
        if( subheadingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)) ){
          setSubheadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)))
        }
        sectionSubheadingFont.forEach(e => { e.style.fontSize = `${subheadingFontSize}px` })
      //Increment li
        setListItemFontSize(listItemFontSize + numberOfPixelsToChange)
        if( listItemFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)) ){
          setListItemFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz14)))
        }
        sectionListItemFont.forEach(e => { e.style.fontSize = `${listItemFontSize}px` })
        sectionListItemFont.forEach(e => { e.style.marginBottom = `${listItemFontSize}px` })
      //Increment li li
        setListItemInnerFontSize(listItemInnerFontSize + numberOfPixelsToChange)
        setListItemInnerLineHeightSize(listItemInnerLineHeightSize + numberOfPixelsToChange)
        if( listItemInnerFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)) ){
          setListItemInnerFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.fntSz12)))
        }
        if (listItemInnerLineHeightSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20))){
          setListItemInnerLineHeightSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + parseInt(fonts.lnHt20)))
        }
        sectionListItemInnerFont.forEach(e => { e.style.fontSize = `${listItemInnerFontSize}px` })
        sectionListItemInnerFont.forEach(e => { e.style.lineHeight = `${listItemInnerLineHeightSize}px` })
    }

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
        sectionHeadingFont.forEach(e => { e.style.fontSize = `${headingFontSize}px` })
        sectionHeadingFont.forEach(e => { e.style.lineHeight = `${headingLineHeight}px` })
      //Decrement p
        setParagraphFontSize(paragraphFontSize - numberOfPixelsToChange)
        setParagraphLineHeight(paragraphLineHeight - numberOfPixelsToChange)
        if( paragraphFontSize === parseInt(fonts.fntSz14) ){
          setParagraphFontSize( parseInt(fonts.fntSz14) )
        }
        if ( paragraphLineHeight === parseInt(fonts.lnHt20) ){
          setParagraphLineHeight(parseInt(fonts.lnHt20))
        }
        sectionParagraphFont.forEach(e => { e.style.fontSize = `${paragraphFontSize}px` })
        sectionParagraphFont.forEach(e => { e.style.lineHeight = `${paragraphLineHeight}px` })
      //Decrement H5
        setSubheadingFontSize(subheadingFontSize - numberOfPixelsToChange)
        if( subheadingFontSize === parseInt(fonts.fntSz12) ){
          setSubheadingFontSize(parseInt(fonts.fntSz12))
        }
        sectionSubheadingFont.forEach(e => { e.style.fontSize = `${subheadingFontSize}px` })
      //Decrement li
        setListItemFontSize(listItemFontSize - numberOfPixelsToChange)
        if( listItemFontSize === (parseInt(fonts.fntSz14)) ){
          setListItemFontSize(parseInt(fonts.fntSz14))
        }
        sectionListItemFont.forEach(e => { e.style.fontSize = `${listItemFontSize}px` })
        sectionListItemFont.forEach(e => { e.style.marginBottom = `${listItemFontSize}px` })
      //Decrement li li
        setListItemInnerFontSize(listItemInnerFontSize - numberOfPixelsToChange)
        setListItemInnerLineHeightSize(listItemInnerLineHeightSize - numberOfPixelsToChange)
        if( listItemInnerFontSize === parseInt(fonts.fntSz12) ){
          setListItemInnerFontSize(parseInt(fonts.fntSz12))
        }
        if (listItemInnerLineHeightSize === parseInt(fonts.lnHt20)){
          setListItemInnerLineHeightSize(parseInt(fonts.lnHt20))
        }
        sectionListItemInnerFont.forEach(e => { e.style.fontSize = `${listItemInnerFontSize}px` })
        sectionListItemInnerFont.forEach(e => { e.style.lineHeight = `${listItemInnerLineHeightSize}px` })
    }

    //Anim
    // const headingTl = gsap.timeline()
    // useEffect(() => {
    //     headingTl.from(".heading", 0.6, { x: "-150%", stagger: 0.4 })
    //              .from(".heading", 0.3, { color: "black", stagger: 0.4 }, "-=0.8")

    //              .from(".storyText", 0.8, { y: 5, autoAlpha: 0 }, "-=1.4")
    // }, [])

    

  //
  return (
    <>

      <CvButtonsContainer>
        <div className="summaryButton" onClick={handleToggleSummaryButton}>
          <span>Don’t Make Me Read All This</span>
        </div>
        <div className="textResizeButton increaseSizeButton" onClick={ handleIncrementFontSize}>
          <span>+</span>
        </div>
        <div className="textResizeButton decreseSizeButton" onClick={handleDecrementFontSize}>
          <span>-</span>
        </div>
      </CvButtonsContainer>
      
      <SectionsOuter>
        <div className="sectionsInner">

          <div className="section">

            <Heading headingName="Me" classProp="heading" />

            <div className="storyText">
             <p>I consider myself to be a generalist, due to the fact I find interest in a wide range of subjects. I reckon this helps me have a different perspective in a specific field.</p>
             <p>For better or for worse, I am somewhat of a perfectionist. It helps me produce detailed work, but it also slows down some projects.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Generalist</li>
                <li>Perfectionist</li>
              </ul>
            </div>
          </div>

          <div className="section">

            <Heading headingName="What I’m Looking For" classProp="heading" />

            <div className="storyText">
              <p>I’m preferibly looking for a business in it’s early stages, where there is shared responsability and tasks in different departments.</p>
              <p>I really value purpose-driven companies. These are companies who’s main goal is not monetary but solving an important issue in society.</p>
              <p>I also value autonomy. I like when companies let their employees take their own decisions and let individuals manage themselves.</p>
              <p>Finally, I value mastery. I like when companies let their employees progress in their personal long-term skills as as opposed to short-term goals. I belive this improves overall individual perfomance which is then translated to company performance.</p>
              <p>As an extra, I find the ’20% time’, where employees are given part of their time for side projects an interesting concept.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Early stage company</li>
                <li>Purpose-driven company</li>
                <li>Employee autonomy</li>
                <li>Long-term progression (Mastery)</li>
              </ul>
            </div>
          </div>

          <div className="section">

            <Heading headingName="Education" classProp="heading" />

            <div className="storyText">
              <p>It all started at an English school in Mallorca where I had to attend everyday from kindergarden until I got kicked out right before my A levels.</p>
              <p>After this, I went to a Spanish school to do the E.S.O. and Bachillerato.</p>
              <p>Then I went to London to do a year of A levels at Ealing Independent College but had to come back to Spain due to economic reasons.</p>
              <p>Back in Spain, I attended Elisava to do Graphic Design.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Queen’s College, Mallorca (GCSE’s)</li>
                <li>IES Bendinat, Mallorca (Bachillerato)</li>
                <li>Ealing Independent Collage, London (A levels)</li>
                <li>Elisava, Barcelona (Graphic Design)</li>
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

            <Heading headingName="Skills" classProp="heading" />

            <h5>Design</h5>
            <div className="tagContainer">
              <div className="tag">Sketch App</div>
              <div className="tag">Corportate Design</div>
            </div>
            <h5>Core Coding & Tools</h5>
            <div className="tagContainer">
              <div className="tag">HTML 5</div>
              <div className="tag">CSS 3</div>
              <div className="tag">CSS Grid</div>
              <div className="tag">SASS</div>
              <div className="tag">JavaScrips ES6</div>
              <div className="tag">Git</div>
              <div className="tag">npm</div>
              <div className="tag">Netlify</div>
              <div className="tag">Strapi CMS</div>
            </div>
            <h5>Front-end Development</h5>
            <div className="tagContainer">
              <div className="tag">React.js</div>
              <div className="tag">React Router</div>
              <div className="tag">React Hooks</div>
              <div className="tag">Styled Components</div>
              <div className="tag">Fetch API</div>
              <div className="tag">Axios</div>
              <div className="tag">GeenSock Animation Platform (GSAP)</div>
              <div className="tag">Svelte</div>
            </div>
            <h5>Back-end Development</h5>
            <div className="tagContainer">
              <div className="tag">Node.js</div>
              <div className="tag">Express</div>
              <div className="tag">MongoDB</div>
              <div className="tag">Mongoose</div>
              <div className="tag">mLab</div>
              <div className="tag">Firebase</div>
            </div>
            <h5>Code Testing</h5>
            <div className="tagContainer">
              <div className="tag">Jest</div>
              <div className="tag">Cypress</div>
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
export default Cv;
