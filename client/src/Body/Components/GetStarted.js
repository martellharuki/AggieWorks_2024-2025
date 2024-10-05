import { useState } from 'react'
import './GetStarted.css'
import GSLeftDesign from './GetStartedComponents/GSLeftDesign'
import GSMiddleDesign from './GetStartedComponents/GSMiddleDesign'
import GSRightDesign from './GetStartedComponents/GSRightDesign'


const GetStarted = ({ handleGSTextShown }) => {
    const [isHovered, setIsHovered] = useState(false);

    const middleClicked = () => {
        handleGSTextShown(true)
    }

    return <div className="get_started_container">
        <GSLeftDesign isHovered={isHovered}></GSLeftDesign>
        <div className="middle_state_container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={middleClicked}
        >
            <GSMiddleDesign isHovered={isHovered}></GSMiddleDesign>
        </div>
        <GSRightDesign isHovered={isHovered}></GSRightDesign>
    </div>
}

export default GetStarted