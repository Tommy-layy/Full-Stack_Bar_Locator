const Bar = require('../models/bar')

const getAllBars = async (req, res) => {
  try {
    const bar = await Bar.find()
    return res.status(200).json(bar)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBar = async (req, res) => {
  try {
    const bar = await Bar.findById(req.params.id)
    return res.status(200).json(bar)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBars,
  getBar
}
