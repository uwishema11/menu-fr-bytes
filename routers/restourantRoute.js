const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restourantController');

router.post('/',restaurantController.createRestourant);
router.get('/', restaurantController.getAllRestaurants)

module.exports = router;
