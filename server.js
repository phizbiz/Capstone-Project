const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Song } = require('./models')
const { Composer } = require('./models')

const app = express()

//middleware
app.use(express.json())

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
  let createdSong = await Song.create(req.body)
  res.send(createdSong)
})

//delete a song -- SONG
// app.delete('/songs/:id')

//COMPOSER ROUTES
app.post('/composer', async (req, res) => {
  let createdComposer = await Composer.create(req.body)
  res.send(createdComposer)
})

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`)
})
