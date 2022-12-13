const { Schema } = require('mongoose')

const composerSchema = new Schema(
  {
    name: { type: String, required: true },
    pro: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = composerSchema
