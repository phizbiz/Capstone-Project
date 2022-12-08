const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Song } = require('./models')
const { Composer } = require('./models')

const app = express()

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Song routes

//create song
app.post('/songs', (req, res) => {
  res.send({ msg: 'I hit the songs route' })
})

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`)
})
