const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const { barController, reviewController } = require('../controllers')

router.get('/', (req, res) => res.send('Working Text'))

// router.post('/reviewcreate', reviewController.createReview)

// router.get('/review', reviewController.getAllReviews)

// router.put('/review/:id', reviewController.updateReview)

// router.delete('/review/:id', reviewController.deleteReview)

// router.get('/bar', barController.getAllBars)

// router.get('/bar/:id', barController.getBars)

module.exports = router
