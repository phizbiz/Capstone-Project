const mongoose = require('mongoose')
const songSchema = require('./song')
const composerSchema = require('./composer')
const tagSchema = require('./tag')

const Song = mongoose.model('Song', songSchema)
const Composer = mongoose.model('Composer', composerSchema)
const Tag = mongoose.model('Tag', tagSchema)

module.exports = {
  Song,
  Composer,
  Tag
}
