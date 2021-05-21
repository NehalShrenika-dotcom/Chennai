const express = require('express');
const authController = require('../controllers/auth.js');
const router = express.Router();
router.post('/register', authController.register);
router.post('/login',authController.login);
router.post('/products',authController.products);

module.exports = router;