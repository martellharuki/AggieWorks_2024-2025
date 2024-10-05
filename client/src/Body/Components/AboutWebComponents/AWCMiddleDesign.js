import { useEffect, useState } from 'react'
import './AWCMiddleDesign.css'

const AWCMiddleDesign = ({ isHovered }) => {
    const [fontSize, setFontSize] = useState(() => window.innerHeight * 0.075)
    
    useEffect(() => {
        if (isHovered) {
            setFontSize(window.innerHeight * 0.095)
        } else {
            setFontSize(window.innerHeight * 0.075)
        }
    }, [isHovered])


    return <div className="middle_container">
        <div className="AWC_text" style={{fontSize: fontSize}}>What We Do</div>
    </div>
}

export default AWCMiddleDesign