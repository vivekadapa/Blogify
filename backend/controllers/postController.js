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
    const { author } = req.query;

    try {
        const filter = author ? { authorId: author } : {};
        const posts = await Post.find(filter).populate('authorId', 'email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getPostsByAuthor = async (req, res) => {
    const { author } = req.query;

    try {
        const posts = await Post.find({ author });
        if (!posts.length) {
            return res.status(404).json({ error: 'No posts found for this author' });
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
