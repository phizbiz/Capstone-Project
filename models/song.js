const { Schema, default: mongoose } = require('mongoose')
// const mongoose = require('mongoose')

// const songSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     url: { type: String, required: false },
//     composer: [
//       { type: Schema.Types.ObjectId, ref: 'Composer', required: true }
//     ],
//     tag: { type: Schema.Types.ObjectId, ref: 'Tag', required: false }
//   },
//   { timestamps: true }
// )

// let Schema = mongoose.Schema

const songSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  },
  composer: {
    type: String,
    ref: 'Composer',
    required: false
  },
  tag: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
      required: false
    }
  ]
})

// const songSchema = mongoose.model('song', songSchema)

module.exports = songSchema
