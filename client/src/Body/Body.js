import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Body.css'
import AboutWebWardrobe from './Components/AboutWebWardrobe'
import AboutMe from './Components/AboutMe'
import GetStarted from './Components/GetStarted'

const Body = ({ handleAWCTextShown, handleAMCTextShown, handleGSTextShown, didUserLogin, handleDidUserLogin}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(didUserLogin){
            handleDidUserLogin(false)
            navigate('/dashboard')
        }
    }, [didUserLogin])





    return <div className="body_container">
        <div className="body_placeholder"></div>
        <AboutWebWardrobe handleAWCTextShown={handleAWCTextShown}></AboutWebWardrobe>
        <AboutMe handleAMCTextShown={handleAMCTextShown}></AboutMe>
        <GetStarted handleGSTextShown={handleGSTextShown}></GetStarted>
    </div>
}

export default Body