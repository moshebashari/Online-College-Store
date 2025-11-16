const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/API');

router.get('/contact', ApiController.sendContactForm);

module.exports = router;
