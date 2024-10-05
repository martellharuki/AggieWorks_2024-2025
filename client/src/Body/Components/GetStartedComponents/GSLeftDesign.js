import { useEffect, useState } from 'react'
import './GSLeftDesign.css'

const GSLeftDesign = ({ isHovered }) => {
    const [width0, setWidth0] = useState(() => window.innerWidth * 0.026)
    const [width1, setWidth1] = useState(() => window.innerWidth * 0.026)
    const [width2, setWidth2] = useState(() => window.innerWidth * 0.026)
    const [width3, setWidth3] = useState(() => window.innerWidth * 0.026)
    const [width4, setWidth4] = useState(() => window.innerWidth * 0.026)

    useEffect(() => {
        if (isHovered) {
            setWidth0(window.innerWidth * 0.2)
            setWidth1(window.innerWidth * 0.1)
            setWidth2(window.innerWidth * 0.4)
            setWidth3(window.innerWidth * 0.15)
            setWidth4(window.innerWidth * 0.3)
        } else {
            setWidth0(window.innerWidth * 0.026)
            setWidth1(window.innerWidth * 0.026)
            setWidth2(window.innerWidth * 0.026)
            setWidth3(window.innerWidth * 0.026)
            setWidth4(window.innerWidth * 0.026)
        }
    }, [isHovered])

    return <div className="GS_left_container">
            <div className={`GS_left_bar_0 bar_animation`}  style={{ width: width0}}></div>
            <div className={`GS_left_bar_1 bar_animation`}  style={{ width: width1}}></div>
            <div className={`GS_left_bar_2 bar_animation`}  style={{ width: width2}}></div>
            <div className={`GS_left_bar_3 bar_animation`}  style={{ width: width3}}></div>
            <div className={`GS_left_bar_4 bar_animation`}  style={{ width: width4}}></div>
        </div>
}

export default GSLeftDesign