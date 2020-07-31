//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
//-Components
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const LanguagesSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="languagesSection">
      <ul>
        <li>Spanish: First Language</li>
        <li>English: Second Language</li>
      </ul>
    </SectionWrapper>
  )
}
export default LanguagesSection
