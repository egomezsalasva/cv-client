//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const EducationSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="eduSection">

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

    </SectionWrapper>
  )
}
export default EducationSection
