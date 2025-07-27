const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/Home')

router.get('/', HomeController.homePage);

router.get('/contact-us', HomeController.contactUsPage);

router.get('/api/contact-us', HomeController.contactUsPageAPI);


module.exports = router;
