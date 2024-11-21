const express = require('express');
const { signup, login, logout,verify } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout)
router.get('/verify',verify)

module.exports = router;
