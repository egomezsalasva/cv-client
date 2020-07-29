//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'



//MAIN COMPONENT
const MeSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <div className="section" id="meSection">

        <div className="secInnerContainer">

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

    </div>  
  )
}
export default MeSection
