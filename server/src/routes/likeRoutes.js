/* eslint-disable no-shadow */
const Joi = require('joi');
const { findUserById } = require('./utils');
const verifyToken = require('./verifyToken');
const Like = require('../model/Like');
const Post = require('../model/Post');

const schema = Joi.object().keys({
    postId: Joi.string().required()
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
        '/api/like',
        validateToken,
        verifyToken,
        validateSchema,
        findUserById,
        (req, res) => {
            const { postId } = req.body;

            const like = new Like({
                author: req.user._id,
                post: postId
            });

            like.save(err => {
                if (err) return res.status(400).send({ message: err });

                Post.findById(postId).exec((err, post) => {
                    if (err)
                        return res.status(500).send({
                            message: 'There was a problem finding the post.'
                        });
                    if (!post)
                        return res
                            .status(404)
                            .send({ message: 'No post found.' });

                    post.likes.push(like._id);

                    post.save(err => {
                        if (err) return res.status(400).send({ message: err });

                        like.populate(
                            { path: 'author', select: 'email' },
                            (err, like) => {
                                if (err)
                                    return res.status(500).send({
                                        message: 'There was a problem.'
                                    });

                                return res.status(201).send({
                                    message: 'Like created',
                                    like
                                });
                            }
                        );
                    });
                });
            });
        }
    );

    app.delete(
        '/api/like',
        validateToken,
        verifyToken,
        validateSchema,
        findUserById,
        (req, res) => {
            const { postId } = req.body;
            Like.findOneAndRemove({ author: req.user._id }).exec(
                (err, like) => {
                    if (err) return res.status(400).send({ message: err });

                    if (!like)
                        return res
                            .status(400)
                            .send({ message: 'Like already deleted' });

                    Post.findById(postId).exec((err, post) => {
                        if (err)
                            return res.status(500).send({
                                message: 'There was a problem finding the post.'
                            });
                        if (!post)
                            return res
                                .status(404)
                                .send({ message: 'No post found.' });

                        post.likes.splice(like._id);

                        post.save(err => {
                            if (err)
                                return res.status(400).send({ message: err });

                            return res.status(200).send({
                                message: 'Like deleted'
                            });
                        });
                    });
                }
            );
        }
    );
};
