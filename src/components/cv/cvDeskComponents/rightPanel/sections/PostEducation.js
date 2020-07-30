//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'



//MAIN COMPONENT
const PostEducationSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <div className="section" id="postEduSection">

        <div className="secInnerContainer">

            <div className="posTopContainer">

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

    </div> 
  )
}
export default PostEducationSection
