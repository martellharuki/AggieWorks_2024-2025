import { useEffect, useState } from 'react'
import './AWCRightDesign.css'

const AWCRightDesign = ({ isHovered }) => {
    const [width0, setWidth0] = useState(() => window.innerWidth * 0.026)
    const [width1, setWidth1] = useState(() => window.innerWidth * 0.026)
    const [width2, setWidth2] = useState(() => window.innerWidth * 0.026)
    const [width3, setWidth3] = useState(() => window.innerWidth * 0.026)
    const [width4, setWidth4] = useState(() => window.innerWidth * 0.026)

    useEffect(() => {
        if (isHovered) {
            setWidth0(window.innerWidth * 0.25)
            setWidth1(window.innerWidth * 0.1)
            setWidth2(window.innerWidth * 0.16)
            setWidth3(window.innerWidth * 0.32)
            setWidth4(window.innerWidth * 0.40)
        } else {
            setWidth0(window.innerWidth * 0.026)
            setWidth1(window.innerWidth * 0.026)
            setWidth2(window.innerWidth * 0.026)
            setWidth3(window.innerWidth * 0.026)
            setWidth4(window.innerWidth * 0.026)
        }
    }, [isHovered])

    return <div className="AWC_right_container">
        <div className="AWC_bar_container">
        <div className={`AWC_right_bar_0 bar_animation right_bar`}  style={{ width: width0}}></div>
            <div className={`AWC_right_bar_1 bar_animation right_bar`}  style={{ width: width1}}></div>
            <div className={`AWC_right_bar_2 bar_animation right_bar`}  style={{ width: width2}}></div>
            <div className={`AWC_right_bar_3 bar_animation right_bar`}  style={{ width: width3}}></div>
            <div className={`AWC_right_bar_4 bar_animation right_bar`}  style={{ width: width4}}></div>
        </div>
        </div>
}

export default AWCRightDesign