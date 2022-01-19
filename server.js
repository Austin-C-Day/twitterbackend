const express = require('express')
const app = express()
const port = 3000
const User = require("./classes/user")


var userDatabase = [
  new User("1", "DonkeyMan127", "Donkey@gmail.com"),
  new User("2", "LouieBOI73", "DadsMustache@gmail.com"),
  new User("3", "JakeyPoo", "feetguy@feetlover.com")
];



app.get('/users', (req, res) => {
  res.send(userDatabase)
})



app.get('/', (req, res) => {
  res.send('Hello')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


