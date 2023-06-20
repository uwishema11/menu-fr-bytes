
const express = require('express');
const router = express.Router();
const addressesController = require('../controllers/addressController');

router.post('/',addressesController.createAddresses);

module.exports = router;
