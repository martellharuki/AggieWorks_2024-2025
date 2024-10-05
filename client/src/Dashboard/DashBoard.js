import { useNavigate } from 'react-router-dom'
import './DashBoard.css'


const DashBoard = ({ userData, handleUserData }) => {
    const navigate = useNavigate()

    const handleSubtract = async () => {
        let newNum = Math.max(userData.num - 1, 0)
        const queryParams = {
            username: userData.username,
            num: newNum
        }
        try {
            const response = await fetch('/update', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(queryParams)
            })

            if(response.ok){
                const data = await response.json();
                console.log(data)
                const dataToBeKept = {
                    username: userData.username,
                    num: data.userWardrobeData.num
                }
                handleUserData(dataToBeKept)
            } else {
                console.log("error occured")
            }
        } catch(err) {
            console.log("error occured and caught", err)
        }
    }

    const handleAdd = async () => {
        let newNum = userData.num + 1
        const queryParams = {
            username: userData.username,
            num: newNum
        }
        try {
            const response = await fetch('/update', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(queryParams)
            })

            if(response.ok){
                const data = await response.json();
                console.log(data)
                const dataToBeKept = {
                    username: userData.username,
                    num: data.userWardrobeData.num
                }
                handleUserData(dataToBeKept)
            } else {
                console.log("error occured")
            }
        } catch(err) {
            console.log("error occured and caught: ", err)
        }
    }

    const handleLogOut = () => {
        handleUserData({})
        navigate('/')
    }


    console.log("User data: ", userData)
    return <div className="body_container">
        <button onClick={handleLogOut}className = "home_button">Home</button>
        <div className="number_container">
        <div className="number_counter">{userData.num}</div>
        </div>
        <div className="dashboard_button_container">
        <button onClick={handleSubtract}className="dashboard_button"> Subtract</button>
            <div className="log_in_button_placeholder"></div>
            <button onClick={handleAdd} className="dashboard_button">Add</button>
        </div>
    </div>
}

export default DashBoard