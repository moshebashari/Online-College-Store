const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/Home')

router.get('/', HomeController.homePage);

router.get('/contact-us', HomeController.contactUsPage);

router.get('/search/', HomeController.searchPage)


module.exports = router;
