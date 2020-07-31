//IMPORTS
//-Modules
import React from 'react'
import { useTranslation } from 'react-i18next'
//-Components
import SectionWrapper from './SectionWrapper'



//MAIN COMPONENT
const InterestsSection = () => {

  //Translation
    const { t } = useTranslation()
  //
    
  return (
    <SectionWrapper sectionId="interestsSection">
      <ul className="interestList">
        <li>Cryptography</li>
        <li>Behavioural Science</li>
        <li>Neuroscience</li>
        <li>New Technologies</li>
        <li>Music Composition</li>
        <li>Business</li>
        <li>Economy</li>
        <li>Nutrition</li>
        <li>Reading</li>
        <li>User Experience</li>
        <li>3D & AR/VR</li>
        <li>Blockchain</li>
      </ul>
    </SectionWrapper>
  )
}
export default InterestsSection
