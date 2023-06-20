
const express = require('express');
const router = express.Router();
const addressesController = require('../controllers/addressController');

router.post('/',addressesController.createAddresses);
router.get('/', restaurantController.getAllAddresses)

module.exports = router;
