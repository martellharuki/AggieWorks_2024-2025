import { useState } from 'react'
import './Login.css'

const Login = ({ handleDarkenClicked, handleDidUserLogin, handleUserData }) => {
    const [userNameInputValue, setUserNameInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [errorText, setErrorText] = useState('')

    const handleUserNameChange = (event) => {
        setUserNameInputValue(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPasswordInputValue(event.target.value)
    }

    const handleLogIn = async () => {

        const queryParams = {
            username: userNameInputValue,
            password: passwordInputValue
        }
        if(userNameInputValue == "" || passwordInputValue == ""){
            setErrorText("Fill out the fields")
        } else {
            try {
                const response = await fetch('/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(queryParams)
                })

                if(response.ok){
                    const data = await response.json()
                    if(data.status == "No Match"){
                        setErrorText("Username or Password Incorrect")
                    } else {
                        const dataToBeKept = {
                            username: userNameInputValue,
                            num: data.userWardrobeData.num
                        }
                        handleUserData(dataToBeKept)
                        handleDarkenClicked()
                        handleDidUserLogin(true)
                    }
                } else {
                    setErrorText("Something Went Wrong")
                }
            } catch {
                console.log("Inside error handling")
                setErrorText("Something Went Wrong")
            }
    }



    }

    const handleSignUp = async () => {
        const queryParams = {
            username: userNameInputValue,
            password: passwordInputValue
        }
        if(userNameInputValue == "" || passwordInputValue == ""){
            setErrorText("Fill out the fields")
        } else {
            try {
                const response = await fetch('/signUp', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(queryParams)
                })
    
                if(response.ok){
                    const data = await response.json();
                    console.log(data)
                    if(data.status == "Taken"){
                        setErrorText("Username Taken")
                    } else {
                        const dataToBeKept = {
                            username: userNameInputValue,
                            num: data.userWardrobeData.num
                        }
                        handleUserData(dataToBeKept)
                        handleDarkenClicked()
                        handleDidUserLogin(true)
                    }
                } else {
                    setErrorText("Something Went Wrong")
                }
            } catch {
                setErrorText("Something Went Wrong")
            }
        }
        
    }


    return <div className="login_container">
        <div className="login_text_main_container">
            <div className="login_text_placeholder"></div>
            <div className="login_text_entry_container">
                <div className="login_text_entry_placeholder"></div>
            <input 
                type="text" 
                value={userNameInputValue} 
                onChange={handleUserNameChange} 
                placeholder="Username"
                className='login_text_input'
            ></input>
                <div className = "login_text_entry_space"></div>
            <input 
                type="text" 
                value={passwordInputValue} 
                onChange={handlePasswordChange} 
                placeholder="Password"
                className='login_text_input'
            ></input>
            <div className="login_text_entry_placeholder"></div>
        </div>
        </div>
        <div className="log_in_button_container">
            <button onClick={handleLogIn} className="log_in_button"> Log In</button>
            <div className="log_in_button_placeholder"></div>
            <button onClick={handleSignUp} className="log_in_button">Sign Up</button>
        </div>
        <div className="log_in_error_container">{errorText}</div>
    </div>
}

export default Login