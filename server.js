const express = require('express')
const app = express()
const port = 3000
const User = require("./classes/user")
const Messages = require("./classes/messages")



//userArray
var users = [
  new User("1", "DonkeyMan127", "Donkey@gmail.com"),
  new User("2", "LouieBOI73", "DadsMustache@gmail.com"),
  new User("3", "JakeyPoo", "feetguy@feetlover.com")
];

//Create a GET endpoint to get a single User from the Users array based on the User's ID
app.get('/users', (req, res) => {
  res.send(users)
})

//Create a POST endpoint to add a user to an array called "Users"
app.post('/users', (req, res) => {
  users.push = new User()
  res.send(users)
)}

app.get('/', (req, res) => {
  res.send('Hello')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


