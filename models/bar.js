const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = barSchema

//Bottom module exports doesn't work. Keeping in case there is a solution.
// module.exports = mongoose.model('Bar', barSchema)
