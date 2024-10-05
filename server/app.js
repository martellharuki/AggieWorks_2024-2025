// server/app.js
const express = require('express')
const app = express()
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json())  // For parsing JSON request bodies

const path = require('path')
const fs = require('fs')

const usersFilePath = path.join(__dirname, 'users.json')
const wardrobeFilesPath = path.join(__dirname, 'Wardrobe_Data/')
// Serve static files from React

// Server listening
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.post('/login', (req, res) => {
  // Access the JSON body using req.body
  const { username, password } = req.body

  // Check if the parameters are present
  if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' })
  }

  console.log(`Received username: ${username}, password: ${password}`)

  let status = ""
  let responseData = {}
  let userWardrobeData = {}
  let allUsers = readUsersFromFile()
  if(allUsers.hasOwnProperty(username)){
    if(allUsers[username] != password){
      console.log("Password: ", password, "does not match for username: ", username, " with password: ", allUsers[username])
      status = "No Match"
    } else {
      console.log("Match found")
      userWardrobeData = readWardrobeFile(username)
    }
  } else {
    console.log("Username: ", username, " has no match")
    status = "No Match"
  }
  responseData = {
    status: status,
    userWardrobeData: userWardrobeData,
  }

  res.json(responseData)
})

app.post('/signUp', (req, res) => {
  // Access the JSON body using req.body
  const { username, password } = req.body

  // Check if the parameters are present
  if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' })
  }

  // Process the data (e.g., save to a database)
  console.log(`Received username: ${username}, password: ${password}`)

  let status = ""
  let allUsers = readUsersFromFile()
  if(allUsers.hasOwnProperty(username)){
    console.log("Username: ", username, " is taken")
    status = "Taken"
  } else {
    allUsers[username] = password
    writeUsersToFile(allUsers)
    writeWardrobeFile(username, 0)
    console.log("Added user: ", username, " with password: ", password)
  }
    const userWardrobeData = {}
    const returnedData = {
      status: status,
      userWardrobeData: userWardrobeData,
    }

    res.json(returnedData)
})

app.post('/update', (req, res) => {
  const { username, num} = req.body
  let status=""
  writeWardrobeFile(username, num)
  const userWardrobeData = readWardrobeFile(username)
  const returnedData = {
    status: status,
    userWardrobeData: userWardrobeData,
  }
  res.json(returnedData)
})

const writeUsersToFile = (data) => {
  const jsonString = JSON.stringify(data, null, 2)
  fs.writeFileSync(usersFilePath, jsonString)
  console.log('User data has been written to the JSON file.')
}

const writeWardrobeFile = (username, num) => {
  const jsonData = {
    num: num
  }
  const jsonString = JSON.stringify(jsonData, null, 2)
  fs.writeFileSync(wardrobeFilesPath + username, jsonString)
}

const readWardrobeFile = (username) => {
  try {
    jsonData = fs.readFileSync(wardrobeFilesPath + username)
    return JSON.parse(jsonData)
  } catch (err) {
    console.error('Error reading file:', err)
    return {}
  }

}

const readUsersFromFile = () => {
  try {
      const jsonData = fs.readFileSync(usersFilePath, 'utf8')
      return JSON.parse(jsonData)
  } catch (err) {
      console.error('Error reading file:', err)
      return {}
  }
}



