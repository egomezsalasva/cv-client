//IMPORTS
//-Modules
import React from 'react'
//-Components
import Heading from '../../global/shared/Heading'


//MAIN COMPONENT
const MeSection = () => {
    return (          
        <div className="section">

            <Heading headingName="Me" classProp="heading" />

            <div className="storyText">
                <p>I consider myself to be a generalist, as I find interest in a wide range of subjects. I find this helps me have a different perspective in a certain field.</p>
                <p>For better or for worse, I am somewhat of a perfectionist. It helps me do detailed work but it also slows down some projects.</p>
            </div>

            <div className="summaryText">
                <ul>
                <li>Generalist</li>
                <li>Perfectionist</li>
                </ul>
            </div>

        </div>  
    )
}
export default MeSection
