//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
//-Components
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const LetsMeetSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="letsMeetSection">
      <p>I do like my coffee, so lets meet for one. <br/> Send me an email so we can schedule a call first or a meeting over a cup of coffee.</p>
    </SectionWrapper>
  )
}
export default LetsMeetSection
