const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/API');

router.get('/contact', ApiController.sendContactForm);
router.get('/search', ApiController.searchItems);

module.exports = router;
