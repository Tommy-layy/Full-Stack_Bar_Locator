const mongoose = require('mongoose')
const model = require('mongoose')
const reviewSchema = require('./review')
const barSchema = require('./bar')

const Review = mongoose.model('Review', reviewSchema)
const Bar = mongoose.model('Bar', barSchema)

module.exports = {
  Review,
  Bar
}
