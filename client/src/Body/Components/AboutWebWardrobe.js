import { useState } from 'react'
import './AboutWebWardrobe.css'
import AWCLeftDesign from './AboutWebComponents/AWCLeftDesign'
import AWCMiddleDesign from './AboutWebComponents/AWCMiddleDesign'
import AWCRightDesign from './AboutWebComponents/AWCRightDesign'

const AboutWebWardrobe = ({ handleAWCTextShown}) => {
    const [isHovered, setIsHovered] = useState(false);

    const middleClicked = () => {
        handleAWCTextShown(true)
    }

    return <div className="about_web_wardrobe_container">
        <AWCLeftDesign isHovered={isHovered}></AWCLeftDesign>
        <div className="middle_state_container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={middleClicked}
        >
        <AWCMiddleDesign isHovered={isHovered}></AWCMiddleDesign>
        </div>
        <AWCRightDesign isHovered={isHovered}></AWCRightDesign>
    </div>
}

export default AboutWebWardrobe