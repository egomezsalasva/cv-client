//IMPORTS
//-Modules
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap/all'
//-Components
//-Styling
import { fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'
import scrannysImgDesk from '../../images/scrannysHouseDesk.png'
import apolloImgDesk from '../../images/apolloDesk.png'



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
const LeftNav = styled.div`
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
                padding: 12px 20px 10px;
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
        width: ${rightPanelWidth};
        height: calc(100vh - 20px);
        overflow: scroll;

        .imgClip{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 360px;
            height: 360px;
            overflow: hidden;
            .imgContainer{
                width: 360px;
                height: 360px;
                object-fit: cover;
            }
        }
        
      }
    }

    #scrannysSection{
      position: absolute;
      top: 0;
      background: ${colors.thmWhite};
    }
    #apolloSection{
      position: absolute;
      background: ${colors.thmWhite};
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
      const linEas = "power0.out"
    //

    //Click Handlers
      const scrannysSectionHandler = () => {
        if( !apolloTl.isActive() ){

          //Section Anim
            const notId = `.section:not(#scrannysSection)`
            document.querySelector("#scrannysSection .secInnerContainer").style.opacity = 0
            document.querySelector("#scrannysSection").style.zIndex = 50
            scrannysTl
                .to("#scrannysSection", { x: 0, duration: dur, ease: linEas, })
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
                .to("#apolloSection", { x: 0, duration: dur, ease: linEas})
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

    const scrannysImgTl = gsap.timeline({reversed: false})
    
    const testMouseOn = () => {
        scrannysImgTl
            .to(".imgClip", { scale: 0.9, duration: 1, ease: eas })
            .to(".imgContainer", { scale: 1.3, duration: 1, ease: eas }, "-=1")
    }
    const testMouseOut = () => {
        scrannysImgTl
            .to(".imgContainer", { scale: 1, duration: 1, ease: eas })
            .to(".imgClip", { scale: 1, duration: 1, ease: eas }, "-=1")
            
    }
 


  //
    
  return (
    <div id="conatiner">

        <LeftPanel>
          <HeadingContainer>
                <h4 className="titleBox">Scranny's House</h4>
                <div className="viewBoxContainer">
                    <a href="https://www.scrannyshouse.com/" target="_blank" onMouseEnter={() => testMouseOn()} onMouseLeave={() => testMouseOut()}>
                        <div className="viewSiteBox">View Site</div>
                    </a>
                </div>
          </HeadingContainer>
          <LeftNav>
              <div className="flexLine bottom">
                <div className="navLink active" onClick={scrannysSectionHandler} id="scrannysLink">Scranny's House</div>
                <div className="navLink" onClick={apolloSectionHandler} id="apolloLink">Apollo30</div>
              </div>
          </LeftNav>
        </LeftPanel>


        <RightPanel>

            <div className="section" id="scrannysSection">
                <div className="secInnerContainer">
                    <div className="imgClip">
                        <img className="imgContainer" src={scrannysImgDesk}></img>
                    </div>
                </div>
            </div>

            <div className="section" id="apolloSection">
                <div className="secInnerContainer">
                    <div className="imgClip">
                        <img className="imgContainer" src={apolloImgDesk}></img>
                    </div>
                </div>
            </div>

        </RightPanel>
    </div>      
  )
}
export default PortfolioDesk
