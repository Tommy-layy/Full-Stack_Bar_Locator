const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const { barController, reviewController } = require('../controllers')

router.get('/', (req, res) => res.send('Working Text'))

// router.post('/reviewcreate', controllers.createReview)

// router.get('/review', controllers.getAllReviews)

// router.put('/review/:id', controllers.updateReview)

// router.delete('/review/:id', controllers.deleteReview)

// router.get('/bar', controllers.getAllBars)

// router.get('/bar/:id', controllers.getBars)

module.exports = router
