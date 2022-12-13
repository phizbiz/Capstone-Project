const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Song, Composer, Tag } = require('./models')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//SONG ROUTES

//read all songs -- GET
app.get('/songs', async (req, res) => {
  let allSongs = await Song.find({})
  res.json(allSongs)
})

//read one song -- OLD -- GET
app.get('/songs/:id', async (req, res) => {
  let oneSong = await Song.findById(req.params.id)
  res.json(oneSong)
})

// create album -- NEW -- POST
app.post('/songs', async (req, res) => {
  let createdSong = await Song.create(req.body)
  res.json(createdSong)
})

//delete a song -- DELETE
app.delete('/songs/:id', async (req, res) => {
  let deletedSong = await Song.findByIdAndDelete(req.params.id)
  res.json(deletedSong)
})

//delete all songs -- DELETE
app.delete('/songs/all', async (req, res) => {
  let deleteAllSongs = await Song.deleteMany({})
  res.json(deleteAllSongs)
})

//update a song -- PUT
app.put('/songs/:id', async (req, res) => {
  let updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedSong)
})

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

//delete a composer -- DELETE
app.delete('/composers/:id', async (req, res) => {
  let deleteComposer = await Composer.findByIdAndDelete(req.params.id)
  res.send(deleteComposer)
})

//TAG ROUTES

//get all tags -- GET
app.get('/tags', async (req, res) => {
  let allTags = await Tag.find({})
  res.json(allTags)
})

//get one tag -- GET
app.get('/tags/:id', async (req, res) => {
  let foundTag = await Tag.findById(req.params.id)
  res.json(foundTag)
})

//create a tag -- POST
app.post('/tags', async (req, res) => {
  let createdTag = await Tag.create(req.body)
  res.send(createdTag)
})

//delete tag -- DELETE
app.delete('/tags/:id', async (req, res) => {
  let deletedTag = await Tag.findByIdAndDelete(req.params.id)
  res.json(deletedTag)
})

//update tag -- PUT
app.put('/tags/:id', async (req, res) => {
  let updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedTag)
})

//read songs by tag -- GET
app.get('/tag/:id', async (req, res) => {
  // console.log(req.params)
  const songTag = await Song.find({
    tag: req.params.id
  })
  res.json(songTag)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

//Express Server Running
app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`)
})
