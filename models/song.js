const { Schema } = require('mongoose')

const songSchema = new Schema = new Schema(
    {
        name: { type: String, required: true},
        url: { type: String, required: false},
        composer: [{ type: Schema.Types.ObjectId, ref: 'Composer', required: true }]
    },
    { timestamps: true }
)

module.exports = songSchema