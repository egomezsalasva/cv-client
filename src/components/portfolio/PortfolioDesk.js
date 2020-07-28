//IMPORTS
//-Modules
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap/all'
//-Components
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
const CvNav = styled.div`
  position: absolute;
  bottom: 50px;
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
    .viewBoxContainer{
        margin-top: 10px;
        text-align: center;
        a{
            color: ${colors.thmWhite};
            text-decoration: none;
            font-family: ${fonts.fntRegular};
            font-size: ${fonts.fntSz12};
            text-align: center;
            .viewSiteBox{
                display: inline-block;
                border: 1px solid ${colors.thmWhite};
                padding: 11px 20px 10px;
            }
        }
    }
    
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
      background: ${colors.thmWhite};
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


//-Components

//MAIN COMPONENT
function PortfolioDesk() {

  //Translation
    const { t } = useTranslation()
  //

  // Panel Animation

    //Create Timelines
      const scrannysTl = gsap.timeline()
      const apolloTl = gsap.timeline()
    //

    //Settings Vars
      const dur = 0.8
      const eas = "power1.out"
    //

    //Click Handlers
      const scrannysSectionHandler = () => {
        if( !apolloTl.isActive() ){

          //Section Anim
            const notId = `.section:not(#scrannysSection)`
            document.querySelector("#scrannysSection .secInnerContainer").style.opacity = 0
            document.querySelector("#scrannysSection").style.zIndex = 50
            scrannysTl
                .to("#scrannysSection", { x: 0, duration: dur, ease: eas, })
                .to("#scrannysSection .secInnerContainer", { opacity: 1, duration: 0.4, ease: eas })
                //Cleanup
                .to("#scrannysSection", { zIndex: 0,  duration: 0.001 })
                .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})
          //

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.querySelector("#scrannysLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Scranny's House"
          document.querySelector(".viewBoxContainer a").href = "https://www.scrannyshouse.com/"
        }
      }
      const apolloSectionHandler = () => {
        if( !scrannysTl.isActive()){

          //Section Anim
            const notId = `.section:not(#apolloSection)`
            document.querySelector("#apolloSection .secInnerContainer").style.opacity = 0
            document.querySelector("#apolloSection").style.zIndex = 50
            apolloTl
                .to("#apolloSection", { x: 0, duration: dur, ease: eas})
                .to("#apolloSection .secInnerContainer", { opacity: 1, duration: 0.4, ease: eas })
                .to("#apolloSection", { zIndex: 0,  duration: 0.001 })
                .to(notId, { x: `-${rightPanelWidth}`, duration: 0.001})
          //

          //Active
          document.querySelectorAll(".navLink").forEach( el => {
            el.classList.remove("active")
          })
          document.getElementById("apolloLink").classList.add("active")
          document.querySelector(".titleBox").innerHTML = "Apollo30"
          document.querySelector(".viewBoxContainer a").href = "https://apollo30.com/"
        }
      }
    //
  
  //
    
  return (
    <div id="conatiner">

        <LeftPanel>
          <HeadingContainer>
                <h4 className="titleBox">Scranny's House</h4>
                <div className="viewBoxContainer">
                    <a href="https://www.scrannyshouse.com/" target="_blank">
                        <div className="viewSiteBox">View Site</div>
                    </a>
                </div>
          </HeadingContainer>
          <CvNav>
              <div className="flexLine bottom">
                <div className="navLink active" onClick={scrannysSectionHandler} id="scrannysLink">Scranny's House</div>
                <div className="navLink" onClick={apolloSectionHandler} id="apolloLink">Apollo30</div>
              </div>
          </CvNav>
        </LeftPanel>


        <RightPanel>

            <div className="section" id="scrannysSection">
                <div className="secInnerContainer">
                    
                </div>
            </div>

            <div className="section" id="apolloSection">
                <div className="secInnerContainer">
                    
                </div>
            </div>

        </RightPanel>
    </div>      
  )
}
export default PortfolioDesk
