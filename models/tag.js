const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const tagSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

const Tag = mongoose.model('tag', tagSchema)

module.exports = tagSchema
