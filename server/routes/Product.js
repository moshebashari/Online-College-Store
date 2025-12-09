const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product')

router.get('/:productId', ProductController.productPage);

module.exports = router;