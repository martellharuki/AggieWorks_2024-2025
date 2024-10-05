import { useEffect, useState } from 'react'
import './AMCMiddleDesign.css'

const AMCMiddleDesign = ({ isHovered }) => {
    const [fontSize, setFontSize] = useState(() => window.innerHeight * 0.075)
    
    useEffect(() => {
        if (isHovered) {
            setFontSize(window.innerHeight * 0.095)
        } else {
            setFontSize(window.innerHeight * 0.075)
        }
    }, [isHovered])


    return <div className="middle_container">
        <div className="AMC_text" style={{fontSize: fontSize}}>About Me</div>
    </div>
}

export default AMCMiddleDesign