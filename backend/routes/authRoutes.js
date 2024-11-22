const express = require('express');
const { verifyToken } = require('../middlewares/auth');
const { signup, login, logout, verify, refreshAccessToken } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh', refreshAccessToken)
router.post('/logout', verifyToken, logout)
router.get('/verify', verifyToken, verify)

module.exports = router;
