const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user._id;

    try {
        const post = new Post({ title, content, author: userId });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'email');
        res.status(200).json(posts);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};


exports.getPostsByAuthor = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.user._id });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getPostById = async (req, res) => {

    try {
        const posts = await Post.findById(req.params.id).populate('author', 'email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}