const { Schema } = require('mongoose')

const composerSchema = new Schema(
  {
    name: { type: String, required: true },
    pro: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = composerSchema
