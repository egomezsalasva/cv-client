//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
//-Components
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const LinksSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="linksSection">
      <a href="https://github.com/egomezsalasva" target="_blank" rel="noopener noreferrer">https://github.com/egomezsalasva</a>
    </SectionWrapper>
  )
}
export default LinksSection
