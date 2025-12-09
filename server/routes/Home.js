const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/Home');

router.get('/', HomeController.homePage);

router.get('/contact-us', HomeController.contactUsPage);

router.get('/api/contact-us', HomeController.contactUsPageAPI);

router.get('/api/products' , HomeController.searchPage)

// router.get('/api/categories' , HomeController.getCategories)


module.exports = router;
