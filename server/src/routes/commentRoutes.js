/* eslint-disable no-shadow */
const Joi = require('joi');
const { findUserById, findPostById } = require('./utils');
const verifyToken = require('./verifyToken');
const Comment = require('../model/Comment');

const schema = Joi.object().keys({
    text: Joi.string().required(),
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
        '/api/comment',
        validateToken,
        verifyToken,
        validateSchema,
        findUserById,
        findPostById,
        (req, res) => {
            const { text, postId } = req.body;

            const comment = new Comment({
                text,
                author: req.user._id,
                post: postId
            });

            comment.save(err => {
                if (err) return res.status(400).send({ message: err });

                req.post.comments.push(comment._id);

                req.post.save(err => {
                    if (err) return res.status(400).send({ message: err });

                    comment.populate(
                        { path: 'author', select: 'email' },
                        (err, comment) => {
                            if (err)
                                return res.status(500).send({
                                    message: 'There was a problem.'
                                });

                            return res.status(201).send({
                                message: 'Comment created',
                                comment
                            });
                        }
                    );
                });
            });
        }
    );
};
