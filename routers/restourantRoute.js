const express = require('express');
const router = express.Router();
const { createRestourant } = require('../controllers/restourantController');

router.post('/', createRestourant);

module.exports = router;
