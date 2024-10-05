import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body'
import Login from './Login/Login'
import DashBoard from './Dashboard/DashBoard';

const AWCText = `
This is Website Wardrobe! It is a free online site meant for 
you to keep track of how many articles of clothing you own! Click "Add" for each article!
 Click Get Started to get started!
`
const AMCText = `
I am Haruki Martell, A third year student at UC Davis studying
Computer Science and Engineering. I am passionate about programming 
and especially like backend engineering!
`

function App() {
  const [darkenState, setDarkenState] = useState(false)
  const [AWCTextShown, setAWCTextShown] = useState(false)
  const [AMCTextShown, setAMCTextShown] = useState(false)
  const [GSTextShown, setGSTextShown] = useState(false)
  const [textData, setTextData] = useState(``)
  const [didUserLogin, setDidUserLogin] = useState(false)
  const [userData, setUserData] = useState({})


  useEffect(() => {
      if (AWCTextShown) {
        setTextData(AWCText)
        setDarkenState(true)
      } else if(AMCTextShown) {
        setTextData(AMCText)
        setDarkenState(true)
      } else if(GSTextShown){
        setDarkenState(true)
      } else {
        setTextData(``)
      }
  }, [AWCTextShown, AMCTextShown, GSTextShown])

  const handleAWCTextShown = (newBoolean) => {
    setAWCTextShown(newBoolean)
  }

  const handleAMCTextShown = (newBoolean) => {
    setAMCTextShown(newBoolean)
  }

  const handleGSTextShown = (newBoolean) => {
    setGSTextShown(newBoolean)
  }

  const handleDidUserLogin = (newBoolean) => {
    setDidUserLogin(newBoolean)
  }

  const handleUserData = (userData) => {
    setUserData(userData)
  }
  const handleDarkenClicked = () => {
    setDarkenState(false)
    setAWCTextShown(false)
    setAMCTextShown(false)
    setGSTextShown(false)
  }

  return (
    <div className="App">
      <div className='homescreen_shadow' style={{ visibility: darkenState ? 'visible' : 'hidden'}} onClick={handleDarkenClicked}></div>
      <div className={`homescreen_clicked_text ${darkenState ? 'clicked_text_fly_in' : 'clicked_text_fly_out'} `}>
      { GSTextShown  ? (
        <Login handleDarkenClicked={handleDarkenClicked} handleDidUserLogin={handleDidUserLogin} handleUserData={handleUserData}></Login>
      ) : (
        textData
      )}
      </div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Body handleAWCTextShown={handleAWCTextShown} handleAMCTextShown={handleAMCTextShown} handleGSTextShown={handleGSTextShown} didUserLogin={didUserLogin} handleDidUserLogin={handleDidUserLogin}></Body>}></Route>
          <Route path="/dashboard" element={<DashBoard userData={userData} handleUserData={handleUserData}></DashBoard>}></Route>
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
