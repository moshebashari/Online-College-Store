const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/API');
const HomeController = require('../controllers/Home');

router.get('/contact', ApiController.sendContactForm);

router.get('/categories', HomeController.getCategories)

module.exports = router;
