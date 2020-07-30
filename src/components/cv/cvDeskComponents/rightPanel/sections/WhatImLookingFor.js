//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const WhatImLookingForSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="whatImLookingSection">

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

    </SectionWrapper>
  )
}
export default WhatImLookingForSection
