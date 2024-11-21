const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.id;

    try {
        const post = new Post({ title, content, authorId: userId });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    // const { author } = req.query;
    try {
        const posts = await Post.find().populate('authorId', 'email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getPostsByAuthor = async (req, res) => {
    try {
        const posts = await Post.find({ authorId: req.user.id });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getPostById = async (req, res) => {

    try {
        const posts = await Post.findById(req.params.id).populate('authorId');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}