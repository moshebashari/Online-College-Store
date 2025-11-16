const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');

router.post('/sign-up', AuthController.signUpForm);
router.post('/log-in', AuthController.logInForm);

module.exports = router;