//IMPORTS
//-Modules
import React, { useEffect, useRef } from 'react'


//MAIN COMPONENT
const SectionWrapper = ({children, sectionId}) => {




  
  return (
    <div className="section" id={sectionId}>
        <div className="secInnerContainer">
            <div className="positionContainer">
              {children}
            </div>
        </div>
    </div>  
  )
}
export default SectionWrapper
