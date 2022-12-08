const { Schema } = require('mongoose')

const songSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true }
    // composer: [{ type: Schema.Types.ObjectId, ref: 'Composer', required: true }]
  },
  { timestamps: true }
)

module.exports = songSchema
