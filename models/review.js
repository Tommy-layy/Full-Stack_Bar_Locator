const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    bar: { type: Schema.Types.ObjectId, ref: 'Bar' },
    text: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema

//Bottom module exports doesn't work. Keeping in case there is a solution.
// module.exports = mongoose.model('Review', reviewSchema)
