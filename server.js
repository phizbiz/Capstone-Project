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
app.get('/songs/:id', async (req, res) => {
  let oneSong = await Song.findOne({})
  res.json(oneSong)
})

// create album -- NEW -- POST
app.post('/songs', async (req, res) => {
  let createdSong = await Song.create(req.body)
  res.json(createdSong)
})

//create a song -- OLD -- POST
// app.post('/songs', async (req, res) => {
//   let exampleComposerId = '6392420d7c3447e2c4dde294'
//   // let exampleComposerId = (`/composer/${id}`)
//   let exampleTagId = '6392993c1cee26af60c83222'
//   const requestBody = {
//     ...req.body,
//     composer: exampleComposerId,
//     tag: exampleTagId
//   }
//   let createdSong = await Song.create(requestBody)
//   res.send(createdSong)
// })

//delete a song -- DELETE
app.delete('/songs/:id', async (req, res) => {
  let deletedSong = await Song.findByIdAndDelete(req.params.id)
  res.json(deletedSong)
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

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`)
})

//TAG ROUTES

//get a tag -- GET
app.get('/tags', async (req, res) => {
  let allTags = await Tag.find({})
  res.json(allTags)
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
