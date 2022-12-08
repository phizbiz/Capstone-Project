const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Song, Composer } = require('./models')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//SONG ROUTES

//read all songs -- GET
app.get('/songs', async (req, res) => {
  let allSongs = await Song.find({})
  res.json(allSongs)
})

//read one song -- GET
app.get('/songs', async (req, res) => {
  let oneSong = await Song.findOne({})
  res.json(oneSong)
})

//create a song -- POST
app.post('/songs', async (req, res) => {
  let exampleComposerId = '6392420d7c3447e2c4dde294'
  const requestBody = { ...req.body, composer: exampleComposerId }
  let createdSong = await Song.create(requestBody)
  res.send(createdSong)
})

//delete a song -- DELETE
// app.delete('/songs/:id')

//COMPOSER ROUTES

//get a composer -- GET
app.get('/composers', async (req, res) => {
  let allComposers = await Composer.find({})
  res.json(allComposers)
})

//create a composer -- POST
app.post('/composers', async (req, res) => {
  let createdComposer = await Composer.create(req.body)
  res.send(createdComposer)
})

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`)
})
