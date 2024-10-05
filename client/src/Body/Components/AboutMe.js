import { useState } from 'react'
import './AboutMe.css'
import AMCLeftDesign from './AboutMeComponents/AMCLeftDesign'
import AMCMiddleDesign from './AboutMeComponents/AMCMiddleDesign'
import AMCRightDesign from './AboutMeComponents/AMCRightDesign'

const AboutMe = ({ handleAMCTextShown }) => {
    const [isHovered, setIsHovered] = useState(false);

    const middleClicked = () => {
        handleAMCTextShown(true)
    }

    return <div className="about_me_container">
        <AMCLeftDesign isHovered={isHovered}></AMCLeftDesign>
        <div className="middle_state_container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={middleClicked}
        >
        <AMCMiddleDesign isHovered={isHovered}></AMCMiddleDesign>
        </div>
        <AMCRightDesign isHovered={isHovered}></AMCRightDesign>
    </div>
}

export default AboutMe