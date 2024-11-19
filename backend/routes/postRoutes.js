const express = require('express');
const { createPost, getPosts, getPostsByAuthor } = require('../controllers/postController');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

router.post('/post', verifyToken, createPost);
router.get('/posts', getPosts);
router.get('/posts', getPostsByAuthor);

module.exports = router;