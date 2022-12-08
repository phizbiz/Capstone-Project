const { Schema } = require('mongoose')

const songSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: false },
    composer: [
      { type: Schema.Types.ObjectId, ref: 'Composer', required: false }
    ],
    tag: [{ type: Schema.Types.ObjectId, ref: 'Tag', required: true }]
  },
  { timestamps: true }
)

module.exports = songSchema
