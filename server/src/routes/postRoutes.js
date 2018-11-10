/* eslint-disable no-shadow */

const Joi = require('joi');
const { findUserById } = require('./utils');
const verifyToken = require('./verifyToken');
const Post = require('../model/Post');
const { upload, cloudinarySaveImage } = require('../utils/cloudinaryUtils');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    text: Joi.string().required()
});

const validateSchema = (req, res, next) => {
    Joi.validate(req.body, schema, err => {
        if (err) return res.status(400).send({ message: 'Missing parameters' });

        next();
    });
};

const token = Joi.string().required();

const validateToken = (req, res, next) => {
    Joi.validate(req.headers['x-access-token'], token, err => {
        if (err) return res.status(400).send({ message: 'Missing token' });

        next();
    });
};

module.exports = app => {
    app.post(
        '/api/post',
        validateToken,
        verifyToken,
        upload.single('image'),
        validateSchema,
        findUserById,
        (req, res) => {
            const { title, description, text } = req.body;

            cloudinarySaveImage(req).then(({ secure_url }) => {
                const post = new Post({
                    title,
                    description,
                    text,
                    image: secure_url,
                    author: req.user._id
                });

                post.save(err => {
                    if (err) return res.status(400).send({ message: err });

                    post.populate(
                        { path: 'author', select: 'email' },
                        (err, post) => {
                            if (err)
                                return res.status(500).send({
                                    message: 'There was a problem.'
                                });

                            return res
                                .status(201)
                                .send({ message: 'Post created', post });
                        }
                    );
                });
            });
        }
    );

    app.get('/api/post/:id', (req, res) => {
        const { id } = req.params || 1;

        Post.findById(id)
            .populate('author')
            .populate({
                path: 'comments',
                populate: { path: 'author' }
            })
            .populate({
                path: 'likes',
                populate: { path: 'author' }
            })
            .exec((err, post) => {
                if (err)
                    return res.status(500).send({
                        message: 'There was a problem finding the post.'
                    });
                if (!post)
                    return res.status(404).send({ message: 'No post found.' });

                return res.status(200).send(post);
            });
    });

    app.get('/api/posts/:page', (req, res, next) => {
        const perPage = 2;
        const { page } = req.params || 1;

        const query = Post.find({})
            .skip(perPage * page - perPage)
            .sort('-date')
            .limit(perPage)
            .populate('author');

        query.exec((err, posts) => {
            Post.count().exec((error, count) => {
                if (error) return next(error);

                return res.status(200).send({
                    posts,
                    current: Number(page),
                    pages: Math.ceil(count / perPage)
                });
            });
        });
    });

    app.get('/api/posts', (req, res, next) => {
        const query = Post.find({})
            .sort('-date')
            .populate('author', 'email')
            .populate({
                path: 'comments',
                populate: { path: 'author', select: 'email' }
            })
            .populate({
                path: 'likes',
                populate: { path: 'author', select: 'email' }
            });

        query.exec((error, posts) => {
            if (error) return next(error);

            return res.status(200).send({
                posts
            });
        });
    });
};
