const mongoose = require('mongoose')
const songSchema = require('./song')
const composerSchema = require('./composer')

const Song = mongoose.model('Song', songSchema)
const Composer = mongoose.model('Composer', composerSchema)

module.exports = {
  Song,
  Composer
}
