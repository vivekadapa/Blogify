const express = require('express');
const { createPost, getPosts, getPostsByAuthor, getPostById } = require('../controllers/postController');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

router.post('/post', verifyToken, createPost);
router.get('/posts', getPosts);
router.get('/posts/author', verifyToken, getPostsByAuthor);
router.get('/post/:id', getPostById)

module.exports = router;