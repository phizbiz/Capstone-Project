const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => {
    console.log('Succesffully connected to MongoDB.')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db
