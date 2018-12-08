const User = require('../model/User');

const Post = require('../model/Post');

const findUserById = (req, res, next) => {
    User.findById(req.userId, { password: 0 }, (err, user) => {
        if (err)
            return res
                .status(500)
                .send({ message: 'There was a problem finding the user.' });

        if (!user) return res.status(404).send({ message: 'No user found.' });

        req.user = user;
        next();
    });
};

const findPostById = (req, res, next) => {
    Post.findById(req.body.postId).exec((err, post) => {
        if (err)
            return res.status(500).send({
                message: 'There was a problem finding the post.'
            });
        if (!post) return res.status(404).send({ message: 'No post found.' });

        req.post = post;
        next();
    });
};

const findPostByIdQueryParam = (req, res, next) => {
    Post.findById(req.query.postId).exec((err, post) => {
        if (err)
            return res.status(500).send({
                message: 'There was a problem finding the post.'
            });
        if (!post) return res.status(404).send({ message: 'No post found.' });

        req.post = post;
        next();
    });
};

module.exports = { findUserById, findPostById, findPostByIdQueryParam };
