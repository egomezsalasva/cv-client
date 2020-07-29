//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'



//MAIN COMPONENT
const EducationSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
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
  )
}
export default EducationSection
