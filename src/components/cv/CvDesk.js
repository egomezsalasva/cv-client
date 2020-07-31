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
import PostEducationSection from './cvDeskComponents/rightPanel/sections/PostEducation'
import SkillsSection from './cvDeskComponents/rightPanel/sections/Skills'
import InterestsSection from './cvDeskComponents/rightPanel/sections/Interests'
import LanguagesSection from './cvDeskComponents/rightPanel/sections/Languages'
import LinksSection from './cvDeskComponents/rightPanel/sections/Links'
import LetsMeetSection from './cvDeskComponents/rightPanel/sections/LetsMeet'
//-Styling
import { fonts, responsiveWidthHeights, colors, zIndexes, heights } from '../../data/styling/stylingVars'



//STYLE
//-Vars
const leftPanelWidth = responsiveWidthHeights.w800px
const rightPanelWidth = responsiveWidthHeights.w440px
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
const ulTranslate = "15px"
const headerHeight = "100px"
const CvButtonsHeight = "75px"
const footerHeight = "100px"
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
        position: relative;
        height: 100vh;
        overflow: scroll;

        .positionContainer{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .scrollCont{
          position: absolute;
          top: 175px;
          left: 50%;
          transform: translate(-50%);
          padding-bottom: 120px;
        }
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
          width: 360px;
          margin: 0 auto;
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
          margin: 20px auto calc(30px - ${tagBottomMargin});

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
          /* margin-bottom: -20px; */
          margin-bottom: -10px;
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
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #interestsSection{
      position: absolute;
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #languagesSection{
      position: absolute;
      background: ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #linksSection{
      position: absolute;
      background:  ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
      top: 0;
      transform: translateX(-${rightPanelWidth});
    }
    #letsMeetSection{
      position: absolute;
      background:  ${ props => props.theme.mode === 'light' ? colors.thmWhite : colors.thmBlack };
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

          <Heading />
          <CvNav />
          
        </LeftPanel>


        <RightPanel>

          <CvButtons />

          <MeSection />
          <WhatImLookingForSection />
          <EducationSection />
          <PostEducationSection />
          <SkillsSection />
          <InterestsSection />
          <LanguagesSection />
          <LinksSection />
          <LetsMeetSection />

        </RightPanel>
    </div>      
  )
}
export default CvDesk
