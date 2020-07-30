//IMPORTS
//-Modules
import React, { useEffect, useRef } from 'react'


//MAIN COMPONENT
const SectionWrapper = ({children, sectionId}) => {

  
  // useEffect(() => {
  //   let containerHeight = document.querySelector(".secInnerContainer").clientHeight
  //   let textHeights = document.querySelectorAll(".positionContainer")
  //   textHeights.forEach( thisTextHeight => {
  //     if( thisTextHeight.clientHeight < containerHeight) {
  //       thisTextHeight.classList.add("centered")
  //     } else {
  //       thisTextHeight.classList.add("top")
  //     }
  //   })
  // }, [])

  useEffect(() => {
    let textHeights = document.querySelectorAll(".positionContainer")
    textHeights.forEach( thisTextHeight => {
      if(thisTextHeight.getBoundingClientRect().top > 175){
        console.log("stay centered")
      } else {
        console.log("add padding")
      }
    })
  }, [])

  

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
