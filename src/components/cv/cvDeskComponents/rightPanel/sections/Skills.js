//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
//-Components
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const SkillsSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="skillsSection">

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

    </SectionWrapper>
  )
}
export default SkillsSection
