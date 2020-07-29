//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
//-Components
import Heading from './cvDeskComponents/leftPanel/Heading'
import CvNav from './cvDeskComponents/leftPanel/CvNav'
import CvButtons from './cvDeskComponents/rightPanel/CvButtons'
import MeSection from './cvDeskComponents/rightPanel/sections/Me'
import WhatImLookingForSection from './cvDeskComponents/rightPanel/sections/WhatImLookingFor'
import EducationSection from './cvDeskComponents/rightPanel/sections/Education'
//-Styling
import { fonts, responsiveWidthHeights, colors, zIndexes } from '../../data/styling/stylingVars'



//STYLE
//-Vars
const leftPanelWidth = responsiveWidthHeights.w800px
const rightPanelWidth = responsiveWidthHeights.w440px
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
const ulTranslate = "15px"
//-Components
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



//MAIN COMPONENT
function CvDesk() {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <div id="conatiner">

        <LeftPanel>
          <Heading/>
          <CvNav />
        </LeftPanel>

        <RightPanel>
          <CvButtons />

          <MeSection />
          <WhatImLookingForSection />
          <EducationSection />
            

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
export default CvDesk
