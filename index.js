const express = require('express')
const app = express()
const port = 3000

//import
const {hello, hi,avengers} = require('./file')


app.get('/', (req, res) => {
  res.status(200)
  res.send('Hello World!'),
  res.send("My first Node.js Program")
})

app.get('/getTeam', (req, res) => {
  const {team, player} = req.query
  console.log({team, player})
  res.send(`Your team is ${team} and your favorite player is ${player}`)
}

)

console.log(hello())
console.log(hi())
// console.log()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})