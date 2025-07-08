const express = require('express');
const router = express.Router();
const homeContorller = require('../controllers/Home');
const contactController = require('../controllers/Contact')

router.get('/', homeContorller.homePage);

router.get('/contact', contactController.contactPage);

router.get('/api/contact', contactController.contactApi);

module.exports = router;

